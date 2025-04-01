import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  res.status(200).json([
    {
      relation: ["delegate_permission/common.get_login_creds"],
      target: {
        namespace: "android_app",
        package_name: "com.w3meetauth",
        sha256_cert_fingerprints: [
          "00:6D:D0:76:8F:AB:A2:DC:47:AE:E5:28:2D:2A:DD:B9:DF:5A:B0:52:CC:7E:D5:2C:08:39:C2:4C:93:C6:60:13",
        ],
      },
    },
  ]);
};
