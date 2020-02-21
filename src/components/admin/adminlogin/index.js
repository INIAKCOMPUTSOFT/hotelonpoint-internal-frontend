import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { getUser, loginAdmin } from "../../../redux/actions/userActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Input } from "../../inputs/input1";
import React from "react";
import { ToastContainer } from "react-toastify";
import background from "./bacground-pic/blue.jfif";
import { connect } from "react-redux";
import history from "../../../history";
import { Link } from "react-router-dom";

//import {Link} from 'react-router-dom'

var sectionStyle = {
  width: "100%",
  height: "auto",
  padding: "10px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover"
};

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleForm = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlesubmit = event => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginAdmin(data, history);
  };

  render() {
    const {
      UI: { loading, errors }
    } = this.props;
    return (
      <div style={sectionStyle}>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-md-4 text-white">
              <h1>We are reliable and trust Worthy</h1>
            </div>

            <div className="col-md-6 ">
              <div className="card  mb-3 shadow login-card">
                <div className="card-body text-dark ">
                  <div>
                    <h5 className="card-title text-dark text-center">
                      Hotel-on-points
                    </h5>
                    <div className="form-group">
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleForm}
                        className="form-control"
                        placeholder="Enter Username"
                        Label="Email"
                      />
                      {errors && errors.email ? (
                        <small className="text-danger">{errors.email}</small>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleForm}
                        className="form-control"
                        placeholder="Enter password"
                        Label="Password:"
                        small="your details are safe with us."
                      />
                      {errors && errors.password ? (
                        <small className="text-danger">{errors.password}</small>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      onClick={this.handlesubmit}
                      variant="contained"
                      color="primary"
                      style={{ background: "#c4bda3" }}
                      className="btn btn-block btin"
                      disabled={loading}
                    >
                      Login
                      {loading && <CircularProgress size={30} />}
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/admin-signup">
                      You don't have an account, sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4"></div>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginAdmin,
  getUser
};

export default connect(mapStateToProps, mapActionsToProps)(AdminLogin);
