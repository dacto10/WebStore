import { useNavigate } from 'react-router';
import logo from '../../assets/icons/logo.svg';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/login');
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleRegister}>
                <div className="login__logo">
                    <img src={ logo } alt="" />
                    <span>Register</span>
                </div>
                <div className="field">
                    <p>Username: </p>
                    <input type="text" required/>
                </div>
                <div className="field">
                    <p>Email: </p>
                    <input type="email" required/>
                </div>
                <div className="field">
                    <p>Password: </p>
                    <input type="password" required/>
                </div>
                <div className="login__options">
                    <button type="button" className="btn btn--primary" onClick={handleBack}>Back</button>
                    <button type="submit" className="btn btn--primary">Create</button>
                </div>
            </form>
        </div>
    );
}

export default Register;