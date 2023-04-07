import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './loginForm.scss'

type Props = {}

const LoginForm = (props: Props) => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);
    const navigate = useNavigate();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors},
	} = useForm({
		mode: 'all',
	});

    const onSubmit = (data: any) => {
		if (data) {
			setLoading(true);

			setTimeout(() => {
				reset();
                navigate('/dashboard');
				setLoading(false);
			}, 2000);
		}
	};

  return (
    <section className='login-form'>
        <header className='login-form_header'>
            <h2>Welcome!</h2>
            <p>Enter details to login</p>
        </header>
        <div className="loginForm_main">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='login-form_email login-form_group'>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: true,
                        })}
                    />
                    {errors.email && errors.email.type === 'required' && (
                        <span role="alert" className="login-form_input--error">
                            Please enter your email
                        </span>
                    )}
                </div>

                <div className='login-form_password login-form_group'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...register('password', {
                        required: true,
                        })}
                    />

                    <p className="login-form_password--visible" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'HIDE' : 'SHOW'}
                    </p>

                    {errors.password && errors.password.type === 'required' && (
                        <span role="alert" className="login-form_input--error">
                            Please enter your password
                        </span>
                    )}
                </div>

                <p className='login-form_password--forget'>FORGOT PASSWORD?</p>

                <button className='login-form_btn' type="submit">{loading ? 'Loading...' : 'LOG IN'}</button>
            </form>
        </div>
    </section>
  )
}

export default LoginForm