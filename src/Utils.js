function urlEncodeField (data) {
  return `${data[0]}=${data[1]}`;
}

export default function urlPagination(querySettings) {
    return Object.entries(
      Object.assign({
          country:  'uk',
          pretty:   '1',
          encoding: 'json',
          listing_type: 'buy',
          action: 'search_listings',
          page: 1,
      }, querySettings)
    ).map(
      prop => urlEncodeField(prop)
    ).join('&');
}