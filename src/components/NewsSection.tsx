import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

const NewsSection = () => {
  const [news, setNews] = useState<Tables<"news">[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase
        .from("news")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(6);
      setNews(data || []);
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) return null;
  if (news.length === 0) return null;

  return (
    <section
      className="bg-background relative"
      style={{ padding: "clamp(4rem, 8vw, 8rem) 0" }}
    >
      <div
        className="max-w-5xl mx-auto"
        style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}
      >
        <p className="label-text">Aktuellt</p>
        <h2 className="section-title mb-10">Nyheter</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-card border border-border rounded-lg p-6 flex flex-col"
            >
              <time
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "hsl(var(--yellow))" }}
              >
                {new Date(item.created_at).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="font-display text-xl mb-3 leading-tight">
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(245,240,232,0.7)" }}
              >
                {item.content}
              </p>
              {item.author && (
                <p className="text-xs mt-4 opacity-50">— {item.author}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
