import strength from '../assets/strength.jpg';
import '../App.css';

const TabTwo = () => {

    return(
        <div className='tab_main_container'>
        <div>
            <img src={strength} alt="pic" className='tab_pic' />
        </div>

        <div className='tab_text_container'>
            <h2 className='tab_title'>Benefits of strength training:</h2>
            <ul>
                <li><span>Makes you stronger</span></li>
                <li><span>Burns calories efficiently</span></li>
                <li><span>Decreases abdominal fat</span></li>
                <li><span>Can help you appear leaner</span></li>
                <li><span>Decreases your risk of falls</span></li>
                <li><span>Lowers your risk of injury</span></li>
            </ul>
            <button className='btn_start'>
                <a href="https://www.youtube.com/watch?v=fJRPlJdWitM" target="_blank" rel="noreferrer">START</a>
            </button>
        </div>

        </div>
    )
}

export default TabTwo;