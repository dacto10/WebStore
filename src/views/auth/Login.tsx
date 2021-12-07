import { useNavigate } from 'react-router';
import logo from '../../assets/icons/logo.svg';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/');
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleLogin}>
                <div className="login__logo">
                    <img src={ logo } alt="" />
                    <span>WebStore</span>
                </div>
                <div className="field">
                    <p>Username: </p>
                    <input type="text" required/>
                </div>
                <div className="field">
                    <p>Password: </p>
                    <input type="password" required/>
                </div>
                <div className="login__options">
                    <button type="submit" className="btn btn--primary">Sign in</button>
                    <button type="button" className="btn btn--primary" onClick={handleRegister}>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Login;