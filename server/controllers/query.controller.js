import { getResults } from "../services/query.service.js";

export async function getResultsAPI(req, res) {
  console.log("[===== S-query-get =====]: ", req.originalUrl);
  try {
    await getResults(req.body).then((queryRes) => {
      res.status(200).json(queryRes);
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
}
