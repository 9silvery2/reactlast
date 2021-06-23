import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Contact from "../basics/Contact";
import Loader from "../basics/Loader";

class Reference extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
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
              <div>Reference</div>
            </Layout>
            <Contact />
          </>
        )}
      </div>
    );
  }
}

export default Reference;
