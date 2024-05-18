import { SwiperSlide } from "swiper/react";
import "./ImagesSwiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrow1 from "../../../images/ViewProject/arrow 1.svg";
import arrow2 from "../../../images/ViewProject/arrow 2.svg";
import { Swiper } from "swiper/react";
import { useEffect, useState, useRef } from "react";
import generateAlt from "../../../utils/GenerateImageAlt";
import { Container } from "react-bootstrap";

const ImagesSwiper = ({ imgs, setHoveredImage, mainImage, setMainImage }) => {
  const [perView, setPerView] = useState(5);
  const swiperRef = useRef();
  const [test, setTest] = useState(false);
  const [test2, setTest2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const handleMedia = () => {
      if (window.innerWidth < 460) {
        setPerView(2);
      } else if (window.innerWidth < 768) {
        setPerView(3);
      } else if (window.innerWidth < 1150) {
        setPerView(4);
      } else if (window.innerWidth < 1400) {
        setPerView(5);
      } else if (window.innerWidth < 1850) {
        setPerView(6);
      } else if (window.innerWidth < 2400) {
        setPerView(7);
      }
    };
    window.addEventListener("resize", handleMedia);
  }, []);
  useEffect(() => {
    setTest(false);
    setTest2(false);
  }, []);
  const handleImageClick = (img) => {
    setSelectedImage(img === selectedImage ? null : img); // تحديث الصورة المحددة عند النقر
    setMainImage(img);
  };
  const slidePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <>
      <Swiper
        loop={10}
        slidesPerView={perView}
        navigation={false}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="images-swiper swiper-2"
      >
        {imgs &&
          imgs?.map((e, i) => (
            <SwiperSlide
              key={i}
              navigation={{
                prevEl: ".swiper-custom-button.prev",
                nextEl: ".swiper-custom-button.next",
              }}
              onClick={() => handleImageClick(e)}
              onMouseEnter={() => setHoveredImage(e)}
              onMouseLeave={() => setHoveredImage(selectedImage || null)}
            >
              <div
                onMouseEnter={() => setTest(true)}
                onMouseLeave={() => setTest(false)}
                onClick={() => setTest2(true)}
              >
                <img
                  src={e}
                  alt={generateAlt(e)}
                  loading="lazy"
                  className={`scroll-img ${selectedImage === e && "active"}  `}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Container className="arrow-container">
        <div
          className={`swiper-arrow-container ${test || test2 ? "top" : ""} `}
        >
          <div className="swiper-custom-button prev" onClick={slidePrevious}>
            <img src={arrow1} alt="" />
          </div>
          <div className="swiper-custom-button next" onClick={slideNext}>
            <img src={arrow2} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ImagesSwiper;
