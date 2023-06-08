import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import "../App.css"
import { render } from "@testing-library/react";

function ImgSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousal {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt=""></img>
      </Wrap>
    </Carousal>
  )
}

export default ImgSlider
const Carousal=styled(Slider)`
margin-top:20px;
ul li button{
  &:before{
    font-size:10px;
    color:rgb(150,158,171);
    // color:white;
  }
}
  li.slick-active button::before{
    color:white;
  }
  button{
    z-index:1;
  }


.slick-list{
  overflow:visible;
}
`
const Wrap=styled.div`
    cursor:pointer;
   img{
     width:100%;
    height:20vh;
    border-radius:10px;
    border: 4px solid transparent;
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:10ms;
    // box-sizing:border-box;
    border-shadow:white;
    
    &:hover{
      border-color:rgba(249,249,249,0.8);
     }
   }
   


`