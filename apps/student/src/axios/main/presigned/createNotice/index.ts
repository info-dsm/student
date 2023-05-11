import axios from "axios";
import { createNoticeProps, presigned } from "../../../dist";

export const createNoticeFile = async (
  data: createNoticeProps,
  files: File[]
) => {
  data.response.map((t, i) => {
    presigned(t.url, files[i]);
  });
};
