import { createGlobalStyle } from 'styled-components';
import background from './images/backgroundImage.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
        background-image: url("${background}");
    }
`;