import React from "react";

export default function Aboutme() {
  return (
    <div className="F-aboutme F">
      <div>
        <h1>ABOUT ME</h1>
        <hr className="hr2" />
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="d-flex-rowcol_2">
        <div className="w-50">
          <h1>Get to know me!</h1>
          <p>
            I'm a <span className="text-weight">Frontend Web Developer</span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="text-weight">Projects</span> section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in{" "}
            <span className="text-weight">Web Development</span> so it can help
            other people of the Dev Community. Feel free to Connect me. where I
            post useful content related to Web Development and Programming
          </p>
          <p>
            I'm open to <span className="text-weight">Job</span> opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to<span className="text-weight"> contact</span> me.
          </p>
          <div className="text-center">
            <button className="ui yellow button">CONTACT</button>
          </div>
        </div>
        <div className="w-50">
          <h1>My Skills</h1>
          <div className="d-flex">
            <span className="skill-tab text-weight">HTML</span>
            <span className="skill-tab text-weight">HTML5</span>
            <span className="skill-tab text-weight">CSS</span>
            <span className="skill-tab text-weight">CSS3</span>
            <span className="skill-tab text-weight">BOOTSTRAP-4</span>
            <span className="skill-tab text-weight">SEMATIC UI</span>
            <span className="skill-tab text-weight">MATERIAL UI</span>
            <span className="skill-tab text-weight">JAVASCRIPT</span>
            <span className="skill-tab text-weight">JQUERY</span>
            <span className="skill-tab text-weight">REACT JS</span>
            <span className="skill-tab text-weight">REACT-REDUX</span>
            <span className="skill-tab text-weight">GIT</span>
            <span className="skill-tab text-weight">FIREBASE</span>

          </div>
        </div>
      </div>
    </div>
  );
}
