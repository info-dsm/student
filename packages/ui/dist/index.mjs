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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(_MiniButton, { size, less, onClick: () => onClick, children }) });
};
var _MiniButton = styled.div`
  width: ${(props) => props.size === "small" ? "2.5rem" : "3rem"};
  font: 500 normal ${(props) => props.size === "small" ? "1rem" : "0.7rem"}
      "pretendard",
    sans-serif;
  height: ${(props) => props.size === "small" ? "2.5rem" : "1.25rem"};
  text-align: center;
  line-height: ${(props) => props.size === "small" ? "2.5rem" : "1.25rem"};

  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
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

// components/pagination.tsx
import { useCallback } from "react";
import styled2 from "styled-components";
import { Fragment as Fragment4, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Pagination = ({
  nowIndex,
  lastIndex,
  changeIndex
}) => {
  const ChangeIndex = useCallback(
    (index) => {
      changeIndex(index);
    },
    [nowIndex]
  );
  return /* @__PURE__ */ jsx4(Fragment4, { children: lastIndex < 8 ? /* @__PURE__ */ jsxs2(_Container, { width: (lastIndex - 1) * 70 + 130, children: [
    /* @__PURE__ */ jsx4(
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
    new Array(lastIndex).fill("").map((item, index) => /* @__PURE__ */ jsx4(Fragment4, { children: /* @__PURE__ */ jsx4(
      _Button2,
      {
        selected: nowIndex === index + 1,
        onClick: () => ChangeIndex(index + 1),
        children: index + 1
      }
    ) })),
    /* @__PURE__ */ jsx4(
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
  ] }) : /* @__PURE__ */ jsxs2(_Container, { width: 550, children: [
    /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsx4(_Button2, { selected: nowIndex === 1, onClick: () => ChangeIndex(1), children: "1" }),
    nowIndex < 6 ? /* @__PURE__ */ jsx4(_Button2, { selected: nowIndex === 2, onClick: () => ChangeIndex(2), children: "2" }) : /* @__PURE__ */ jsx4(_Elipsis, { children: "\u2022\u2022\u2022" }),
    (nowIndex < 6 ? [3, 4, 5] : nowIndex > lastIndex - 5 ? [lastIndex - 4, lastIndex - 3, lastIndex - 2] : [nowIndex - 1, nowIndex, nowIndex + 1]).map((item) => /* @__PURE__ */ jsx4(
      _Button2,
      {
        selected: nowIndex === item,
        onClick: () => ChangeIndex(item),
        children: item
      }
    )),
    nowIndex > lastIndex - 5 ? /* @__PURE__ */ jsx4(
      _Button2,
      {
        selected: nowIndex === lastIndex - 1,
        onClick: () => ChangeIndex(lastIndex + 1),
        children: lastIndex - 1
      }
    ) : /* @__PURE__ */ jsx4(_Elipsis, { children: "\u2022\u2022\u2022" }),
    /* @__PURE__ */ jsx4(
      _Button2,
      {
        selected: nowIndex === lastIndex,
        onClick: () => ChangeIndex(lastIndex),
        children: lastIndex
      }
    ),
    /* @__PURE__ */ jsx4(
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
var _Button2 = styled2.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  background-color: ${(props) => props.selected ? props.theme.colors.blue : "transparent"};
  color: ${(props) => props.selected ? props.theme.colors.white : props.theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
var _Elipsis = styled2.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.black};
`;
var _NavBar = styled2.div`
  font: 500 normal 1rem "pretendard", sans-serif;
  width: 1rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  :hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;
var _Container = styled2.div`
  margin: 0 auto;

  display: flex;
  height: 2.5rem;
  width: ${(props) => props.width}px;
  justify-content: space-between;
`;
export {
  Button,
  CustomThemeProvider,
  MiniButton,
  Pagination,
  Props
};
