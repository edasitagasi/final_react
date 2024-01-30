import { useState } from "react";
import { slideData } from "./slideData.js";
import '../App.css';
import left from "../assets/left.png";
import right from "../assets/right.png";

function Slides() {

    const [slide, setSlide] = useState(0);
    const {header, description, image} = slideData[slide];

    const previousPerson = () => {
        setSlide((slide =>{
            slide --;
            if (slide < 0) {
                return slideData.length-1;
            }
            return slide;
        }))

    }

    const nextPerson = () => {
        setSlide((slide =>{
            slide ++;
            if (slide > slideData.length - 1) {
                slide = 0;
            }
            return slide;
        }))

    }

    return(<div className="big_slide_container">
        <div className="btnSlide_container">
            <button onClick={previousPerson} className="btn_slide"><img src={left} alt="btn" width="100px" className="btn_img" /></button>
        </div>
        <div  className="slide_container">
        <h1 className="slide_title">Why people choose us?</h1>
        <img src={image} alt="img" width="200px" className="slide_photo" />
        <h2 className="slide_name">{header}</h2>
        <p className="slide_par">{description}</p>
        </div>
        <div className="btnSlide_container">
            <button onClick={nextPerson} className="btn_slide"><img src={right} alt="btn" width="100px" className="btn_img"/></button>
        </div>
    </div>)
}
export default Slides;