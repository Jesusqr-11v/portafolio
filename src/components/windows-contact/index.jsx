import "./styles.css";
import { useState } from "react";

export const Windows = () => {
  const [click, setClick] = useState(0);
  if (click === 5) {
    alert("Oye, tranquilo el boton es solo decoracion");
    setClick(0);
  }
  return (
    <div className="windows">
      <section className="windows__section">
        <div className="windows__bar">
          <div className="windows__bar-name">
            <img src="computer.png" alt="Icon concact" />
            <p>Contact</p>
          </div>
          <div className="shadow">
            <button
              className="windows__bar-x"
              onClick={() => {
                setClick(click + 1);
              }}
            >
              X
            </button>
          </div>
        </div>
        <div className="windows__concact">
          <div className="windows__concact-red">
            <div>
              <a href="mailto:qrjesus11@gmail.com">
                <img
                  src="email.png"
                  alt="Email logo"
                  className="windows__concact-img"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/jesus-quintero-rivas/"
                target="_blanck"
              >
                <img
                  src="linkedin.png"
                  alt="Linkedin logo"
                  className="windows__concact-img email"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/Jesusqr-11v" target="_blanck">
                <img
                  src="github.png"
                  alt="github logo"
                  className="windows__concact-img"
                />
              </a>
            </div>
          </div>
          <div className="windows__concact-form">
            <div>
              <h3>Veo que coloco luego</h3>
              <form>
                <div className="item__concact">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" />
                </div>
                <div className="item__concact">
                  <label htmlFor="number">Numero</label>
                  <input type="text" id="number" />
                </div>
                <div className="item__concact">
                  <label htmlFor="email">Correo</label>
                  <input type="text" id="email" />
                </div>
                <div className="item__concact">
                  <label htmlFor="asunto">Asunto</label>
                  <input type="text" id="asunto" />
                </div>
                <div className="item__concact textarea">
                  <label htmlFor="message">Mensaje</label>
                  <textarea name="" id="message"></textarea>
                </div>
                <div className="item__button">
                  <button>Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
