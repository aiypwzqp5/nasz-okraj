import { createGlobalStyle } from "styled-components";

import mulishBold from "../assets/fonts/Mulish-Bold.woff";
import mulish from "../assets/fonts/Mulish-Regular.woff";
import mulishExtraBold from "../assets/fonts/Mulish-ExtraBold.woff";
import mulishSemiBold from "../assets/fonts/Mulish-SemiBold.woff";
import mulishBlack from "../assets/fonts/Mulish-Black.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Mulish";
        src: url(${mulish}) format("woff");
    }
    @font-face {
        font-family: "MulishBold";
        src: url(${mulishBold}) format("woff");
    }
    @font-face {
        font-family: "MulishExtraBold";
        src: url(${mulishExtraBold}) format("woff");
    }
    @font-face {
        font-family: "MulishSemiBold";
        src: url(${mulishSemiBold}) format("woff");
    }
    @font-face {
        font-family: "MulishBlack";
        src: url(${mulishBlack}) format("woff");
    }
   *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

`;
