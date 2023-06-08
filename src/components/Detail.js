import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/slider-badag.jpg"></img>
      </Background>
      <Title>
        <img src="./images/logo.svg"></img>
      </Title>
      <Control>
        <PlayButton>
          <img src="/images/play-icon-black.png"></img>
          <span>
            PLAY
          </span>
        </PlayButton>

        <TrailerButton>
        <img src="/images/play-icon-white.png"></img>
        <span>
          TRAILER
          </span>
        </TrailerButton>
        <AddButton>

          <span>+</span>
        </AddButton>
        <GroupWatchButton>
        <img src="/images/group-icon.png"></img>
        </GroupWatchButton>
      </Control>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.85;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  height: 20vh;
  width: 20vw;
  position: fixed;
  left: 20px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Control = styled.div`

position:fixed;
width:250px;
display:flex;
top:250px;
// justify-content:center;
align-items:center;



`

const PlayButton = styled.button`
display:flex;
align-items:center;
letter-spacing:1.2px;
padding;0 12px;
margin-right:10px;
font-weight: bold;
cursor:pointer;

`
const TrailerButton = styled(PlayButton)`

background-color:rgba(0,0,0,0.3);
color:white;


`


const AddButton = styled.button`

display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
width:42px;
background-color:rgba(0,0,0,0.1);

height:42px;
border-radius:50%;
border:2px  solid white;
margin-right:10px;

span{
  font-weight: bold;
  color:white;

}

`

const GroupWatchButton = styled(AddButton)`
background-color:rgba(0,0,0);

`


