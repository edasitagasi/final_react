import yoga from '../../assets/yoga.jpg';
import '../../App.css';

const TabThree = () => {
    return(
        <div className='tab_main_container'>
        <div>
            <img src={yoga} alt="pic" className='tab_pic' />
        </div>

        <div className='tab_text_container'>
            <h2 className='tab_title'>Benefits of yoga:</h2>
            <ul>
                <li><span>Improves balance and flexibility</span></li>
                <li><span>Helps with back pain relief</span></li>
                <li><span>Can ease arthritis symptoms</span></li>
                <li><span>Benefits heart health</span></li>
                <li><span>Helps you sleep better</span></li>
                <li><span>Helps you manage stress</span></li>
            </ul>
            <button className='btn_start'>
                <a href="https://www.youtube.com/watch?v=9MazN_6wdqI" target="_blank" rel="noreferrer">START</a>
            </button>
        </div>

        </div>
    )
}

export default TabThree;