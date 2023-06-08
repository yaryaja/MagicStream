import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'




function Home() {
  useEffect(()=>{
    // db.collection("movies").onSnapshot((snapshot)=>{
    //   console.log(snapshot);
    // })

  },[])

  return (
    <Container>
      
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container=styled.main`
// overflow-x:hidden;
min-height:calc(100vh - ap70px);
padding:0 calc(3.5vw + 5px);
// position:relative;


&:before{
  background-image: url("/images/home-background.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  content:"";
  position:absolute;
     top:0;
   bottom:0;
   left:0;
   right:0;
   z-index:-1;

}

`


// const Container=styled.main`
// min-height:calc(100vh - 70px);
// padding :0 calc(3.5vw + 5px);


// //  position:relative;
//  &:before {
 
//   background: url("/images/home-background.png) center center / cover no-repeat fixed;

   
  
//    content:"";

//    position:absolute;
//    top:0;
//    bottom:0;
//    left:0;
//    right:0;
//    z-index:-1;
     
//     }



// `
