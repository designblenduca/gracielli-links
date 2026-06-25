export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__avatar">
        <img src={`${import.meta.env.BASE_URL}icon.png`} alt="Graciélli Camini" />
      </div>
      <h1 className="hero__name">Graciélli Camini</h1>
      <p className="hero__bio">
        Desenvolva uma liderança mais segura, estratégica e emocionalmente
        preparada para conduzir pessoas com clareza, respeito e resultado.
      </p>
    </section>
  );
}
