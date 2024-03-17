import "./Status.scss";
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Status() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left" data-aos="zoom-in-up">
          <h2>Trust us due to our safe and convnient deposit</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            dignissimos eius non nam quis sed corporis, unde ducimus esse quidem
            ut earum laboriosam officia. Iusto error unde aliquid. Eaque, quo.
          </p>
          <a href="#" className="btn">
            KNOW MORE
          </a>
        </div>
        <div className="status__right" data-aos="fade-left">
          <img src={StatusImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Status;
