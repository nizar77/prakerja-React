import gmb3 from '../assets/bocah1.png'
let About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="col-md-12">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              I'm a passionate software engineer with 5+ years of experience in
              developing web applications and backend systems. Skilled at
              writing clear, concise code that is easy to maintain and
              troubleshoot. Experienced in working with both small and large
              teams across multiple projects and companies.
            </p>{" "}
            <br />
            <p>
              {" "}
              I'm also an excellent communicator, able to work independently of
              remote locations or in office environments as needed by the
              company.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="about-img">
            <img src={gmb3} alt="about-me" />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
