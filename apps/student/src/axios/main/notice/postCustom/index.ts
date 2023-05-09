import request from "../..";

export const PostNoticeCustom = async ({
  classification,
}: {
  classification: string;
}) => {
  await request({
    method: "post",
    url: "/notice/custom",
    params: {
      classification: classification,
    },
  });
};
