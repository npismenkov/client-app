import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.user.token) this.props.history.push("/pages/login");
  }

  render() {
    return (
      <>
        {!this.props.user.token && <Redirect to="/pages/login" />}
        <h1>Home</h1>
      </>
    );
  }
}

const props = connect((state) => ({ user: state.auth.user }), null);

export default props(Home);
