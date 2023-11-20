import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  SliderSideBar_kblogistics,
  SliderSideBar_SUPERCRIP,
  SliderSideBar_next_pay,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Uruloki Group",
    format: "Uruloki",
    project: "BlockChain",
    client: "KKingsbe",
    duration: "3 MONTHS",
    technologies: ["Nextjs", "Web3.0"],
    link: "https://www.tsuka.world/",
  },
  {
    img: "img/projects/www.flowheel.io_.jpg",
    name: "FLOWHELL",
    format: "img",
    project: "WEBSITE",
    client: "OPH Holdings, LLC",
    duration: "1 year",
    technologies: [
      "React/Next.js",
      "SSR/SSG",
      "Stripe.js",
      "RestFul API",
      "Axios",
      "PostgreSQL",
      "Postman",
    ],
    link: "https://flowheel.io",
  },

  {
    img: "img/projects/kblogistics.jpg",
    name: "kblogistics",
    format: "kblogistics",
    project: "WEBSITE",
    client: "OPH HOLDINGS, LLC",
    duration: "3 MONTHS",
    technologies: ["React/Next.js", "Bootstrap 5.0", "Wow.js", "AOS - Animate"],
    Description: "Converted Figma Design into a React Application",
    link: "https://www.kblogisticsusa.com/"
  },
  {
    img: "img/projects/music_app.jpg",
    name: "iDoser Premium",
    format: "img",
    project: "MusicApp",
    client: "iDoser company",
    duration: "4 MONTHS",
    technologies: ["Kotlin", "Swift"],
    Description: " iDoser is the original mainstream audio induction product.",
    link: "https://play.google.com/store/apps/details?id=com.yudiz.idoser&hl=en&gl=US"
  },
  {
    img: "img/projects/next_pay.jpg",
    name: "NextPay APP",
    format: "next_pay",
    project: "NextPay APP",
    client: "Tech Enterprises LLC",
    duration: "2 MONTHS",
    technologies: ["Android"],
    Description:
      "Use your phone as your wallet and pay with it at any eligible store or business.",
    link: "https://play.google.com/store/apps/details?id=com.TechKW.nextpay&hl=en&gl=US"
  },
  {
    img: "img/projects/supercrip_1.jpg",
    name: "SUPERCRIP",
    format: "SUPERCRIP",
    project: "NFT MINTING DAPP",
    client: "RANDALL MILLER",
    duration: "9 MONTHS",
    technologies: ["GSAP", "Web3.js", "Solidity", "Hardhat"],
    Description: "Built NFT minting Dapp from scratch including Smart Contract",
    link: "https://supercrip.io/"
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              Our <span>Works</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent design and coding projects. Want to see more? Email
              us.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "Uruloki" ? (
                <SliderSideBar />
              ) : work.format == "kblogistics" ? (
                <SliderSideBar_kblogistics />
              ) : work.format == "next_pay" ? (
                <SliderSideBar_next_pay />
              ) : work.format == "SUPERCRIP" ? (
                <SliderSideBar_SUPERCRIP />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li className="d-flex">
                    <div className="d-flex mr-2">
                      <i className="fa fa-code  mt-1" />{" "}
                      <span className="font-weight-400 project-label">
                        Technologies
                      </span>
                      :
                    </div>
                    <div className="d-flex flex-wrap">
                      {work.technologies.map((technologie, i) => (
                        <span
                          className="font-weight-600 mr-2 text-nowrap"
                          key={i}
                        >
                          {technologie}
                          {i + 1 < work.technologies.length && ","}
                        </span>
                      ))}
                    </div>
                  </li>
                  {/* <li>
                    <i className="fa fa-file-text-o" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Description
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.Description}
                    </span>
                  </li> */}

                  {work.Description && (
                    <li className="d-flex">
                      <div className="d-flex align-items-start mr-2">
                        <i className="fa fa-file-text-o mt-1" />
                        <span className="font-weight-400 project-label">
                          Description{" "}
                        </span>
                        :{" "}
                      </div>
                      <span className="font-weight-600">
                        {work.Description}
                      </span>
                    </li>
                  )}
                </ul>
                <a
                  href={work.link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
