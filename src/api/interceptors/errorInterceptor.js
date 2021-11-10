// import Vue from "vue";
// import store from "@/store";
// import router from "@/router";

const errorInterceptor = (error) => {
  // all the error responses
  // switch (error.response.status) {
  //   case 401: // authentication error, logout the user
  //     Vue.notify({
  //       group: "main",
  //       title: "La sesión ha vencido",
  //       text: "Tu sesión ha vencido, por favor ingresa nuevamente.",
  //       type: "warn",
  //     });

  //     store.commit("auth/LOGOUT");
  //     router.push({
  //       name: "web.auth.login",
  //     });
      
  //     break;
  // }
  return Promise.reject(error.response);
};

export default errorInterceptor;
