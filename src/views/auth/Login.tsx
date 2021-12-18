import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/icons/logo.svg';
import { UserContext } from '../../context/UserContext';
import { ICredentials } from '../../utils/types';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);
    const [credentials, setCredentials] = useState<ICredentials>({username: "", password: ""});

    const handleCredentialsChange = (value: string, field: 'username' | 'password') => {
        setCredentials(state => ({
            ...state,
            [field]: value 
        }))
    }

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await setUser(credentials);
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={e => handleLogin(e)}>
                <div className="login__logo">
                    <img src={ logo } alt="" />
                    <span>WebStore</span>
                </div>
                <div className="field">
                    <p>Username: </p>
                    <input type="text" required value={credentials.username} onChange={e => handleCredentialsChange(e.target.value, 'username')}/>
                </div>
                <div className="field">
                    <p>Password: </p>
                    <input type="password" required value={credentials.password} onChange={e => handleCredentialsChange(e.target.value, 'password')}/>
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