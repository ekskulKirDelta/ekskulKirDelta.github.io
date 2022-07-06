// ! Import Css
import "./content.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// ! Import JS
import { Component } from "react";
import AOS from "aos";
import Footer2 from "../footer2/footer2";

// ! Import SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// ! Import Picture
import Anggota from "../pict/anggota.png";
import MicroScope from "../pict/microscope.png";
import logo from "../pict/logo.svg";
import sertif1 from "../pict/sertif1.webp";
import sertif2 from "../pict/sertif2.webp";
import sertif3 from "../pict/sertif3.webp";
import sertif4 from "../pict/sertif4.webp";
import scientist from "../pict/scientist.svg";

SwiperCore.use([Navigation, Pagination, Autoplay])

export default function Content() {
  AOS.init();

  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={"sertif" + (i + 1)} alt={`Slide ${i}`} />
      </SwiperSlide>
    );
  }

  return (
    <section id="content">
      <div className="content">
        <h1>
          Ayo kenalan lebih jauh lagi yuk sama ekskul <span>KIR</span>
        </h1>
      </div>

      <div
        className="anggota"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <div className="head">
          <h1>our soldier</h1>
        </div>
        <div className="body">
          <div className="pictAnggota">
            <img src={Anggota} alt="Anggota" />
          </div>
          <div className="capt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              minima commodi omnis alias nisi, modi aliquid aliquam qui eos
              pariatur soluta laborum ex labore, obcaecati, illo id delectus
              inventore. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aliquid est repudiandae, blanditiis quis officia eum natus
              minima id, eos, quidem itaque voluptates! Esse, asperiores atque
              impedit corporis eius soluta fuga.
            </p>
          </div>
        </div>
      </div>

      <div
        className="kegiatan"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <div className="head">
          <h1>our activity</h1>
        </div>
        <div className="body">
          <div className="card">
            <div className="top">
              <img src={MicroScope} alt="MicroScope" />
              <h1>Research</h1>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                velit molestias voluptatibus deserunt laborum ab accusamus
                nesciunt nostrum itaque consequatur veniam, exercitationem in
                recusandae repellat? Numquam ad eveniet quidem adipisci!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={MicroScope} alt="MicroScope" />
              <h1>Research</h1>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                velit molestias voluptatibus deserunt laborum ab accusamus
                nesciunt nostrum itaque consequatur veniam, exercitationem in
                recusandae repellat? Numquam ad eveniet quidem adipisci!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={MicroScope} alt="MicroScope" />
              <h1>Research</h1>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                velit molestias voluptatibus deserunt laborum ab accusamus
                nesciunt nostrum itaque consequatur veniam, exercitationem in
                recusandae repellat? Numquam ad eveniet quidem adipisci!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prestasi">
        <div className="head">
          <h1>Our Soldier Performance</h1>
        </div>
        <Swiper id="main" tag="section" wrapperTag="ul"
        navigation 
        pagination
        autoplay={true}>
          <SwiperSlide>
            <img src={sertif1} alt="sertif" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sertif2} alt="sertif" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sertif3} alt="sertif" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sertif4} alt="sertif" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="about">
        <div className="img">
          <img src={scientist} alt="illustration" />
        </div>
        <div
          className="capt"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            itaque explicabo autem ipsa officiis, rerum eligendi inventore quo
            omnis, impedit doloribus veritatis nihil aliquam sed quidem ratione
            ullam laudantium voluptas?. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Necessitatibus odio ipsam provident vitae
            architecto ratione commodi voluptatem omnis nemo voluptates nisi
            animi soluta beatae at non culpa, id exercitationem quas?
          </p>
        </div>
      </div>
      <Footer2></Footer2>
    </section>
  );
}
