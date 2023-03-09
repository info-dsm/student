import axios from "axios";
import { createNoticeProps, presigned } from "../../../dist";

export const createNoticeFile = async (
  data: createNoticeProps,
  files: File[]
) => {
  await axios.all([
    data.response.map((data) => {
      const file: [File] = files.splice(
        files.findIndex((e) => e.name === data.fileName),
        1
      ) as [File];
      presigned(data.url, ...file);
    }),
  ]);
};
