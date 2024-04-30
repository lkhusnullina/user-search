import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'StratosSkyeng';
    src:
      url('../public/assets/fonts/StratosSkyeng.woff2') format('woff2'),
      local('Arial');
    font-weight: 400;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  
*:before,
*:after {
    box-sizing: border-box;
}
  
a,
a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
}

button{
    cursor: pointer;
}

ul li {
    list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng';
    font-size: 20px;
    color: #ffffff;
    background-color: #181818;
    // overflow: auto;

    // scrollbar-width: 5px; 
    // scrollbar-color: #d7def2 transparent; 

    // &::-webkit-scrollbar {
    //     width: 1px; 
    // }

    // &::-webkit-scrollbar-track {
    //     background-color: transparent; 
    // }

    // &::-webkit-scrollbar-thumb {
    //     background-color: transparent; 
    // }
}

div,
button,
a {
    font-family: 'StratosSkyeng', sans-serif;
}
`;

export const Container = styled.div`
  max-width: 1920px;
  max-height: 100vh;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
`