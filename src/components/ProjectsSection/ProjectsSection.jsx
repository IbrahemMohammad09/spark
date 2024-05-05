import MainButton from "../SharedComponents/MainButton/MainButton";
import MainHomeTitle from "../SharedComponents/MainHomeTitle/MainHomeTitle";
import Img1 from "../../images/OurProjectsImage/UI Design.png";
import Img2 from "../../images/OurProjectsImage/Home Page 9.png";
import InfoCard from "./InfoCard/InfoCard";
import "./ProjectsSection.css";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import SEO from "../SharedComponents/SEO/SEO";
import { useEffect , useState } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MStore",
      subtitle:
        "Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress",
      type: "Development Project",
      img: Img1,
    },
    {
      title: "Beauty",
      subtitle:
        "Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress",
      type: "Development Project",
      img: Img2,
    },
  ];
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleUserScroll = () => {
    setUserHasScrolled(true);
  };

  useEffect(() => {
    // إضافة event listener للتمرير
    window.addEventListener("scroll", handleUserScroll);

    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, []);

  useEffect(() => {
    if (inView && userHasScrolled) {
      setHasBeenInView(true);
    }
  }, [inView, userHasScrolled]);
  return (
    <section id="our_projects">
      <SEO title={'Spark | Our projects'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
      <Container className="main-section our-projects position-relative">
        <MainHomeTitle title={"Our Projects"} />
        <div ref={ref} className={`${hasBeenInView ? "fade-in-bottom" : ""}`}>
          <div className="our-projects-cards">
            {projects?.map((e, i) => (
              <InfoCard key={i} info={e} />
            ))}
          </div>
          <MainButton
            url={"/our-projects/"}
            title={"See all"}
            addStyle={"projects-button-see-all"}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
