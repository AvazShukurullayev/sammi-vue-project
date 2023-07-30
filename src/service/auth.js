import axios from "./axios";

const AuthService = {
  register(user) {
    console.log("user => ", user);
    return axios.post("/users", { user: user });
  },
};

export default AuthService;
