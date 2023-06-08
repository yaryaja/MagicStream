import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
    
          <Wrap>
            <img src="./images/viewers-disney.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-pixar.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-marvel.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-national.png"></img>
          </Wrap>
         

      </Content>
      <Content2>
    
          <Wrap>
            <img src="./images/viewers-disney.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-pixar.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-marvel.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-national.png"></img>
          </Wrap>
         

      </Content2>
      <h4>You may like</h4>
      <Content3>
    
          <Wrap>
            <img src="./images/viewers-disney.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-pixar.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-marvel.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-national.png"></img>
          </Wrap>
         

      </Content3>
      <h4>You may like</h4>
      <Content3>
    
          <Wrap>
            <img src="./images/viewers-disney.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-pixar.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-marvel.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-national.png"></img>
          </Wrap>
         

      </Content3>
     
      <Content4>
    
          <Wrap>
            <img src="./images/viewers-disney.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-pixar.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-marvel.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-national.png"></img>
          </Wrap>
         

      </Content4>
      <Content5>
    
          <Wrap>
            <img src="./images/viewers-disney.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-pixar.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-marvel.png"></img>
          </Wrap>
          <Wrap>
            <img src="./images/viewers-national.png"></img>
          </Wrap>
         

      </Content5>
    </Container>
  );
}

export default Movies;
const Container = styled.div`

`
const Content = styled.div`
margin-top:32px;

display:grid;
grid-gap:50px;
grid-template-columns: repeat(4,minmax(0,1fr));

`
const Content2 = styled.div`
margin-top:32px;

display:grid;
grid-gap:50px;
grid-template-columns: repeat(4,minmax(0,1fr));

`
const Content3 = styled.div`
margin-top:32px;

display:grid;
grid-gap:50px;
grid-template-columns: repeat(4,minmax(0,1fr));

`
const Content4 = styled.div`
margin-top:32px;

display:grid;
grid-gap:50px;
grid-template-columns: repeat(4,minmax(0,1fr));

`
const Content5 = styled.div`
margin-top:32px;

display:grid;
grid-gap:50px;
grid-template-columns: repeat(4,minmax(0,1fr));

`


const Wrap=styled.div`
cursor:pointer;
border: 3px solid rgba(249,249,249,0.1);
padding:0 2px;
border-radius:10px;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
  width:100%;
  height:100%;
  object-fit:cover;

}
&:hover{
  box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  border-color:rgba(249,249,249,0.8);
  transform:scale(1.1);
}

`

