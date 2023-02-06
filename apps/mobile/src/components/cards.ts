import styled from "styled-components";

export const Body = styled.div `
  width: 100%;
  height: auto;
  background: #FFFFFF;

  border: 1px solid #EAEAEA;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  display: inline-flex;

  padding: 10px;

  margin-top: 24px;
`

export const Image = styled.img `
  width: 76px !important;
  height: 76px !important;
  border-radius: 6px;
`

export const NotImage = styled.div `
  width: 76px !important;
  height: 76px !important;
  border-radius: 6px;
  background-color: #EAEAEA;
  text-align: center;
`

export const CompanyContent = styled.div `
  color: #343A40;

  h1 {
    margin: 5px 0 0 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
  }

  div {
    margin: 10px 0 0 5px;
    font-weight: 500;
    font-size: 12px;
  }

  ul {
    padding: 0 0 0 5px;
    font-weight: 600;
    font-size: 11px;
    display: flex;
    list-style: none;
  }

  ul li {
    margin-right: 5px;
  }
`

export const NoticeContent = styled.div `

`
