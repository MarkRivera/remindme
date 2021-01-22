import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/users";

function Remove(props) {
  const [formState, setFormState] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setFormState(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    props.deleteUser(formState);
  };

  useEffect(() => {
    setFormState("");
  }, [props.query.isSuccess]);

  return (
    <>
      <form className="container-fluid mt-5 col-10">
        <label htmlFor="email">Email address</label>
        <div className="input-group mb-3 mt-3">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="email"
            value={formState}
            autoComplete="off"
          />
          <button
            className="btn btn-danger"
            onClick={handleClick}
            type="button"
            style={{ height: 45 }}
            disabled={props.query.isLoading}
          >
            {props.query.isLoading ? (
              <div
                className="spinner-border"
                role="status"
                style={{ position: "relative", bottom: 5 }}
              ></div>
            ) : (
              "Remove"
            )}
          </button>
        </div>
      </form>
      {props.query.isSuccess && (
        <div className="container-fluid col-10 text-success">
          {" "}
          User Successfully Deleted{" "}
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    query: state.users.query,
  };
};

export default connect(mapStateToProps, { deleteUser })(Remove);
