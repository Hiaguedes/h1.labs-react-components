import { createGlobalStyle } from "styled-components";
import { Colors } from "../../contexts/ThemeProvider/theme";

const GlobalStyle = createGlobalStyle<{ theme: Colors }>`
    * {
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        outline: none;
        border: transparent;
    }

    a { 
        color: ${({ theme }) => theme.linkColor};
    }

    body { 
        width: 100vw;
        height: 100vh;
        font-family: 'Helvetica', 'serif';
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textDefaultColor}
    }
`;

export default GlobalStyle;
