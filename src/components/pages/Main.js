import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Footer from "../basics/Footer";
import Loader from "../basics/Loader";
import { gsap } from "gsap";

class Main extends React.Component {
  state = {
    isLoading: true,
  };

  mainAnimation = () => {
    gsap.to(".main__cont > div:nth-child(1)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
    });
    gsap.to(".main__cont > div:nth-child(2)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.3,
    });
    gsap.to(".main__cont > div:nth-child(3)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.6,
    });
    gsap.to(".main__cont > div:nth-child(4)", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.9,
    });
    gsap.to("#header", {
      duration: 0.4,
      top: 0,
      opacity: 1,
      delay: 1.2,
    });
    gsap.to("#footer", {
      duration: 0.4,
      bottom: 0,
      opacity: 1,
      delay: 1.2,
    });
  };

  getSite = () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false }); //메인 페이지로 바뀜
      this.mainAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading-active");
      document.querySelector("body").classList.add("black");
      document.querySelector("body").classList.remove("light");
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
              <section id="mainCont">
                <div className="main__cont">
                  <div>we provide</div>
                  <div>visual coding</div>
                  <div>solutions</div>
                  <div>for you webs</div>
                </div>
              </section>
            </Layout>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default Main;
