import React from "react";
import styled from "styled-components";
function Login() {
  return <Container>

    <Content>
        <Ctalog src="/images/cta-logo-one.svg"/>
        <Ctadiscription>GET ALL HERE</Ctadiscription>
        <Description>
         dzfsgsdfasdfhishnfsdjfoliskdjfisdj
         jsdoljfsdfjsldkjfjlkjlsdkjfesk.lskdflksdjflksjdflkjsdlkfjlsdkjflksdjflksdjflksdjflksdj
        </Description>
        <Ctalog2 src="/images/cta-logo-two.png"/>
    </Content>
  </Container>;
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
 display:flex;
 flex-direction:column;
 justify-content:top;
 align-items:center;
 margin-top:100px;
 opacity:0.65;


  &:before {
    margin-top:65px;
    background-position:top ;
    background-size: cover;
    background-repeat: no-repeat;
 
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const Content=styled.div`

width:80%;
max-width:750px;

display:flex;
flex-direction:column;
align-items:center;






`
const Ctalog=styled.img`



`
const Ctalog2=styled.img`

width:81%;


`
const Description=styled.p`

text-align:center;
letter-spacing:1.2px;

font-weight: bold;


`
const Ctadiscription=styled.a`

padding:10px 0;

font-weight: bold;
background-color:#0063e5;
color:#f9f9f9;
border-radius:4px;
width:100%;
// display:flex;
// justify-content:center;
text-align: center;
cursor:pointer;
font-size:20px;
letter-spacing:1.2px;

`