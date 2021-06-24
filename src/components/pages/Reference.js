import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Loader from "../basics/Loader";
import Contactinfo from "../basics/Contactinfo";
import WrapTitle from "../basics/WrapTitle";
import ReferInfo from "../pages/ReferInfo";
import { gsap } from "gsap";
import axios from "axios";

class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };
  startAnimation = () => {
    gsap.to(".wrap__title h1 strong", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    });
    gsap.to(".wrap__title h1 em", {
      duration: 0.4,
      y: 0,
      delay: 0.3,
      opacity: 1,
      ease: "power3.out",
    });
    gsap.to(".refer__cont", {
      duration: 0.4,
      y: 0,
      delay: 0.6,
      opacity: 1,
      ease: "power3.out",
    });
    gsap.to("#header", {
      duration: 0.4,
      top: 0,
      delay: 1,
    });
  };
  getReference = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get("https://webstoryboy.github.io/dothome1/refer.json");
    this.setState({ htmlRefer, isLoading: false });
    console.log(htmlRefer);
    this.startAnimation();
  };
  getSite = () => {
    setTimeout(() => {
      this.getReference();
    }, 1600);
  };
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading-active");
      document.querySelector("body").classList.remove("black");
      document.querySelector("body").classList.add("light");
      this.getSite();
    }, 2000);
  }
  render() {
    const { isLoading, htmlRefer } = this.state;
    return (
      <div id="wrap">
        {isLoading ? (
          <Loader color="light" />
        ) : (
          <>
            <Header />
            <Layout>
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={["Reference", "book"]} />
                  <div className="refer__cont">
                    <div className="refer__table">
                      <h3>HTML</h3>
                      <ul>
                        {htmlRefer.map((refer) => (
                          <ReferInfo
                            key={refer.id}
                            id={refer.id}
                            title={refer.title}
                            desc={refer.desc}
                            category={refer.category}
                            property={refer.property}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
            <Contactinfo />
          </>
        )}
      </div>
    );
  }
}
export default Reference;
