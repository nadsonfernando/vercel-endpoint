export default function handler(req, res) {
  res.status(200).json({
    applinks: {},
    webcredentials: {
      apps: ["XXXXXXXXXX.YYY.YYYYY.YYYYYYYYYYYYYY"]
    },
    appclips: {}
  });
}