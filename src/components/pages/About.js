import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Loader from "../basics/Loader";
import Contact from "../basics/Contact";
import { gsap } from "gsap";

class About extends React.Component {
  state = {
    isLoading: true,
  };

  aboutAnimation = () => {
    gsap.to("#header", {
      duration: 0.4,
      top: 0,
      opacity: 1,
      delay: 1.2,
    });
  };

  getSite = () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false }); //메인 페이지로 바뀜
      this.aboutAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading-active");
      document.querySelector("body").classList.remove("black");
      document.querySelector("body").classList.add("light");
      this.getSite();
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div id="wrap">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Layout>
              <div id="aboutCont">
                <div className="about__cont"></div>
              </div>
            </Layout>
            <Contact />
          </>
        )}
      </div>
    );
  }
}

export default About;
