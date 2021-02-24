import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        outline: none;
        border: transparent;
    }

    a { 
        color: black;
    }

    body { 
        width: 100vw;
        height: 100vh;
        font-family: 'Helvetica', 'serif';
    }
`;

export default GlobalStyle;