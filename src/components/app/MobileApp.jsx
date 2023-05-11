import React, { useState } from "react";
import "./MobileApp.scss";
const MobileApp = () => {
  const [showFullText, setShowFullText] = useState(false);
  const text =
    "Zgadzam się na przetwarzanie moich danych osobowych przez Herkis Sp. z o.o., ul.Magiczna 30, 00-500 Warszawa, w celu realizacji usługi newsletter, a tym samym wysyłania mi informacji o produktach blogowych, usługach, promocjach lub nowościach zgodnie z polityką prywatności (zgodnie z Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz. U. z 2019 r. poz. 1781). Wiem, że zgodę tę mogę w każdej chwili wycofać.";

  const truncatedText = text.substr(0, 50) + "(...)";

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="mobile-app">
      <div className="container">
        <div className="left">
          <img src="./img/phone.png" alt="" />
        </div>
        <div className="right">
          <div className="title">Aplikacja mobilna</div>
          <div className="sub-title">już wkrótce!</div>
          <div className="desc">
            Pracujemy nad aplikacją mobilną. Zapisz się do naszego newslettera,
            aby otrzymać powiadomienie o starcie!
          </div>
          <div className="newsletter">
            <input type="text" />
            <button>Zapisz</button>
          </div>
          <label>
            <input type="radio" name="food" />
            {showFullText ? text : truncatedText}
            {text.length > 50 && (
              <p onClick={handleClick}>
                {showFullText ? "Pokaż mniej" : "Pokaż więcej"}
              </p>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
