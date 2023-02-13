import requestApi from "../../token";

interface loginProps {
  accessToken: string;
  refreshToken: string;
}

export const login = async ({
  req,
}: {
  req: {
    email: string;
    password: string;
  };
}) => {
  const data: loginProps = await requestApi({
    method: "post",
    url: "/auth/login/user",
    data: {
      email: req.email,
      password: req.password,
    },
  });

  return data;
};
