import { PropsOption } from "./interface";
declare module "*.jpg" {
  const path: string;
  export default path;
}

declare global {
  interface Window {
    daum?: {
      postcode: {
        load: (fn: () => void) => void;
        version: string;
        _validParam_: boolean;
      };
      Postcode: PropsOption;
    };
  }
}
