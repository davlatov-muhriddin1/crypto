import "./Hero.scss";
import Mob from "../../assets/Mob.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="hero__container wrapper">
      <div className="hero__left" data-aos="fade-right">
        <img src={Mob} alt="hero" />
      </div>
      <div className="hero__right" data-aos="zoom-in-up">
        <h1>Make easier your crypto transactions.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora
          ad iure amet architecto soluta et, error animi exercitationem tempore
          itaque quisquam doloribus molestiae consequatur dolore dicta placeat!
          Doloremque, earum!
        </p>
        <a href="#" className="btn">
          TRY FOR FREE
        </a>
      </div>
    </section>
  );
}

export default Hero;
