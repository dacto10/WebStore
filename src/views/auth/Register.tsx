import { useState } from 'react';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../..';
import logo from '../../assets/icons/logo.svg';
import { IRegister } from '../../utils/types';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const [register, setRegister] = useState<IRegister>({username: "", password: "", email: ""});

    const handleRegisterChange = (value: string, field: 'username' | 'password' | 'email') => {
        setRegister(state => ({
            ...state,
            [field]: value 
        }))
    }

    const handleBack = () => {
        navigate('/login');
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const { data, status } = await axiosInstance.post("/user", {
                ...register
            });
            console.log(data)
            console.log(status)
            navigate('/login');
        } catch(err) {
            console.log(err)
        }
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={e => handleRegister(e)}>
                <div className="login__logo">
                    <img src={ logo } alt="" />
                    <span>Register</span>
                </div>
                <div className="field">
                    <p>Username: </p>
                    <input type="text" required value={register.username} onChange={e => handleRegisterChange(e.target.value, 'username')}/>
                </div>
                <div className="field">
                    <p>Email: </p>
                    <input type="email" required value={register.email} onChange={e => handleRegisterChange(e.target.value, 'email')}/>
                </div>
                <div className="field">
                    <p>Password: </p>
                    <input type="password" required value={register.password} onChange={e => handleRegisterChange(e.target.value, 'password')}/>
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