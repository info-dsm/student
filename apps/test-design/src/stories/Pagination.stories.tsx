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
  title: "INFO/Components/Pagination",
  component: Pagination,
  argTypes: { onClick: { action: "clicked" } },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Pagination>;

export const lessPagin: ComponentStory<typeof Pagination> = (args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nowIndex, setNowIndex] = useState<number>(1);
  const changeIndex = (index: number) => {
    setNowIndex(index);
  };
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
lessPagin.storyName = "";
