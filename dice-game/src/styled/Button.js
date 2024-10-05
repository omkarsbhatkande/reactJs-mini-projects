import styled from "styled-components"

 export const Button = styled.button`

padding: 10px 24px;
background: #000000;
border-radius: 5px;
color: white;
min-width: 200px;
cursor: pointer;
border: none;
font-size: 18px;
border: 1px solid transparent;
transition: 0.4s background ease-in;

&:hover{
background: white;
border: 1px solid #000000;
color: #000000;
transition: 0.5s background ease-in-in;
}
`;


export const outlineButton = styled(Button)`

background-color:white;
border: 1px solid black;
color: black;
cursor: pointer;

&:hover{
background: black;
border: 1px solid transparent;
color: white;
transition: 0.5s background ease-in-in;
}


`;