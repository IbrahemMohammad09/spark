import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useInView } from "react-intersection-observer";
import image1 from "../../images/ViewProjectImages/Blue Caves - Zante, Greece.jpeg";
import { BiArrowBack } from "react-icons/bi";
import "./ViewProject.css";
import Img from "../../images/ViewProjectImages/Mykonos.jpeg";
import Img1 from "../../images/ViewProjectImages/ww.jpeg";
import Img2 from "../../images/ViewProjectImages/71fc178a-3216-4f88-a91f-c70a41eb749a.jpeg";
import Img3 from "../../images/ViewProjectImages/Blue Caves - Zante, Greece.jpeg";
import Img4 from "../../images/ViewProjectImages/download (40).jpeg";
import Img5 from "../../images/ViewProjectImages/PeqCi.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container,Row,Col } from "react-bootstrap";

export const ViewProject = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const images = [
    {
      img: Img,
    },
    {
      img: Img,
    },
    {
      img: Img,
    },
    {
      img: Img,
    },
    {
      img: Img,
    },
    {
      img: Img,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="theContain">
      <div onClick={() => window.history.back()} className="back-button">
        <BiArrowBack />
      </div>
      <div className="viewContainer">

      
        <img src={image1} alt="image1" className="back-image" />
        <div className="shadow"></div>
        <div
          ref={ref}
          className={`info-box active ${inView ? "fade-in-bottom" : ""} `}
        >
          <h1>Drop-in audio chat</h1>
          <h2>
            Spark is a software engineering company that specializes in
            developing cutting-edge solutions for various domains. We have a
            team of talented and passionate engineers who are always ready to
            take on new challenges and deliver high-quality products.
          </h2>
          <div className="buttons">
            <div className="visit-button">
              <MainButton
                url={"https://MRR.com"}
                title={"visit project"}
                addStyle={"projects-button-see-all"}
              />
            </div>
          </div>
        </div>

        


        <div className={`right-image ${inView ? "fade-in-bottom" : ""}`}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.img} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>

      </div>



    </div>
  );
};
