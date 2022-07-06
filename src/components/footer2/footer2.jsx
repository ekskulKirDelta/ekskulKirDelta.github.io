// ! Import Css
import "./footer2.css";

// ! Import Image
import logo from "../pict/logo.svg"

export default function Footer2() {
  return (
    <section className="footer2">
      <footer>
        <div className="item">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="dev">
            <h3>
              Copyright © Muhammad Fadhil Syahrian <span>♥</span>
            </h3>
          </div>
        </div>
      </footer>
    </section>
  );
}
