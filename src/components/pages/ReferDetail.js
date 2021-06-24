import React from "react";
import Contactinfo from "../basics/Contactinfo";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import WrapTitle from "../basics/WrapTitle";
import { gsap } from "gsap";

// function ReferDetail(props){
//     return (
//         <span>{props.location.state.desc}</span>
//     )
// }

class ReferDetail extends React.Component {
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
  }

  componentDidMount() {
    const { location, history } = this.props;
    console.log(location, history);

    if (location.state === undefined) {
      history.push("/reference");
    }
    document.querySelector("body").classList.add("light");
    this.startAnimation();
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div id="wrap">
          <Header color="light" />
          <Layout>
          <section id="referCont">
              <div className="container">
                <WrapTitle text={["Reference", "Detail"]} />
                <div className="refer__cont">
                  <div className="refer__detail">
                    <h3>{location.state.title}</h3>
                    <div>{location.state.desc}</div>
                    <div>{location.state.category}</div>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
          <Contactinfo />
        </div>
      );
    }
  }
}

export default ReferDetail;
