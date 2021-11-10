import axios from "axios";

import errorInterceptor from "./interceptors/errorInterceptor";

export const baseURL = process.env.VUE_APP_BASE_URL || "http://127.0.0.1:8000";

export const frontURL =
  process.env.VUE_APP_FRONTEND_URL || "http://127.0.0.1:8080";

export const domainURL = frontURL
  .replace("http://", "")
  .replace("https://", "")
  .replace(/((?::))(?:[0-9]+)$/, "");

export const apiURL = baseURL + "/api/";

const httpClient = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthToken = () =>
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzQwMjZjODFmYzI1OTk5ZTdmZDdlN2UxOGE4MjI0NTQ1NTU3ZWI1MjRhYTI4YTk0ZjViNDMwZmQ1MjQyZTU2N2JkZmE4NTFmZmY4ODMwZmIiLCJpYXQiOjE2MzYxNDE0OTEuMjcwMzQ5LCJuYmYiOjE2MzYxNDE0OTEuMjcwMzYyLCJleHAiOjE2Njc2Nzc0OTAuOTg0ODY3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BcOR4yWM3g4M9iXcx8r3_OVfeMVl2bSAe5s2AcC1E0a_UWuC4F-0DxBytLc89olQimYbF6m9_zpwOuph1m7Y7Tpqr_cr8ccoKwN-9K8KdMi_-povGa65-Nt8EzDMAIw6UN888JcNacTCyA3R8VFpp5NmWMqwk9o0nEdF0ij20UFnfGk4EHf44IpAnxjxZteK7O5ntH2P08buxLrKJR69DGALwyc_vtK5pVcyRAlOIr9AQy2fgZ1L38GlIClCh_p2_yCgvucbh45wzeOr9JWmLeEPB_z5SPapUqbaoCNQSxe0Uhd5CwSh8kln7ukwBYQ5jCyNxRdpfknauWoszwoSPl3FQVJkco0e07GUwmHXJihbOQAJYye1Otv1xhgoicIfpJEjyiEfKCE2A-7YjhahbIQile3iI3hSUvLZT3OyXqeXOFVkkAwSREllgoDKO2UKm7hsECTw9aQ9yPG22IVxnj0K42lwDoLhxj6cI13-mYzdIdHJsWMlQzBZHCF8B9aWEo-WLc_oMN5dAE85uqTf82ytaiSBqR6TBAPeLWAUIp-tiEU539WX33s91s7HSTDlqWrrZg5BoOAqn0_CD-kKjntNMc9KMkBtrW2o9nZdxoFt8EJu-6tfmMklx2I07BLZo2VfMOWgRfTtXDvDF4wiv_yzaNyHv21bUKPwrLf0vJo";

const authInterceptor = (config) => {
  config.headers["Authorization"] = "Bearer " + getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

// Interceptor for responses
const responseInterceptor = (response) => {
  // switch (response.status) {
  //   case 200:
  //     // yay!
  //     break;
  //   // any other cases
  //   default:
  //   // default case
  // }

  return response;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
