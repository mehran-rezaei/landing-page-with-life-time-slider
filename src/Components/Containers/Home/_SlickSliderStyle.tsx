import styled from "react-emotion";

const SliderWrapper = styled("div")`
  .slick-list {
  }
  /* Slider */
 

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -10px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 10px;
    height: 10px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: #B5B5B5;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 10px;
    height: 10px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }

  /* Custom Slick Dots */

  @keyframes loading {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  .ft-slick__dots--custom {
    height: 5px;
    width: 14px;
    background-color: #B5B5B5;
    border-radius: 4px;
    position: relative;
  }

  .slick-dots li {
    
    width: 14px;
    margin: 0 4px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active {
    width: 56px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active .ft-slick__dots--custom {
    width: 56px;
    top: -5px;
    overflow: hidden;
    .loading {
      height: 8px;
      animation: loading 4s ease-out;
      background-image: linear-gradient(270deg, #4fd15a, #03ac0e);
      display: inline-block;
      position: absolute;
      top:0 ;
      left: 0;
      border-radius: 4px;
    }
  }
`;

export default SliderWrapper;
