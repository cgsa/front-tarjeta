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
    "Access-Control-Allow-Origin": "http://fichadas.lobeliaservices.com:8080",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
  },
});

const getAuthToken = () =>
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzA0YTBmNmRmM2M0MWI4NWZlNzE0ZWMyZjBjZjRlZjYzNTE5MDIzZjNmNjhiMjAzYzJjYWFjZTg3MTQzYzkzODRhYmUxNGE2YTE2MjJiMTEiLCJpYXQiOjE2MzY3MjkzMjgsIm5iZiI6MTYzNjcyOTMyOCwiZXhwIjoxNjY4MjY1MzI4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JOjndNGU_p0BI7c8Qaeqx_w7eNli-kk4K0J6vWKFceHK5OWtDcVEo_h01C8j2hiaRJWH_MoSV__7ZxpGJ-P3tV3czRstCF87OFDOavBX6vKgatZAsoL8xsGV20g2_NTDE-6Weztu-si6SWz3izbv104B-cGknPrNVtIR4vbPQYA_Pq9StJJIkDQU8tMyK1hf_mAFeiD8GLy24Cj8k2lefHkBNj2eqgWjm7nsZORAs9RNJ_nowEzw2z3tsK5sXfGPMZ75KtXfyRIODiDgqt0ZwdKLGeHCttfj9VVzeF_VyT2U9W0P7aDIxqCAmZtKNLzraz15z-uCtqjkubzy5T8vMLMXRLn3fwIziKmUB3EWbQL6E4VUzjx7ryObopYfTrhCAuTNl0PzFCUjtxF3x44cL1qGiDaYMPhOU7QqkxaBJwEqrT9RTl52OUGGRsgjQ41AncSvZvUiE1_JmF1BrzVhcJmkjPvge8BfZmSIlu24dAQXFllWZ2QwWMYvsvfWbglUwHAba-uz2Fi4986Ehe3bvD9qsFFKvLKdgOMAv9pqDbi-pL3tnyAmdT9891JOld_RaEfKaJaUuikwpSe1cQH7AmD9cn8zz_5906-CEYU-LtU-CjvRFmNF9OsMxIHibtUkSGK7Y_Ru9RLUUsIW1RNEvBb3ylikdYZS-AelhLG0-PE";

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
