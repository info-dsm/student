"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  GlobalStyle: () => GlobalStyle,
  Props: () => Props,
  theme: () => theme,
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_jsx_runtime.Fragment,
    {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        children: "Boop",
      }),
    }
  );
};

// style/theme.ts
var theme = {
  colors: {
    admin: {
      blue: "#4000FF",
      black: "#000000",
      silver: "#F0F0F0",
      gray: "#BDBDBD",
      kaki: "#868686",
      white: "#FFFFFF",
      purple: "#F8F6FF",
      line: "#D9D9D9",
      false: "#F63A42",
    },
    student: {
      balck: "#101112",
      blue: "#6750F8",
      indigo: "#6D62EF",
      cobalt: "#888DFF",
      white: "#FFFFFF",
    },
  },
  graduation: 'linear-gradient(180deg,"#7243FF" 0%,"#AB91F8" 100%)',
};

// style/globalstyle.ts
var import_styled_components = require("styled-components");
var import_styled_normalize = require("styled-normalize");
var GlobalStyle = import_styled_components.createGlobalStyle`
  ${import_styled_normalize.normalize}
  body,html {
    user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.admin.silver};
    width: 10px;
    }
    &::-webkit-scrollbar-thumb {
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_jsx_runtime2.Fragment,
    {
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        children: "\uC548\uB155\uD558\uC138\uC5EC",
      }),
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    Button,
    GlobalStyle,
    Props,
    theme,
  });
