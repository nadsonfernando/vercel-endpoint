import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  res.status(200).json({
    applinks: {},
    webcredentials: {
      apps: ["322LCSTP34.vercel-endpoint.vercel.app"],
    },
    appclips: {},
  });
};
