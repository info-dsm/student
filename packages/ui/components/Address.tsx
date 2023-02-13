import styled from "styled-components";
export interface AddressInputProps {
  text: string;
  value: string;
  onClick: () => void;
  number: string;
  placeholder: string;
}
export const AddressInput = ({ text, number, ...props }: AddressInputProps) => {
  return (
    <>
      <_Box>
        <_Title>{text}</_Title>
        <_Layout>
          <_Input {...props} />
          <_AddressNumber>{number}</_AddressNumber>
        </_Layout>
      </_Box>
    </>
  );
};
const _Box = styled.div`
  width: 408px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const _Title = styled.div`
  width: max-content;
  font: 500 13px "Pretendard";
  color: ${({ theme }) => theme.colors.black40};
`;
const _Input = styled.input`
  border-radius: 5px;
  width: 300px;
  height: 40px;
  border: none;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
const _AddressNumber = styled.div`
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font: 500 13px "Pretendard";
  letter-spacing: 1px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
const _Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;
