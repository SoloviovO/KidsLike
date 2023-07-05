import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logInUser, registerUser } from 'redux/Auth/AuthOperations';

import {
  FormBox,
  FormButton,
  FormInputEmail,
  FormInputPassword,
  FormLabel,
  FormTitle,
  FormValidError,
  LabelRequired,
  PageForm,
  PageTitle,
} from './AuthForm.stuled';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const user = {
    email: email,
    password: password,
  };

  const handleLogIn = async () => {
    try {
      await dispatch(logInUser(user)).unwrap();
      toast.success('Congratulations !!!');
    } catch (error) {
      toast.error(error);
    }
    setEmail('');
    setPassword('');
  };

  const handleRegistration = async () => {
    try {
      await dispatch(registerUser(user)).unwrap();
      toast.success('Congratulations !!!');
    } catch (error) {
      toast.error(error);
    }

    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        setEmailError(validateEmail(value));
        break;
      case 'password':
        setPassword(value);
        setPasswordError(validatePassword(value));
        break;
      default:
        return;
    }
  };

  const validateEmail = email => {
    if (!email) {
      return 'Email is required';
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    ) {
      return 'Email is not valid';
    } else {
      return '';
    }
  };

  const validatePassword = password => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 8) {
      return 'Password should be at least 8 characters long';
    } else if (password.length > 100) {
      return 'Password should be at most 100 characters long';
    } else {
      return '';
    }
  };

  return (
    <>
      <FormBox>
        <PageTitle>Do your homework, get some great prizes!</PageTitle>
        <PageForm>
          <FormTitle>
            Log in with e-mail and password after registering:
          </FormTitle>
          <FormLabel>
            <div>
              <LabelRequired>*</LabelRequired>
              Email:
            </div>
            <FormInputEmail
              placeholder="your@email.com
            "
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              required
            />
            {emailError && <FormValidError>{emailError}</FormValidError>}
          </FormLabel>
          <FormLabel>
            <div>
              <LabelRequired>*</LabelRequired>
              Password:
            </div>
            <FormInputPassword
              placeholder="••••••••"
              onChange={handleChange}
              value={password}
              type="password"
              name="password"
              required
            />
            {passwordError && <FormValidError>{passwordError}</FormValidError>}
          </FormLabel>
          <FormButton type="button" onClick={handleLogIn}>
            Log In
          </FormButton>
          <FormButton type="button" onClick={handleRegistration}>
            Register
          </FormButton>
        </PageForm>
      </FormBox>
    </>
  );
};

export default AuthForm;
