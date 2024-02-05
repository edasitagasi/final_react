import './modalStyle.css';

const Content = ( {setIsOpen} ) => {
    return (<div className="modal_content">
        <p className='account'>My account</p>
        <form>
            <p className='input_par'>Username:</p> <input type="text"  placeholder='Enter your username' className='inputContent'/>
            <p className='input_par'>Password:</p> <input type="text" placeholder='Enter your password' className='inputContent'/>
        </form>
        <div className='btns_modal'>
            <button className='login'>Login</button>
            <button onClick={() => setIsOpen(false)} className='cancel'>Cancel</button>
        </div>
        <div className='line'></div>
        <div className='signUp_container'>
            <p className='noAccount'>Don't have an account?</p>
            <p className='signUp'>Sign up!</p>
        </div>
    </div>)
}

export default Content;