import image from './assets/girl.jpg';
import './App.css';
import Slides from './Slides/Slides';

function Home() {
    return <div className='main_container'>

        <div className='text_image_container'>
            <div className='text_container'>
            <h1 className='love'>Love<br></br>means<br></br>care</h1>
        <p className='time'>It's time to take care of yourself</p>
        </div>

        <div className='image_container'>
            <img src={image} alt="girl_pic" className='girl_pic' />
        </div>
        </div>

        <div className='slide_container'>
        <Slides />
        </div>
        </div>


}

export default Home;