var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  GlobalStyle: () => GlobalStyle,
  Props: () => Props,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// components/Button.tsx
var import_styled_components = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_Button, { size, less, children }) });
};
var _Button = import_styled_components.default.div`
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

// style/globalstyle.ts
var import_styled_components2 = require("styled-components");
var GlobalStyle = import_styled_components2.createGlobalStyle`
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

// components/table.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Props = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: "\uC548\uB155\uD558\uC138\uC5EC" }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  GlobalStyle,
  Props,
  theme
});
