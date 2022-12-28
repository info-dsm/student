import "styled-components";
type adminKey =
  | "blue"
  | "black"
  | "silver"
  | "gray"
  | "kaki"
  | "white"
  | "purple"
  | "line"
  | "false";
type studentKey = "balck" | "blue" | "indigo" | "cobalt" | "white";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      admin: { [key in adminKey]: string };
      student: { [key in studentKey]: string };
    };
    graduation: string;
  }
}
