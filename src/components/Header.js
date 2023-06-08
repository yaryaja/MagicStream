import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg"/>
      <Navmenu>
          <a>
          <Logo src="./images/home-icon.svg"/>
          <span>HOME</span>
          </a>
          <a>
          <Logo src="./images/search-icon.svg"/>
          <span>SEARCH</span>
          </a>
          
          <a>
          <Logo src="./images/watchlist-icon.svg"/>
          <span>WATCHLIST</span>
          </a>
          <a>
          <Logo src="./images/original-icon.svg"/>
          <span>ORIGINAL</span>
          </a>
          <a>
          <Logo src="./images/movie-icon.svg"/>
          <span>MOVIES</span>
          </a>
          
          <a>
          <Logo src="./images/series-icon.svg"/>
          <span>SERIES</span>
          </a>
          
      </Navmenu>
      <UserImage src="./images/download.jpeg">

      </UserImage>
      
    </Nav>
  )
}

export default Header
const Nav=styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 35px;
    overflow-x:hidden;

`
const Logo=styled.img`
width:50px;
height:70px;

`
const Navmenu=styled.div`
  display:flex;
  flex:1;
  margin-left:25px;
  align-items:center;
a{
  display:flex;
  align-items:center;
  padding:0 12px;
  cursor:pointer;
  img{
    height:20px;
  }
  span{
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;
    &:after{
      content:"";
      height:2px;
      background:white;

      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      opacity:0; 
      transform:scaleX(0);
      transorm-oriign:left center;

    }
  }
  &:hover{
    span:after{
      transform:scaleX(1);
      opacity:1;
    }
  }
}
`
const UserImage=styled.img`
width:45px;
border-radius:50px;
height:40px;
align-items:center;
cursor:pointer;




`

