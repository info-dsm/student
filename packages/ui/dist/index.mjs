var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components/Button.tsx
import styled from "styled-components";
import { Fragment, jsx } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, {
    children,
    less,
    size,
    onClick
  } = _b, props = __objRest(_b, [
    "children",
    "less",
    "size",
    "onClick"
  ]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(_Button, { size, less, onClick: () => onClick, children }) });
};
var _Button = styled.div`
  width: ${(props) => props.size === "small" ? "5rem" : props.size === "aver" ? "6rem" : "7.5rem"};
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: ${(props) => props.less}px;
  text-align: center;
  font-size: 0.7rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
`;

// style/CustomThemeProvider.tsx
import { ThemeProvider } from "styled-components";

// style/globalstyle.ts
import { createGlobalStyle } from "styled-components";
var GlobalStyle = createGlobalStyle`
  body {
    user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.gray};
    width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #6141cc;
      border-radius: 3px;
      width: 10px;
    }
  }
  html {  
    font-size: 20px;
  }
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

// style/theme.ts
var theme = {
  colors: {
    balck: "#101112",
    black40: "rgba(16, 17, 18, 0.4)",
    black50: "rgba(16, 17, 18, 0.5)",
    blue: "#6750F8",
    indigo: "#6D62EF",
    cobalt: "#888DFF",
    white: "#FFFFFF",
    red: "#E24646",
    gray: "#EAEAEA",
    gray2: "#F7F7F7",
    pink: "#F8CFCF",
    skeleton: "#D9D9D9"
  },
  graduation: "linear-gradient(180deg, rgba(16, 17, 18, 0.2) 4.95%, #101112 95.05%)"
};

// style/CustomThemeProvider.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs } from "react/jsx-runtime";
var CustomThemeProvider = ({ children }) => {
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
    /* @__PURE__ */ jsx2(GlobalStyle, {}),
    children
  ] }) });
};

// components/table.tsx
import { Fragment as Fragment3, jsx as jsx3 } from "react/jsx-runtime";
var Props = () => {
  return /* @__PURE__ */ jsx3(Fragment3, { children: /* @__PURE__ */ jsx3("div", { children: "\uC548\uB155\uD558\uC138\uC5EC" }) });
};
export {
  Button,
  CustomThemeProvider,
  Props
};
