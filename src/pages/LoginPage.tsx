import React, { useState } from "react";
import { staticAsset } from "../libs";

export default function LoginPage({setLogged, setSignUp}: 
    {
        setLogged: React.Dispatch<React.SetStateAction<boolean>>,
        setSignUp: React.Dispatch<React.SetStateAction<boolean>>
    }): React.JSX.Element {

        const [formData, setFormData] = useState({
            email: '',
            password: '',
          });
        
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        };
        
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log('Form data submitted:', formData);
            // Handle form submission logic here (e.g., sending data to an API)
        };
                
    return (
        <div className="login-page">
            <img src={staticAsset('/assets/logo.svg')} alt='logo'/>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder="Email address" id='email' value={formData.email} onChange={handleChange}/>
                <label htmlFor="email"></label>
                <input type='password' placeholder="Password" id='password' value={formData.password} onChange={handleChange}/>
                <label htmlFor="password"></label>
                <button>Login to your account</button>
            </form>
            <p>Don't have an account? <span className='sign-up' onClick={()=>setSignUp(true)}>Sign Up</span></p>
        </div>
    )
}