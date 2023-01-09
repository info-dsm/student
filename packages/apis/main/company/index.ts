import request from "../";
export const getCompanyList = async (idx: number) => {
  try {
    const { data } = await request({
      method: "get",
      url: "/company/list",
      params: {
        idx: idx,
        size: 8,
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
