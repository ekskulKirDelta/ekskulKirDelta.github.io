// ! Import Css
import "./contact.css";

// ! Import Component
import Header2 from "../Header2/header2";
import Footer2 from "../footer2/footer2";

// ! import Image
import scientist from "../pict/chemistry.svg";

// ! Import NodeModule
import AOS from "aos";
import emailjs from "emailjs-com";

export default function Contact() {
  AOS.init();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yuaym3i",
        "template_0plrpd9",
        e.target,
        "v-Shx8BqnvFM8C7Kn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

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
            onSubmit={sendEmail}
          >
            <div className="input">
              <input
                type="text"
                name="name"
                required
                placeholder="Nama"
                autoFocus
              />
            </div>
            <div className="input">
              <input type="text" name="kelas" required placeholder="kelas" />
            </div>
            <div className="input">
              <input type="text" name="absen" placeholder="No Absen" />
            </div>
            <div className="input">
              <textarea
                name="message"
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
