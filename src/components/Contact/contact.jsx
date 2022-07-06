// ! Import Css
import "./contact.css";

// ! Import Component
import Header2 from "../Header2/header2";
import Footer2 from "../footer2/footer2";

// ! import Image
import scientist from "../pict/chemistry.svg";

// ! Import NodeModule
import { Component } from "react";
import AOS from "aos";

export default class contact extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section className="contact">
        <Header2></Header2>
        <div className="contacts">
          <div className="card">
            <div className="imgBx">
              <img src={scientist} alt="" />
            </div>
            <form
              action="submit"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="input">
                <input type="text" name="nama" required placeholder="Nama" autoFocus/>
              </div>
              <div className="input">
                <input type="text" name="kelas" required placeholder="Kelas" />
              </div>
              <div className="input">
                <input type="text" name="absen" placeholder="No Absen" />
              </div>
              <div className="input">
                <textarea
                  name="nama"
                  rows="8"
                  required
                  placeholder="Apa yang ingin anda sampaikan?"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer2></Footer2>
      </section>
    );
  }
}
