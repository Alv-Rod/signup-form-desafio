import React from "react";
import { useSignupContext } from "./Context";


function FormDisplay() {
    const {formData, clearFormData, submitted} = useSignupContext();

    const FormClear = () => {
        clearFormData();
        document.getElementById('username').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('password-confirm').value = ''
        console.log(formData)
    }

    return (
        <>
            <input type="text" value={submitted ? formData.username : ''} disabled />
            <input type="email" value={submitted ? formData.email : ''} disabled />
            <input type="password" value={submitted ? formData.password : ''} disabled />
            <button type="button" id="clear-btn" onClick={FormClear}>Limpar</button>
        </>
    )
}

function CallToAction() {
    return (
        <h1>
            Bem vindo.
            <br />
            Comece sua jornada
            <br />
            com um clique
        </h1>
    )
}

export {FormDisplay, CallToAction}