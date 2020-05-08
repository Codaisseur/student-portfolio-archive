import request from "superagent";

const baseUrl = "http://localhost:4000";

export const findCountries = (key) => (dispatch) => {
  request(`${baseUrl}/country/${key}`)
    .then((res) => {
      console.log(res.body);

      dispatch(countriesFound(res.body));
    })
    .catch(console.error);
};
function countriesFound(countries) {
  return {
    type: "FOUND_COUNTRIES",
    countries,
  };
}
