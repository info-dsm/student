import request from "../..";

export const postCompanyCustom = async ({
  classification,
}: {
  classification: string;
}) => {
  await request({
    method: "post",
    url: "/company/custom",
    params: {
      classification: classification,
    },
  });
};
