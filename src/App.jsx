import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./animation.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./pages/Footer/Footer";
import ScrollToTopOnPageChange from "./ScrollToTopOnPageChange ";
import NavigationBar from "./pages/NavigationBar/NavigationBar";

// استخدام React.lazy لتحميل المكونات بشكل ديناميكي
const Home = React.lazy(() => import("./pages/Home/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const OurTeam = React.lazy(() => import("./pages/ourTeamPage/ourTeamPage"));
const OurProjects = React.lazy(() => import("./pages/OurProjects/OurProjects"));
const DownloadAppSection = React.lazy(() => import("./components/DownloadAppSection/DownloadAppSection"));
const ServicesSection = React.lazy(() => import("./components/ServicesSection/ServicesSection"));
const CompanyServices = React.lazy(() => import("./pages/CompanyServices/CompanyServices"));
const DetailServices = React.lazy(() => import("./pages/DetailServices/DetailServices"));
const StudentServicesSection = React.lazy(() => import("./pages/StudentServicesSection/StudentServicesSection"));
const CompanyRequestPage = React.lazy(() => import("./pages/CompanyRequestPage/CompanyRequestPage"));
const StudentServices = React.lazy(() => import("./pages/StudentServices/StudentServices"));
const StudentProjects = React.lazy(() => import("./pages/StudentProjects/StudentProjects"));
const StudentProjectRequest = React.lazy(() => import("./pages/StudentProjectRequest/StudentProjectRequest"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));
const StudentCourses = React.lazy(() => import("./pages/StudentCourses/StudentCourses"));
const ComingSoon = React.lazy(() => import("./pages/ComingSoon/ComingSoon"));
const ViewProject = React.lazy(() => import("./pages/ViewProject/ViewProject"));
const StudentCourseRequest = React.lazy(() => import("./pages/StudentCourseRequest/StudentCourseRequest"));
const LoadingPage = React.lazy(() => import("./pages/loadingPage/loadingPage"));
const CodesPage = React.lazy(() => import("./pages/CodesPage/CodesPage"));

function App() {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <ScrollToTopOnPageChange />
        <NavigationBar />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={"/"} exact element={<Home />} />
            <Route path={"/about_us"} element={<AboutUs />} />
            <Route path={"/contact_us"} element={<ContactUs />} />
            <Route path={"/services"} element={<ServicesSection />} />
            <Route path={"/our_team"} element={<OurTeam />} />
            <Route path={"/our-projects"} element={<OurProjects />} />
            <Route path={"/our_app"} element={<DownloadAppSection />} />
            <Route path={"/company-services"} element={<CompanyServices />} />
            <Route path={"/service/:id"} element={<DetailServices />} />
            <Route path={"/student-section-services"} element={<StudentServicesSection />} />
            <Route path={"/company-request/:id"} element={<CompanyRequestPage />} />
            <Route path={"/student-services/:id"} element={<StudentServices />} />
            <Route path={"/student-projects/:id"} element={<StudentProjects />} />
            <Route path="/view-project/:id" element={<ViewProject />} />
            <Route path={"/student-project-request/:id"} element={<StudentProjectRequest />} />
            <Route path={"/student-course-request/:id"} element={<StudentCourseRequest />} />
            <Route path={"/student-courses/:id"} element={<StudentCourses />} />
            <Route path="/error-page" element={<ErrorPage />} />
            <Route path="/coming" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to={"/error-page"} />} />
            <Route path="/free-codes" element={<CodesPage />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
