import { useState } from "react";
import styled from "styled-components";
import { SearchBarProps } from "../utils/interfaces";

export const SearchBar:React.FC<SearchBarProps> = ({ url, placeholder }) => {
  const [search, setSearch] = useState<string>("")
  return (
    <form method="GET" action={url + "/search/" + search}>
      <SearchLabel>
        <SearchInput type={"text"} placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchSubmitBtn type={"submit"}>
          <svg style={{ marginTop: "2px" }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><link type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style lang="en" type="text/css" id="dark-mode-custom-style"/><style lang="en" type="text/css" id="dark-mode-native-style"/><style lang="en" type="text/css" id="dark-mode-native-sheet"/>
            <path d="M13.77 12.6659L11.1264 10.0301C11.9794 8.94347 12.4422 7.60162 12.4404 6.22022C12.4404 4.98998 12.0756 3.78736 11.3921 2.76445C10.7087 1.74154 9.73719 0.944282 8.60059 0.473489C7.464 0.0026951 6.21332 -0.120486 5.00672 0.119523C3.80011 0.359531 2.69178 0.951949 1.82186 1.82186C0.951949 2.69178 0.359531 3.80011 0.119523 5.00672C-0.120486 6.21332 0.0026951 7.464 0.473489 8.60059C0.944282 9.73719 1.74154 10.7087 2.76445 11.3921C3.78736 12.0756 4.98998 12.4404 6.22022 12.4404C7.60162 12.4422 8.94347 11.9794 10.0301 11.1264L12.6659 13.77C12.7382 13.8429 12.8242 13.9007 12.9189 13.9402C13.0137 13.9797 13.1153 14 13.218 14C13.3206 14 13.4222 13.9797 13.517 13.9402C13.6117 13.9007 13.6977 13.8429 13.77 13.77C13.8429 13.6977 13.9007 13.6117 13.9402 13.517C13.9797 13.4222 14 13.3206 14 13.218C14 13.1153 13.9797 13.0137 13.9402 12.9189C13.9007 12.8242 13.8429 12.7382 13.77 12.6659ZM1.55506 6.22022C1.55506 5.29754 1.82866 4.39558 2.34128 3.62839C2.85389 2.86121 3.58249 2.26327 4.43494 1.91017C5.28739 1.55708 6.2254 1.46469 7.13035 1.6447C8.0353 1.8247 8.86655 2.26902 9.51899 2.92145C10.1714 3.57389 10.6157 4.40514 10.7957 5.31009C10.9757 6.21504 10.8834 7.15305 10.5303 8.0055C10.1772 8.85795 9.57923 9.58655 8.81205 10.0992C8.04486 10.6118 7.1429 10.8854 6.22022 10.8854C4.98294 10.8854 3.79634 10.3939 2.92145 9.51899C2.04656 8.6441 1.55506 7.4575 1.55506 6.22022Z" fill="#6750F8"/>
          </svg>
        </SearchSubmitBtn>
      </SearchLabel>
    </form>
  )
}

const SearchLabel = styled.label`
  position: relative;
`

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  color: black;

  border: 1px solid #6750F8;
  border-radius: 20px;

  padding-left: 30px;

  font-size: 11px;
`

const SearchSubmitBtn = styled.button `
  background-color: #FFFFFF;
  position:absolute;
  top: 2px;
  left: 12px;
`
