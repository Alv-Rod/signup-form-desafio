import React, {useContext, createContext, useState} from "react";

const SignupContext = createContext();

export const useSignupContext = () => {
    return useContext(SignupContext);
}

export const SignupProvider = ({children}) => {
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [displayed, setDisplayed] = useState(false);

    const updateFormData = (name, value) => {
        setFormData({...formData, [name]: value});
    }

    const clearFormData = () => {
        setFormData({});
        setSubmitted(false)
        setDisplayed(false)
    }

    const contextValue = {
        formData,
        updateFormData,
        submitted,
        setSubmitted,
        displayed,
        setDisplayed,
        clearFormData
    }

    return (
        <SignupContext.Provider value={contextValue}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupProvider