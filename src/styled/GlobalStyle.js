import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 body
 {
    box-sizing: border-box;
     margin:0;
     padding:0;
     font-family : Open-Sans;
 }

 html
 {
     margin:0;
     padding:0;
 }

 *
 {
     box-sizing:border-box;
 }

 h1
 {
    font-size:5vw; 
    padding:1vw;
     margin:0;
 }

 h2
 {
    font-size:3vw; 
    padding:0.5vw;
     margin:0;
 }
 h3{
     font-size: 2.5vw;
     padding:0.4vw;
     margin:0;
 }
 p
 {
     font-size: 2vw;
     text-align:left; 
     padding:0.4vw;
     margin:0;
     
 }

button {
    color:white;
    background-color: black;

    text-align:center;

}



 `;
export default GlobalStyle;
