import "styled-components";
type MainKey =
  | "balck"
  | "black40"
  | "black50"
  | "blue"
  | "indigo"
  | "cobalt"
  | "white"
  | "red"
  | "gray"
  | "gray2"
  | "pink"
  | "skeleton"
  | "violet";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key in studentKey]: string;
    };
    graduation: string;
  }
}
