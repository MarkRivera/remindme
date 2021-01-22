import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser, deleteUser } from "../../actions/users";
import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <header className="container-fluid col-10 mt-5">
      <h1 className="display-3">Tired of forgetting?</h1>;
      <h2 className="display-6">
        <Link className="text-info" to="/register">
          Register
        </Link>{" "}
        to be reminded when your ID expires
      </h2>
    </header>
  );
}

Landing.propTypes = {
  users: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps, { getUser, deleteUser })(Landing);
