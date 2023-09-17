import './App.css';
import SignupForm from './SignupForm';
import { FormDisplay, CallToAction } from './FormDisplay';
import { useSignupContext } from './Context';

function App() {
    const {displayed} = useSignupContext();

    return (
        <main>
            <div>
                <div className='step-heading'>
                    <h1 className={`signup-heading ${displayed ? 'display-visible' : ''}`}>Sign up</h1>
                    <h1 className={`display-heading ${displayed ? 'display-visible' : ''}`}>Confirmar</h1>
                </div>
                <div className={`main-container ${displayed ? 'display-visible' : ''}`}>
                    <div className={`signup-container ${displayed ? 'display-visible' : ''}`}>
                        <h1>Faça sua conta agora!</h1>
                        <SignupForm/>
                    </div>
                    <div className={ `display-container ${displayed ? 'display-visible' : ''}`}>
                        <h1>Confirme seus dados:</h1>
                        <FormDisplay/>
                    </div>
                    <div className={`cta-placeholder ${displayed ? 'not-visible' : ''}`}>
                        <CallToAction/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App;
