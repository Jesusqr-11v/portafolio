export const Projects = ({ title, description, img, ruta }) => {
  return (
    <>
      <article className="project">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <img src={img} alt="Imagen del proyecto" />
        </div>
        <a href={ruta}>View app</a>
      </article>
    </>
  );
};
