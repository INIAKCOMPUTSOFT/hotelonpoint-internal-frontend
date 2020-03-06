import {
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
  LOADING_BLOG,
  LOADING_UI,
  LOADING_USER,
  SET_BLOG,
  SET_ERRORS,
  SET_MESSAGE,
  SET_UNAUTHENTICATED,
  SET_USER
} from "../type";

import axios from "axios";
import { toast } from "react-toastify";

// const url = "https://calm-anchorage-14244.herokuapp.com";
const url = "http://localhost:3400";

export const loginUser = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/user/logins`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.message);
      dispatch(getUser(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/";
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const validateUser = data => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/user/validateUser`, data)
    .then(res => {
      dispatch({
        type: SET_MESSAGE,
        payload: res.data.data
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: CLEAR_MESSAGE
      });
    });
};

export const updatePassword = (data, id) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .put(`${url}/user/changePassword/${id}`, data)
    .then(res => {
      console.log(res);
      dispatch({
        type: SET_MESSAGE,
        payload: res.data.data
      });
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/login";
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: CLEAR_MESSAGE
      });
    });
};

export const loginAdmin = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/admin/adminlogin`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.data);
      dispatch(getAdmin(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/admin";
    })
    .catch(err => {
      console.log(err);
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const signUpAdmin = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/admin/createAdmin`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.data);
      dispatch(getAdmin(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/admin";
    })
    .catch(err => {
      console.log(err);
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const signUpCC = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/admin/cc`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.data);
      dispatch(getAdmin(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/care";
    })
    .catch(err => {
      console.log(err);
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const loginCC = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/admin/cclogin`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.data);
      dispatch(getCC(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/care";
    })
    .catch(err => {
      console.log(err);
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const loginAccountant = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/admin/acctlogin`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.data);
      dispatch(getCC(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/account/booking";
    })
    .catch(err => {
      console.log(err);
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const signUpAccountant = (data, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/admin/createAcct`, data)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.data);
      dispatch(getAdmin(history));
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/account/booking";
    })
    .catch(err => {
      console.log(err);
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const getAdmin = history => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`${url}/admin`)
    .then(res => {
      console.log("got here", res);
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const getCC = history => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`https://calm-anchorage-14244.herokuapp.com/admin/ccAuth`)
    .then(res => {
      console.log("got here", res);
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const getAcct = history => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`http://localhost:3400/admin/acctAuth`)
    .then(res => {
      console.log("got here", res);
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};
export const getUser = history => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`${url}/user/me`)
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
      dispatch({
        type: SET_UNAUTHENTICATED,
        payload: err
      });
    });
};

export const signupUser = newUserData => dispatch => {
  console.log("got here");
  dispatch({ type: LOADING_UI });
  axios
    .post(`${url}/user/`, newUserData)
    .then(res => {
      console.log(res);
      setAuthorizationHeader(res.data.message);
      dispatch(getUser());
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/";
    })
    .catch(err => {
      if (err.message == "Network Error") {
        dispatch({
          type: SET_ERRORS,
          payload: err.message
        });
        return alert("There is a very Poor Network");
      }
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("JWT_TOKEN");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/";
};

export const uploadImage = FormData => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user/image", FormData)
    .then(res => {
      dispatch(getUser());
    })
    .catch(err => console.log(err));
};

export const sendABlog = data => dispatch => {
  dispatch({ type: LOADING_BLOG });
  axios
    .post(`${url}/blog`, data)
    .then(res => {
      dispatch({
        type: SET_BLOG,
        payload: res.data
      });

      window.location.href = "/";
      toast.success(res.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
};

export const getBlogs = () => dispatch => {
  dispatch({ type: LOADING_BLOG });
  axios
    .get(`${url}/blog`)
    .then(res => {
      console.log("from A", res.data);
      dispatch({
        type: SET_BLOG,
        payload: res.data
      });
      toast.success(res.data.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("JWT_TOKEN", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
