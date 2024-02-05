import aerobic from '../../assets/aerobic.jpg';
import '../../App.css';

const TabOne = () => {
    return(
        <div className='tab_main_container'>
        <div>
            <img src={aerobic} alt="pic" className='tab_pic' />
        </div>

        <div className='tab_text_container'>
            <h2 className='tab_title'>Aerobic activity can help you:</h2>
            <ul>
                <li><span>Keep excess pounds at bay</span></li>
                <li><span>Increase your stamina, fitness and strength</span></li>
                <li><span>Ward off viral illnesses</span></li>
                <li><span>Reduce your health risks</span></li>
                <li><span>Manage chronic conditions</span></li>
                <li><span>Boost your mood</span></li>
            </ul>
            <button className='btn_start'>
                <a href="https://www.youtube.com/watch?v=a44ayeoSfKM" target="_blank" rel="noreferrer">START</a>
            </button>
        </div>

        </div>
    )
}

export default TabOne;