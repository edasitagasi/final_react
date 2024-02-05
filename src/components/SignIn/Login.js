import { useState } from "react";
import Modal from "./Modal/Modal";
import Content from "./Modal/Content";
import login from "../../assets/login.jpg"

function Support() {

    const [isOpen, setIsOpen] = useState(false);

    return <div className="login_container">

        <div className="login_text_img_container">
            <div className="login_text">
                <h1 className="login_title">Sign up and get more opportunities:</h1>
                <ul className="ul_login">
                    <li className="li_login">Easy Access to Tasty Recipes according your individual diet</li>
                    <li className="li_login">Personalized Workout Plans including chat with our specialists</li>
                    <li className="li_login">Interactive Community where you can ask for advice or support</li>
                    <li className="li_login">Progress Tracking will help you to be motivated and celebrate wins</li>
                    <li className="li_login">Special calendar where you can plan you nutrition and workouts</li>
                    <li className="li_login">Lots of useful articles and info based on science and researches</li>
                </ul>
            </div>
            <div>
                <img src={login} alt="login_img" className="login_img" />
            </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="login_btn">My account</button>

        {isOpen &&
        <Modal setIsOpen={setIsOpen}>
            <Content setIsOpen={setIsOpen}/>
        </Modal>
        }
    </div>

}

export default Support;