import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "ui";
import styled from "styled-components";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "INFO/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;
const Spacing = styled.div`
  div {
    margin-bottom: 10px;
  }
`;
export const lessButton: ComponentStory<typeof Button> = () => (
  <>
    <Spacing>
      <Button size="small" less={5}>
        양식 등록
      </Button>
      <Button size="aver" less={5}>
        선도기업 등록
      </Button>
      <Button size="large" less={5}>
        모집의뢰 등록
      </Button>
    </Spacing>
  </>
);
lessButton.storyName = "less";
export const RoundButton: ComponentStory<typeof Button> = () => (
  <>
    <Spacing>
      <Button size="small" less={20}>
        양식 등록
      </Button>
      <Button size="aver" less={20}>
        선도기업 등록
      </Button>
      <Button size="large" less={20}>
        모집의뢰 등록
      </Button>
    </Spacing>
  </>
);
RoundButton.storyName = "round";
