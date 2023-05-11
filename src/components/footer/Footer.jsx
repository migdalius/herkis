import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__section">
          <h4 class="footer__title">O Herkis</h4>
          <ul class="footer__list">
            <li>
              <a href="#" class="footer__link">
                O nas
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Praca
              </a>
            </li>

            <li>
              <a href="#" class="footer__link">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <h4 class="footer__title">Dla piekarni</h4>
          <ul class="footer__list">
            <li>
              <a href="#" class="footer__link">
                Dodaj piekarnie
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Jak to działa?
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Test 1
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Test 2
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Test 3
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <h4 class="footer__title">Dla użytkowników</h4>
          <ul class="footer__list">
            <li>
              <a href="#" class="footer__link">
                Logowanie
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Rejestracja
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Jak zarezerwować produkty?
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Jak kupić produkty?
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__section">
          <h4 class="footer__title">Top 5 miast</h4>
          <ul class="footer__list">
            <li>
              <a href="#" class="footer__link">
                Warszawa
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Kraków
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Łódź
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Wrocław
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Poznań
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
