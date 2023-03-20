import request from "../..";
export interface getClassificationProps {
  bigClassification: {
    bigClassificationName: string;
  };
  name: string;
}

export const getClassification = async () => {
  const data: getClassificationProps[] = await request.get(
    `/notice/classification`
  );
  return data;
};
