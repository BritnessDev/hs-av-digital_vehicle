import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { setLogin, loginFetch, setLoading } from '../features/auth/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../helpers/lang';
import { parseCookies, setCookie } from "nookies";
import Image from 'react-bootstrap';

import { toast } from 'react-toastify';

export default function SignInForm() {
  const router = useRouter();
  const dispatch = useDispatch()
  const emailRef = useRef();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, errors, isFetching, isSuccess, isError, successMessage, errorMessage } = useSelector(state => state.login)
  const [eyeMode, setEyeMode] = useState(false);

  useEffect (() => {
    if(login.email != "")
      console.log('passing data', login);
  }, [login])

  const handleLoginProcess = async () => {
    dispatch(setLoading())

    await dispatch(setLogin({email: email, password: password}));
    const loginResult = await dispatch(loginFetch({email: email, password: password}))

    if(loginResult?.payload?.token) {
        // toast
        toast.success("Login Successfully", {autoClose: 2000});

        console.log('redirecting');
        router.push('/addresses');
    } else {
        toast.error(getMessage("Login Failed"), {autoClose: 2000});
    }
  }

  const keyPressHandler = (e) => {
    if(e.key === "Enter")
      handleLoginProcess();
  }

  return (
    <>
    <Row className='d-flex justify-content-center'>
      <img alt='no image' src="img/head-logo.png" className='mb-4 w-75'></img>
    </Row>
    <h1 className="display-4 text-center mb-3">{getMessage('Sign in')}</h1>
    {/* <p className="text-muted text-center mb-5">{getMessage('Free access to our dashboard')}</p> */}
    <form>
          <div className="form-group">
            <Form.Label>{getMessage('Email Address')}</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@address.com" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }} 
              onKeyPress={keyPressHandler}
              autoComplete="off"
              />
          </div>
          <div className="form-group">
            <Row>
              <Col>
                <Form.Label>{getMessage('Password')}</Form.Label>
              </Col>
              {/* <Col xs="auto">
                <Form.Text 
                  as={Link} 
                  className="small text-muted" 
                  href="/password-reset"
                  >
                  {getMessage('Forgot password')}
                </Form.Text>
              </Col> */}
            </Row>
            <InputGroup className="input-group-merge">
              <Form.Control 
                  type={`${!eyeMode ? 'password' : 'text'}`} 
                  placeholder={getMessage('Enter your password')} 
                  value={password}
                  onChange={(e) =>{ 
                    setPassword(e.target.value)
                  }}
                  onKeyPress={keyPressHandler}
                  autoComplete="off"
                />
              <InputGroup.Text onClick={() => setEyeMode(!eyeMode)}>
                <FeatherIcon icon="eye" size="1em" />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <Button 
            size="lg" 
            className="w-100 mb-3 d-flex align-items-center justify-content-center"
            onClick={() => handleLoginProcess()}
            >
            <Spinner animation="border" size="sm" className={`${isFetching ? 'd-block' : 'd-none'} `} /> &nbsp;&nbsp; {getMessage('Sign in')} &nbsp;&nbsp;
          </Button>   
          <p className="text-left">
            <small className="text-muted text-left text-dark">
              <Link href="/password-reset" className='text-dark hover:text-primary'>{getMessage('Forgot password')}</Link>.
            </small>
          </p>
    </form>  
    </>
  );
}
