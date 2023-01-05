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
  CustomThemeProvider: () => CustomThemeProvider,
  LittleSelectComplete: () => LittleSelectComplete,
  MiniButton: () => MiniButton,
  Pagination: () => Pagination,
  Table: () => Table
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_Button, { size, less, onClick: () => onClick, children }) });
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
  :hover {
    filter: brightness(0.8);
  }
`;
var MiniButton = (_a) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_MiniButton, { size, less, onClick: () => onClick, children }) });
};
var _MiniButton = import_styled_components.default.div`
  width: ${(props) => props.size === "small" ? "2.5rem" : "3rem"};
  font: 500 normal ${(props) => props.size === "small" ? "1rem" : "0.7rem"}
      "pretendard",
    sans-serif;
  height: ${(props) => props.size === "small" ? "2.5rem" : "1.25rem"};
  text-align: center;
  line-height: ${(props) => props.size === "small" ? "2.5rem" : "1.25rem"};

  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: 5px;
  :hover {
    filter: brightness(0.8);
  }
`;

// style/CustomThemeProvider.tsx
var import_styled_components3 = require("styled-components");

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
var import_jsx_runtime2 = require("react/jsx-runtime");
var CustomThemeProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_styled_components3.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GlobalStyle, {}),
    children
  ] }) });
};

// components/table.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Table = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: "\uC548\uB155\uD558\uC138\uC5EC" }) });
};

// components/pagination.tsx
var import_react = require("react");
var import_styled_components4 = __toESM(require("styled-components"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Pagination = ({
  nowIndex,
  lastIndex,
  changeIndex
}) => {
  const ChangeIndex = (0, import_react.useCallback)(
    (index) => {
      changeIndex(index);
    },
    [nowIndex]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: lastIndex < 8 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(_Container, { width: (lastIndex - 1) * 70 + 130, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _NavBar,
      {
        onClick: () => {
          if (nowIndex > 1) {
            ChangeIndex(nowIndex - 1);
          }
        },
        children: "<"
      }
    ),
    new Array(lastIndex).fill("").map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _Button2,
      {
        selected: nowIndex === index + 1,
        onClick: () => ChangeIndex(index + 1),
        children: index + 1
      }
    ) })),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _NavBar,
      {
        onClick: () => {
          if (nowIndex < lastIndex) {
            ChangeIndex(nowIndex + 1);
          }
        },
        children: ">"
      }
    )
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(_Container, { width: 550, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _NavBar,
      {
        onClick: () => {
          if (nowIndex > 1) {
            ChangeIndex(nowIndex - 1);
          }
        },
        children: "<"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(_Button2, { selected: nowIndex === 1, onClick: () => ChangeIndex(1), children: "1" }),
    nowIndex < 6 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(_Button2, { selected: nowIndex === 2, onClick: () => ChangeIndex(2), children: "2" }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(_Elipsis, { children: "\u2022\u2022\u2022" }),
    (nowIndex < 6 ? [3, 4, 5] : nowIndex > lastIndex - 5 ? [lastIndex - 4, lastIndex - 3, lastIndex - 2] : [nowIndex - 1, nowIndex, nowIndex + 1]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _Button2,
      {
        selected: nowIndex === item,
        onClick: () => ChangeIndex(item),
        children: item
      }
    )),
    nowIndex > lastIndex - 5 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _Button2,
      {
        selected: nowIndex === lastIndex - 1,
        onClick: () => ChangeIndex(lastIndex + 1),
        children: lastIndex - 1
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(_Elipsis, { children: "\u2022\u2022\u2022" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _Button2,
      {
        selected: nowIndex === lastIndex,
        onClick: () => ChangeIndex(lastIndex),
        children: lastIndex
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      _NavBar,
      {
        onClick: () => {
          if (nowIndex < lastIndex) {
            ChangeIndex(nowIndex + 1);
          }
        },
        children: ">"
      }
    )
  ] }) });
};
var _Button2 = import_styled_components4.default.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  height: 3rem;
  width: 3rem;
  text-align: center;
  line-height: 3rem;
  background-color: ${(props) => props.selected ? props.theme.colors.blue : "transparent"};
  color: ${(props) => props.selected ? props.theme.colors.white : props.theme.colors.black};
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
var _Elipsis = import_styled_components4.default.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.black};
`;
var _NavBar = import_styled_components4.default.div`
  font: 400 normal 1.2rem "pretendard", sans-serif;
  width: 1.2rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  :hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;
var _Container = import_styled_components4.default.div`
  margin: 0 auto;

  display: flex;
  height: 3rem;
  width: ${(props) => props.width}px;
  justify-content: space-between;
`;

// components/Select.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var LittleSelectComplete = ({ now, list, onClick }) => {
  const [state, setState] = (0, import_react2.useState)(false);
  const AddValuePropsFunc = (0, import_react2.useCallback)((props) => {
    setState(false);
    onClick(props);
  }, []);
  (0, import_react2.useLayoutEffect)(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      InputProps,
      {
        id: now,
        state,
        onClick: (e) => {
          e.stopPropagation();
          setState(!state);
        },
        children: [
          now,
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectIcon, { state })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DataList, { state, children: list.map((user) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { onMouseDown: () => AddValuePropsFunc(user), children: user }, user)) })
  ] });
};
var Spin = (x, y) => import_styled_components5.keyframes`
 0% {
    transform: rotate(${x}deg);
 }
 100% {
  transform: rotate(${y}deg);
 }
`;
var DataList = import_styled_components5.default.div`
  visibility: ${(props) => props.state ? "visible" : "hidden"};
  width: auto;
  height: auto;
  div {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    width: 7.5rem;
    height: 2rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
    border: 1px solid #d3d3d3;
    text-align: center;
    font: 500 normal 1rem "pretendard", sans-serif;
    line-height: 2rem;
    :last-child {
      border-radius: 0px 0px 5px 5px;
    }
  }

  div:hover {
    background-color: ${(p) => p.theme.colors.gray};
  }
`;
var InputProps = import_styled_components5.default.div`
  width: 7.5rem;
  height: 2rem;
  border-radius: 5px 5px ${(props) => props.state ? 0 : 5}px
    ${(props) => props.state ? 0 : 5}px;
  font: 500 normal 1rem "pretendard", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  background-color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
`;
var SelectIcon = import_styled_components5.default.div`
  position: absolute;
  top: 1.7rem;
  left: 7rem;
  border-top: 0.5rem solid ${(props) => props.theme.colors.white};
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  animation: ${(props) => props.state ? Spin(180, 0) : Spin(0, 180)} 0.25s
    ease-in-out 0s alternate forwards;
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  CustomThemeProvider,
  LittleSelectComplete,
  MiniButton,
  Pagination,
  Table
});
