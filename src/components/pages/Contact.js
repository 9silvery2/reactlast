import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Footer from "../basics/Footer";
import Loader from "../basics/Loader";

class Contact extends React.Component {
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
              <div>Contact</div>
            </Layout>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default Contact;
