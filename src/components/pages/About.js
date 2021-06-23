import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Loader from "../basics/Loader";
import Contactinfo from "../basics/Contactinfo";
import { gsap } from "gsap";
import WrapTitle from "../basics/WrapTitle";

function AboutText({ title, desc, image }) {
  return (
    <div className="about">
      <div className="about-img">
        <img src={image} alt={title} />
      </div>
      <div className="about-txt">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const aboutMe = [
  {
    id: 1,
    title: "꿈을 설계하고 디자인 하다.",
    desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 서울에는 집이 없지만, 이곳에서는 나만의 집이 많다. 그 집은 비용도 들지 않고 언제든지 만들 수 있다. 나만의 공간을 마음것 만들 수 있다는 건 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고 디자인을 하며 앞으로도 살고 싶다.",
    image: "img/aboutImg01.jpg",
  },
  {
    id: 2,
    title: "열심히 할수록 기회는 따른다.",
    desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 단지 행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게  쓰지 않는다. 열심히 할수록 운은 나에게 온다.",
    image: "img/aboutImg02.jpg",
  },
  {
    id: 3,
    title: "나에게 정직하다.",
    desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다. 다름 사람에게도 정직해야 하지만 그 무엇보다 나 자신한테 더 정직해야 한다.",
    image: "img/aboutImg03.jpg",
  },
];

class About extends React.Component {
  state = {
    isLoading: true,
  };

  aboutAnimation = () => {
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
    gsap.to(".about__cont", {
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
          <Loader color="light" />
        ) : (
          <>
            <Header />
            <Layout>
              <section id="aboutCont">
                <div className="container">
                  <WrapTitle text={["about", "me"]} />
                  <div className="about__cont">
                    {aboutMe.map((text) => (
                      <AboutText
                        key={text.id}
                        title={text.title}
                        desc={text.desc}
                        image={text.image}
                      />
                    ))}
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

export default About;
