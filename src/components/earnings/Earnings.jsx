import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Earnings() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
          <img src={Img} alt="" />
        </div>
        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Track your earnings and cryptocode made it easy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vero, iste deserunt sit error repellendus eligendi excepturi et, ab,
            beatae totam labore. Dolorum quam sit iure reprehenderit nemo itaque
            doloremque!
          </p>

          <a href="#" className="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
}

export default Earnings;
