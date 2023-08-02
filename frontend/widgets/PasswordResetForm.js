import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { getMessage } from '../helpers/lang';
import { isEmpty } from '../helpers/isEmpty';

export default function PasswordResetForm() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const emailRegex = /^\S+@\S+\.\S+$/;

  const resetPassword = () => {
    const errors = onValidateError();
    setError(errors);
    if(!isEmpty(errors))
      return;
    setLoading(true);
    setLoading(false);
  }

  const onKeyPressHandler = (e) => {
    if(e.key === "Enter")
      resetPassword();
  }

  const onValidateError = () => {
    let error = {};
    if(!emailRegex.test(email))
      error.email = "Please insert the valid email";
    if(email.length === 0)
      error.email = "Please insert the email";
    return error;
  }

  return (
    <>
      <Row className='d-flex justify-content-center'>
        <img alt='no image' src="img/head-logo.png" className='mb-4 w-75'></img>
      </Row>
      <h1 className="display-4 text-center mb-3">{getMessage('Password reset')}</h1>
      <p className="text-muted text-center mb-5">{getMessage('Enter your email to get a password reset link')}</p>
      <div>
        <div className="form-group mb-0">
          <Form.Label>{getMessage('Email Address')}</Form.Label>
          <Form.Control type="email" placeholder="name@address.com" onKeyPress={onKeyPressHandler} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='text-danger mt-1'>
          {error.email}
        </div>
        <Button size="lg" className="w-100 mb-3 d-flex align-items-center justify-content-center mt-3" onClick={resetPassword}>
          <Spinner animation="border" size="sm" className={`${loading ? 'd-block' : 'd-none'} `} />
          &nbsp;&nbsp;
          {getMessage('Reset Password')}
          &nbsp;&nbsp;
        </Button>
        <p className="text-center">
          <small className="text-muted text-center">
            {getMessage('Remember your password')}?{' '}
            <Link href="/sign-in">{getMessage('Sign in')}</Link>
            .
          </small>
        </p>
      </div>
    </>
  );
}
