import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe & get news updates</h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ea adipisci ut magni dolores suscipit sed, commodi laboriosam eligendi
          neque dignissimos necessitatibus! Nesciunt neque totam inventore
          magnam doloribus sequi dignissimos corporis, mollitia ipsa! Sint
          veniam, fugit totam omnis unde alias earum quas dolores expedita
          voluptatum, quo sapiente minus ad cupiditate.
        </p>
        <form>
          <input type="email" placeholder="Write Your Email Here" />
          <a href="#" className="btn">
            Subscribe
          </a>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
