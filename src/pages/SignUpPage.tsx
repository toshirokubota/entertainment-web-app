import React, { useState } from "react";
import { staticAsset, isEmail } from "../libs";

export default function SignUpPage({setLogged, setNeedSignup}: 
    {
        setLogged: React.Dispatch<React.SetStateAction<boolean>>,
        setNeedSignup: React.Dispatch<React.SetStateAction<boolean>>
    }): React.JSX.Element {

        const [formData, setFormData] = useState({
            email: '',
            password: '',
            passwordRepeated: '',
          });
        const [emailError, setEmailError] = useState(false);
        const [passwordError, setPasswordError] = useState(false);
        const [passwordRepeatError, setPasswordRepeatError] = useState(false);
        const [alreadyExistError, setAlreadyExistError] = useState(false);
        
        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.key === 'Enter' || event.key === 'Space'){
                setNeedSignup(false); 
                setLogged(false);
            }
        }
        
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            console.log(name, value);
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
            } else {
                const user = localStorage.getItem(formData.email);
                if(user) {
                    valid = false;
                    setAlreadyExistError(true);
                }
            }
            if(formData.password.length === 0) {
                setPasswordError(true);
                valid = false;
            }
            if(formData.password !== formData.passwordRepeated) {
                setPasswordRepeatError(true);
                valid = false;
            }
            if(valid) {
                console.log('Form data submitted:', formData);
                localStorage.setItem(formData.email, formData.password);
                setNeedSignup(false);
                setLogged(false);
            }
        };

    return (
        <div className="signup-page">
            <img src={staticAsset('/assets/logo.svg')} alt='logo'/>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input type='email' placeholder="Email address" id='email' name='email' 
                        className={emailError ? 'error-input': ''}
                        value={formData.email} onChange={handleChange} onFocus={()=>setEmailError(false)}/>
                    {emailError && <span className='error-msg'>Input a valid Email address</span>}
                    {alreadyExistError && <span className='error-msg'>The account already exists</span>}
                    </label>
                <label htmlFor="password">
                <input type='password' placeholder="Password" id='password' name='password' 
                    className={passwordError ? 'error-input': ''}
                    value={formData.password} onChange={handleChange} 
                    onFocus={()=>{setPasswordError(false); setPasswordRepeatError(false);}}/>
                    {passwordError && <span className='error-msg'>Cannot be empty</span>}
                </label>
                <label htmlFor="password-repeat">
                <input type='password' placeholder="Repeat Password" id='password-repeat' name='passwordRepeated' 
                    className={passwordRepeatError ? 'error-input': ''}
                    value={formData.passwordRepeated} onChange={handleChange} onFocus={()=>setPasswordRepeatError(false)}/>
                    {passwordRepeatError && <span className='error-msg'>Repeat the password above</span>}
                </label>
                <button>Create an account</button>
            </form>
            <p>Already have an account? 
                <span className='sign-up' onClick={()=>{setNeedSignup(false); setLogged(false);}} tabIndex={0}
                    onKeyDown={handleKeyDown} 
                >
                    Login
                </span>
            </p>
            
        </div>
    )
}
