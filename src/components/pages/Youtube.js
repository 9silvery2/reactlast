import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Contactinfo from "../basics/Contactinfo";
import Loader from "../basics/Loader";

class Youtube extends React.Component {
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
              <div>Youtube</div>
            </Layout>
            <Contactinfo />
          </>
        )}
      </div>
    );
  }
}

export default Youtube;
