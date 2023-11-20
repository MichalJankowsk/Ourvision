import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>us</span>
        </h2>
        <span className="title-head-subtitle">
          We take a creative and strategic approach to help you achieve your
          business goals and tackle your most pressing tasks.
        </span>
      </div>

      <div className="container infos">
        <div className="row personal-info justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container ">
              <img
                className="img-fluid d-block"
                src="img/team_logo.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              An exceptional development team known for our innovation and
              expertise. Collaborate seamlessly to deliver outstanding software
              solutions with a strong focus on quality and effective
              communication. Possed of diverse skills, problem-solving
              abilities, and adaptability which enables us to meet evolving
              requirements and deliver exceptional results. Trust, respect, and
              continuous improvement at the core of our team dynamics. With our
              technical excellence and collaborative mindset, we consistently
              exceed expectations and deliver top-notch solutions!
            </p>
          </div>
        </div>
      </div>

      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      <div className="resume-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(0% - 21px)" }}>
                  98%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">android</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(0% - 21px)" }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">IOS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">python</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={99}
                  style={{ width: "99%" }}
                />
                <span className="percent" style={{ right: "calc(1% - 21px)" }}>
                  99%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">php</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Ruby on rails</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Django</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">laravel</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(0% - 21px)" }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">symphony</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(0% - 21px)" }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">ASP.NET</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React Native</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={100}
                  style={{ width: "100%" }}
                />
                <span className="percent" style={{ right: "calc(0% - 21px)" }}>
                  100%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Flutter</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={99}
                  style={{ width: "99%" }}
                />
                <span className="percent" style={{ right: "calc(1% - 21px)" }}>
                  99%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
        </div>
        {/* Resume Ends */}
      </div>
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      <div className="resume-container">
        <div className="container">
        <h2 className="font-weight-600 text-capitalize title-section">
                Introducing our exceptional team of 15 members who possess a
                diverse range of skills and expertise in various technologies.
                Let’s meet them.
              </h2>
          <div className="row " style={{ paddingBottom: "50px" }}>
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
            
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      {/* <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2011 - 2019
                      </span> */}
                      <span className="d-block font-weight-400 uppercase">
                        Web Developers
                        <span className="separator" />
                        <span className="font-weight-700">8 members</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Our web developers are proficient in a variety of
                        technologies such as JavaScript, React, Next, VueJS,
                        MySQL, MongoDB, PostgreSQL, Laravel, Django, Ruby on
                        Rails, Java Spring Boot, and ASP.NET. They excel in
                        creating dynamic and interactive web applications using
                        these frameworks and databases.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Blockchain Developers
                        <span className="separator" />
                        <span className="font-weight-700">2 members</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Our team includes skilled Web3 developers who have
                        experience working with blockchain and decentralized
                        applications. They can develop smart contracts and
                        decentralized applications using the latest Web3
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Mobile Developers
                        <span className="separator" />
                        <span className="font-weight-700">3 members</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Our mobile developers have expertise in Kotlin, Java,
                        Swift, Objective-C, React Native, and Flutter Dart. They
                        specialize in developing native Android and iOS
                        applications, ensuring a seamless user experience across
                        different platforms.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="d-block font-weight-400 uppercase">
                        Backend Management
                        <span className="separator" />
                        <span className="font-weight-700">2 members</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        We have dedicated backend managers who are proficient in
                        managing server-side technologies and cloud platforms.
                        They have expertise in AWS, Docker, Azure, Firebase, and
                        GraphQL. They ensure the smooth functioning of backend
                        systems and optimize performance for efficient
                        application development.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
