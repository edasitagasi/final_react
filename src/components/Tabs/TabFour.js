import pilates from '../../assets/pilates.jpg';
import '../../App.css';

const TabFour = () => {
    return(
        <div className='tab_main_container'>
        <div>
            <img src={pilates} alt="pic" className='tab_pic' />
        </div>

        <div className='tab_text_container'>
            <h2 className='tab_title'>Pilates - health benefits:</h2>
            <ul>
                <li><span>Improved stabilisation of your spine</span></li>
                <li><span>Improved concentration</span></li>
                <li><span>Stress management and relaxation</span></li>
                <li><span>Enhanced muscular control of your back and limbs</span></li>
                <li><span>Improved posture</span></li>
                <li><span>Improved flexibility</span></li>
            </ul>
            <button className='btn_start'>
                <a href="https://www.youtube.com/watch?v=NyP_waVgL1w" target="_blank" rel="noreferrer">START</a>
            </button>
        </div>

        </div>
    )
}

export default TabFour;