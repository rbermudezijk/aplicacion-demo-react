export default class Service{
    apiUrl = null;

    constructor(apiUrl) {
      this.apiUrl = apiUrl;
    }

    urlQuery(queryUrlFormat) {
      return this.apiUrl + queryUrlFormat;
    }
}