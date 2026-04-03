import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WEB DEVELOPMENT INTERN</h4>
                <h5>AFAME technologies, Bangalore</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              September 2024 - November 2024. Web development internship at AFAME technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOFTWARE INTERN</h4>
                <h5>Unimity Solutions, Chennai</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              May 2024 - June 2024. Contributed to internal development tasks and gained exposure to industry practices. Collaborated with developers on small-scale web and software tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VICE PRESIDENT - PYROS</h4>
                <h5>fine arts club virudhunagar, TAMIL NADU</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              October 2022 - Present. Assisted in planning and organizing college-level cultural and fine arts events. Coordinated with team members to ensure smooth execution of all activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.TECH IN COMPUTER SCIENCE (AI & ML)</h4>
                <h5>Kalasalingam Academy of Research and Education</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Expected graduation: January 2026. Current CGPA: 7.02.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
