/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pagination } from "ui";
import styled from "styled-components";
const Spacing = styled.div`
  * {
    margin-bottom: 10px;
  }
`;
export default {
  title: "INFO/Components",
  component: Pagination,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Pagination>;

export const lessPagin: ComponentStory<typeof Pagination> = (args) => {
  const [nowIndex, setNowIndex] = useState<number>(1);
  const changeIndex = useCallback(
    (index: number) => {
      setNowIndex(index);
    },
    [nowIndex, setNowIndex]
  );
  return (
    <Spacing>
      {new Array(7).fill("").map((item, index) => (
        <>
          <Pagination
            nowIndex={nowIndex}
            lastIndex={index + 1}
            changeIndex={changeIndex}
          />
        </>
      ))}
      <Pagination
        nowIndex={nowIndex}
        lastIndex={33}
        changeIndex={changeIndex}
      />
    </Spacing>
  );
};
lessPagin.storyName = "Pagination";
