import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 13px;
        -webkit-tap-highlight-color: transparent;
    }
    a {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 13px;
        text-decoration: none;
        color: white;
    }
    div {
    }
`;
