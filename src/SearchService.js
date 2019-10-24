import Service from './Service';

export default class ServiceSearch extends Service {
    constructor () {
        super('https://api.nestoria.co.uk/api?');
    }

    handleRes(res) {
      if (res.application_response_code.substr(0,1) !== '1') {
        throw new Error('Ubicación no reconocida.');
      }
      return res;
    }

    select = query =>
      fetch(this.urlQuery(query))
        .then(res => res.json())
        .then(res => this.handleRes(res.response));
}

//https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=Londres