import "../styles/global.css";

const Body = () => {
  return (
    <>
      <div className="body-container">
        <p className="text-name">I'm</p>
        <div className="test">
          {" "}
          <h1 className="name">
            Andrei <br /> Ghemusi
          </h1>
          <img
            className="ghemusi"
            src="photo2.jfif"
            alt="Photo of Andrei Ghemusi"
          />
        </div>
        <p className="text-name">
          I am a dedicated and highly skilled QA Automation Tester with a
          passion for ensuring the quality and reliability of software
          applications. My expertise lies in leveraging cutting-edge tools and
          technologies to streamline the testing process and deliver impeccable
          results.
         
        </p>
        <div className="projects">
          <h2>Projects</h2>
        </div>
      </div>
    </>
  );
};

export default Body;
