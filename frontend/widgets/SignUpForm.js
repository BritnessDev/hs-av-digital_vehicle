import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { getMessage } from '../helpers/lang';
import { setLoading, signupProcess } from '../features/auth/signupSlice';
import { setLogin, loginFetch } from '../features/auth/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../helpers/isEmpty';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_Confirmation] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { isFetching } = useSelector(state => state.signUp)
  const [eyeModePwd, setEyeModePwd] = useState(false);
  const [eyeModeCnf, setEyeModeCnf] = useState(false);

  const signupHandler = async () => {
    if(!isEmpty(isValidator()))
      return;
    dispatch(setLoading())
    
    const signupResult = await dispatch(signupProcess({email, name: firstName + " " + surname, password, password_confirmation }))
    if(signupResult.payload.success)
      {
        toast.success("Signed successfully", {autoClose: 2000});
        router.push("/sign-in");
      }
    else
      toast.error("User is already existed", {autoClose: 2000});

  }

  const isValidator = () => {
    let errors = {};
    if(firstName === "")
      errors.firstName = getMessage("Firstname is required");
    if(surname === "")
      errors.surname = getMessage("Surname is required");
    if(email === "")
      errors.email = getMessage("Email is required");
    if(password.length < 3)
      errors.password = getMessage("Password length must be 3 at least");
    if(password === "")
      errors.password = getMessage("Password is required");
    if((password !== password_confirmation))
      errors.password_confirmation = getMessage("Password must be confirmed");
    setErrors(errors);
    return errors;
  }
  return (
    <>
      <Row className='d-flex justify-content-center'>
        <img alt='no image' src="img/head-logo.png" className='mb-4 w-75'></img>
      </Row>
      <h1 className="display-4 text-center mb-3">{getMessage('Generate Account')}</h1>
      {/* <p className="text-muted text-center mb-5">{getMessage('Free access to our dashboard')}</p> */}
        <Row>
          <Col>
            <div className="form-group">
              <Form.Label>{getMessage('Firstname')}</Form.Label>
              <Form.Control type="email" placeholder="" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <Form.Label>{getMessage('Surname')}</Form.Label>
              <Form.Control type="email" placeholder="" value={surname} onChange={e => setSurname(e.target.value)} />
            </div>
          </Col>
        </Row>
        {
          (errors.firstName || errors.surname) &&
          <Row>
            <Col>
              <p className='text-danger'>{errors.firstName}</p>
            </Col>
            <Col>
              <p className='text-danger'>{errors.surname}</p>
            </Col>
          </Row>
        }
        <div className="form-group">
          <Form.Label>{getMessage('Email Address')}</Form.Label>
          <Form.Control type="email" placeholder="name@address.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        {errors.email && <p className='text-danger'>{errors.email}</p>}
        <div className="form-group">
          <Row>
            <Col>
              <Form.Label>{getMessage('Password')}</Form.Label>
            </Col>
          </Row>
          <InputGroup className="input-group-merge">
            <Form.Control type={`${!eyeModePwd ? "password" : "text"}`} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <InputGroup.Text onClick={() => setEyeModePwd(!eyeModePwd)}>
              <FeatherIcon icon="eye" size="1em" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        {errors.password && <p className='text-danger'>{errors.password}</p>}
        <div className="form-group">
            <Row>
              <Col>
                <Form.Label>{getMessage('Confirm Password')}</Form.Label>
              </Col>
            </Row>
            <InputGroup className="input-group-merge">
              <Form.Control type={`${!eyeModeCnf ? "password" : "text"}`} placeholder="Confirm your password" value={password_confirmation} onChange={e => setPassword_Confirmation(e.target.value)} />
              <InputGroup.Text onClick={() => setEyeModeCnf(!eyeModeCnf)}>
                <FeatherIcon icon="eye" size="1em" />
              </InputGroup.Text>
            </InputGroup>
        </div>
        {errors.password_confirmation && <p className='text-danger'>{errors.password_confirmation}</p>}
        <Button size="lg" className="w-100 mb-3 d-flex align-items-center justify-content-center" onClick={signupHandler}>
            <Spinner animation="border" size="sm" className={`${isFetching ? 'd-block' : 'd-none'} `} /> &nbsp;&nbsp; {getMessage('Sign up')} &nbsp;&nbsp;
        </Button>
        <p className="text-center">
          <small className="text-muted text-center">
            {getMessage('Already have an account')}? <Link href="/sign-in">{getMessage('Sign in')}</Link>.
          </small>
        </p>
    </>
  );
}
