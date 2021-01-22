import React, { useState } from "react";
import { format } from "date-fns";
import { connect } from "react-redux";
import { addUser } from "../../actions/users";

function Register(props) {
  const [formState, setFormState] = useState({
    email: "",
    phone_number: 5555555555,
    reminder_date: format(new Date(), "yyyy-MM-dd"),
    expiration_date: format(
      new Date().setDate(new Date().getDate() + 7),
      "yyyy-MM-dd"
    ),
  });

  const handleChange = e => {
    e.preventDefault();

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = e => {
    e.preventDefault();
    props.addUser(formState);
  };

  return (
    <form className="container-fluid col-10 mt-5">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
          name="email"
          value={formState.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="phone_number" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          maxLength="16"
          className="form-control"
          id="phone_number"
          name="phone_number"
          value={formState.phone_number}
          onChange={handleChange}
        />
      </div>

      {/* Date Picker */}
      <div className="mb-3">
        <label htmlFor="expiration-date" className="form-label">
          Expiration Date
        </label>
        <div>
          <input
            className="form-control"
            type="date"
            id="expiration-date"
            name="expiration_date"
            value={formState.expiration_date}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Reminder Date */}
      <div className="mb-3">
        <label htmlFor="reminder-date" className="form-label">
          Reminder Date
        </label>
        <div>
          <input
            className="form-control"
            type="date"
            id="reminder-date"
            name="reminder_date"
            value={formState.reminder_date}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    query: state.users.query,
  };
};

export default connect(mapStateToProps, { addUser })(Register);
