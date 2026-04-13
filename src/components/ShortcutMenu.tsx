const links = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Nyheter", href: "#nyheter" },
  { label: "Parken", href: "#parken" },
  { label: "Öppettider", href: "#oppettider" },
  { label: "Regler", href: "#regler" },
  { label: "Medlemskap", href: "#medlemskap" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Sponsorer", href: "#sponsorer" },
];

const ShortcutMenu = () => {
  return (
    <nav className="bg-sus-concrete border-b border-border">
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-0 py-2 px-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-sm tracking-widest text-sus-white/70 hover:text-primary transition-colors px-3 py-1.5 uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default ShortcutMenu;
