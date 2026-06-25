const base = import.meta.env.BASE_URL;

const banners = [
  { id: "01", href: "#", label: "Comunidade de líderes", src: `${base}Banner - 1.png` },
  { id: "02", href: "#", label: "O mapa da expansão do líder", src: `${base}Banner - 2.png` },
  { id: "03", href: "#", label: "Jeito plena de ser", src: `${base}Banner - 3.png` },
  { id: "04", href: "#", label: "Descubra seu perfil de liderança", src: `${base}Banner - 4.png` },
];

export default function Banners() {
  return (
    <section>
      <div className="banners">
        {banners.map(({ id, href, label, src }) => (
          <a
            key={id}
            className="banner"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <img className="banner__img" src={src} alt={label} />
          </a>
        ))}
      </div>
    </section>
  );
}
