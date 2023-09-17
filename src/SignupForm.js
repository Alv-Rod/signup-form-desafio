import React, {useState} from "react";
import { useSignupContext } from "./Context";

function SignupForm() {
    const {formData, updateFormData, setSubmitted, setDisplayed} = useSignupContext();
    const [errorMessage, setErrorMessage] = useState('');

    const requiredFields = ['username', 'email', 'password', 'passwordConfirm'];

    const handleChange = (event) => {
        const {name, value} = event.target;
        updateFormData(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const hasEmptyFields = requiredFields.some(field => formData[field] === undefined || formData[field] === '');
        

        if (hasEmptyFields) {
            setErrorMessage('Preencha todos os campos')
            return
        }
        
        if (formData['passwordConfirm'] !== formData['password']) {
            setErrorMessage('Senhas não conferem')
            return
        }
        
        setErrorMessage('')
        setDisplayed(true)
        setSubmitted(true);
    }

    return (
        <>
            <form>
                <input type="text" name="username" id="username" placeholder="Nome de usuário" onChange={handleChange}/>
                <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleChange}/>
                <input type="password" name="password" id="password" placeholder="Senha" onChange={handleChange}/>
                <input type="password" name="passwordConfirm" id="password-confirm" placeholder="Confirmar Senha" onChange={handleChange}/>
                {errorMessage && <strong className="error-message">{errorMessage}</strong> }
            </form>
                <button type="button" id="signup-btn" onClick={handleSubmit}>Cadastrar</button>
        </>
    )
}

export default SignupForm