import ConfirmIcon from "../images/Confirm";
import styled from "styled-components";
export interface SuccessProps {
  text: string;
  success: boolean;
}
export const Success = ({ text, success }: SuccessProps) => {
  return (
    <>
      <_Layout>
        {success ? (
          <span>
            <ConfirmIcon />
          </span>
        ) : (
          <></>
        )}
        {text}
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  width: max-content;
  height: 18px;
  font: 500 15px "Pretendard";
  line-height: 20px;
  color: ${(props) => props.theme.colors.black40};
  display: flex;
  gap: 5.5px;
`;
