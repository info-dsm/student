import "styled-components";
type MainKey =
  | "blue"
  | "black"
  | "silver"
  | "gray"
  | "kaki"
  | "white"
  | "purple"
  | "line"
  | "false";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: { main: { [key in MainKey]: string } };
    graduation: string;
  }
}
