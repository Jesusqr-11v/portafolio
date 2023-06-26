import "./styles.css";

export const Card = ({ title, description, link }) => {
  return (
    <>
      <section className="card">
        <div className="card__decoration">
          <div className="card__decoration-object"></div>
          <div className="card__decoration-object"></div>
          <div className="card__decoration-object"></div>
        </div>
        <article className="card__info">
          <p className="card__title">
            <strong>{title}</strong>
          </p>
          <p className="card__description">{description}</p>
        </article>
        <p className="card__link">
          <a href="">
            <strong>Read more</strong> <span>→</span>
          </a>
        </p>
      </section>
    </>
  );
};
