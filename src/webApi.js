import axios from "axios";
class WebApi {
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    /*switch (error.response.status) {
      case 401:
        this.redirectTo(document, "/");
        break;
      case 404:
        this.redirectTo(document, "/404");
        break;
      default:
        this.redirectTo(document, "/500");
        break;
    }*/
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  async get(path) {
    const querySymbol = path.includes("?") ? "&" : "?";
    const response = await this.service.request({
      method: "GET",
      url: `${process.env.VUE_APP_PROXY_URL}${path}${
        process.env.NODE_ENV === "development"
          ? `${querySymbol}theme_preview=1355574`
          : ""
      }`
    });
    return { data: response.data, responseUrl: response.request.responseURL };
  }

  patch(path, payload, callback) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload
      })
      .then(response => callback(response.status, response.data));
  }

  post(path, payload, callback) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload
      })
      .then(response => callback(response.status, response.data));
  }
}

export default new WebApi();
