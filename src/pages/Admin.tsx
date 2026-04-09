import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Trash2, LogOut, Plus, Eye, EyeOff } from "lucide-react";

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<Tables<"news">[]>([]);

  // Auth form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // News form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchNews();
  }, [session]);

  const fetchNews = async () => {
    const { data } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });
    setNews(data || []);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Inloggning misslyckades", description: error.message, variant: "destructive" });
    }
    setAuthLoading(false);
  };

  const handleSignUp = async () => {
    setAuthLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      toast({ title: "Registrering misslyckades", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Kolla din e-post!", description: "En bekräftelselänk har skickats." });
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleCreateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;
    const { error } = await supabase.from("news").insert({
      title,
      content,
      author,
      user_id: session.user.id,
    });
    if (error) {
      toast({ title: "Kunde inte skapa nyhet", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Nyhet skapad!" });
      setTitle("");
      setContent("");
      setAuthor("");
      setShowForm(false);
      fetchNews();
    }
  };

  const handleTogglePublished = async (id: string, published: boolean) => {
    await supabase.from("news").update({ published: !published }).eq("id", id);
    fetchNews();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Vill du verkligen ta bort denna nyhet?")) return;
    await supabase.from("news").delete().eq("id", id);
    fetchNews();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Laddar...</p>
      </div>
    );
  }

  // Login screen
  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="font-display text-4xl mb-2">Admin</h1>
            <p className="text-sm text-muted-foreground">Logga in för att hantera nyheter</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="E-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={authLoading}>
              {authLoading ? "Loggar in..." : "Logga in"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleSignUp}
              disabled={authLoading}
            >
              Registrera nytt konto
            </Button>
          </form>
          <a href="/" className="block text-center text-sm text-muted-foreground hover:text-foreground">
            ← Tillbaka till hemsidan
          </a>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-4xl">Nyheter</h1>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <div className="flex gap-2">
            <a href="/">
              <Button variant="ghost" size="sm">← Hemsidan</Button>
            </a>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" /> Logga ut
            </Button>
          </div>
        </div>

        {/* Create news form */}
        {showForm ? (
          <form onSubmit={handleCreateNews} className="bg-card border border-border rounded-lg p-6 mb-8 space-y-4">
            <h2 className="font-display text-2xl">Ny nyhet</h2>
            <Input
              placeholder="Rubrik"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Textarea
              placeholder="Innehåll"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={4}
            />
            <Input
              placeholder="Författare (valfritt)"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <div className="flex gap-2">
              <Button type="submit">Publicera</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Avbryt
              </Button>
            </div>
          </form>
        ) : (
          <Button onClick={() => setShowForm(true)} className="mb-8">
            <Plus className="w-4 h-4 mr-1" /> Lägg till nyhet
          </Button>
        )}

        {/* News list */}
        <div className="space-y-4">
          {news.length === 0 && (
            <p className="text-muted-foreground text-center py-12">Inga nyheter ännu. Skapa din första!</p>
          )}
          {news.map((item) => (
            <div
              key={item.id}
              className={`bg-card border border-border rounded-lg p-5 flex items-start gap-4 ${
                !item.published ? "opacity-60" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {!item.published && (
                    <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-muted rounded text-muted-foreground">
                      Gömd
                    </span>
                  )}
                  <time className="text-xs text-muted-foreground">
                    {new Date(item.created_at).toLocaleDateString("sv-SE")}
                  </time>
                </div>
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.content}</p>
              </div>
              <div className="flex gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleTogglePublished(item.id, item.published)}
                  title={item.published ? "Göm" : "Publicera"}
                >
                  {item.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(item.id)}
                  title="Ta bort"
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
