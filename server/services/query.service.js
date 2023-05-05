import api from "api";
const sdk = api("@yelp-developers/v1.0#deudoolf6o9f51");

export async function getResults(query) {
  // radius converter
  let radius_text = "";
  if (query["distance"] !== "")
    radius_text = (parseInt(query["distance"]) * 1609).toString(10);

  // geolocation converter
  let location_text;
  let location_lat = "";
  let location_lng = "";
  if (!query["ip_location"]) {
    location_text = query["location"];
  } else {
    location_lat = "34.0615895441259";
    location_lng = "-118.32138061523438";
  }

  let res = {};
  try {
    sdk.auth(process.env.YELP_API);
    await sdk
      .v3_business_search({
        term: query["keyword"],
        location: location_text,
        latitude: location_lat,
        longitude: location_lng,
        radius: radius_text,
        categories: query["category"],
        open_now: query["open_now"],
        sort_by: "best_match",
        limit: "50",
      })
      .then(({ data }) => {
        res = {
          success: true,
          message: "Query results fetched!",
          results: data,
        };
      })
      .catch((err) => {
        res = {
          success: false,
          message: err,
        };
      });
  } catch (e) {
    res = {
      success: false,
      message: e,
    };
  }
  return res;
}
