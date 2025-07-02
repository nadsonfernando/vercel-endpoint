import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  res.status(200).json({
    applinks: {},
    webcredentials: {
      apps: ["K24BXT3VBX.vercel-endpoint.vercel.app"],
    },
    appclips: {},
  });
};
