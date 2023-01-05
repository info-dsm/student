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
  cursor: pointer;
  border-radius: 5px;
  :hover {
    filter: brightness(0.8);
  }
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
var Table = () => {
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
var _Elipsis = styled2.div`
  font: 700 normal 1rem "pretendard", sans-serif;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.black};
`;
var _NavBar = styled2.div`
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
var _Container = styled2.div`
  margin: 0 auto;

  display: flex;
  height: 3rem;
  width: ${(props) => props.width}px;
  justify-content: space-between;
`;

// components/Select.tsx
import styled3, { keyframes } from "styled-components";
import { useState, useLayoutEffect, useCallback as useCallback2 } from "react";
import { Fragment as Fragment5, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var LittleSelectComplete = ({ now, list, onClick }) => {
  const [state, setState] = useState(false);
  const AddValuePropsFunc = useCallback2((props) => {
    setState(false);
    onClick(props);
  }, []);
  useLayoutEffect(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return /* @__PURE__ */ jsxs3(Fragment5, { children: [
    /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsx5(SelectIcon, { state })
        ]
      }
    ),
    /* @__PURE__ */ jsx5(DataList, { state, children: list.map((user) => /* @__PURE__ */ jsx5("div", { onMouseDown: () => AddValuePropsFunc(user), children: user }, user)) })
  ] });
};
var Spin = (x, y) => keyframes`
 0% {
    transform: rotate(${x}deg);
 }
 100% {
  transform: rotate(${y}deg);
 }
`;
var DataList = styled3.div`
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
var InputProps = styled3.div`
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
var SelectIcon = styled3.div`
  position: absolute;
  top: 1.7rem;
  left: 7rem;
  border-top: 0.5rem solid ${(props) => props.theme.colors.white};
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  animation: ${(props) => props.state ? Spin(180, 0) : Spin(0, 180)} 0.25s
    ease-in-out 0s alternate forwards;
`;
export {
  Button,
  CustomThemeProvider,
  LittleSelectComplete,
  MiniButton,
  Pagination,
  Table
};
