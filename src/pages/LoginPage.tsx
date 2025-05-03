import React, { useState } from "react";
import { staticAsset, isEmail } from "../libs";

export default function LoginPage({setLogged, setNeedSignup}: 
    {
        setLogged: React.Dispatch<React.SetStateAction<boolean>>,
        setNeedSignup: React.Dispatch<React.SetStateAction<boolean>>
    }): React.JSX.Element {

        const [formData, setFormData] = useState({
            email: '',
            password: '',
          });
        const [emailError, setEmailError] = useState(false);
        const [passwordError, setPasswordError] = useState(false);
        const [passwordMismatch, setPasswordMismatch] = useState(false);
        
        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.key === 'Enter' || event.key === 'Space'){
                setNeedSignup(true);
            }
        }

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            //console.log(name, value);
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        };
        
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            let valid = true;
            if(!isEmail(formData.email)) {
                setEmailError(true);
                valid = false;
            }
            if(formData.password.length === 0) {
                setPasswordError(true);
                valid = false;
            }
            if(valid) {
                console.log('Form data submitted:', formData);
                const value = localStorage.getItem(formData.email);
                if(value && value === formData.password) {
                    setLogged(true);
                } else {
                    setPasswordMismatch(true);
                }
            }
        };
                
    return (
        <div className="login-page">
            <img src={staticAsset('/assets/logo.svg')} alt='logo'/>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input type='email' placeholder="Email address" id='email' name='email' 
                        className={emailError ? 'error-input': ''}
                        value={formData.email} onChange={handleChange} onFocus={()=>setEmailError(false)}/>
                    {emailError && <span className='error-msg'>Input a valid Email address</span>}
                </label>
                <label htmlFor="password">
                <input type='password' placeholder="Password" id='password' name='password' 
                    className={passwordError ? 'error-input': ''}
                    value={formData.password} onChange={handleChange} onFocus={()=>setPasswordError(false)}/>
                    {passwordError && <span className='error-msg'>Cannot be empty</span>}
                </label>
                <button>Login to your account</button>
                {passwordMismatch && <span className='error-msg'>Password does not match.</span>}
            </form>
            <p>Don't have an account? 
                <span className='sign-up' onClick={()=>setNeedSignup(true)} 
                    onKeyDown={handleKeyDown} 
                    tabIndex={0}>
                    Sign Up
                </span>
            </p>
        </div>
    )
}