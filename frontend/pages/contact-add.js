import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import {ContactManagementHeader } from '../widgets';
import TelephoneInput from '../components/TelephoneInput';
import { useEffect, useState } from 'react'
import { getMessage } from '../helpers/lang';
import { isEmpty } from '../helpers/isEmpty';
import { parseCookies, setCookie } from "nookies";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const ContactAdd = ({styleClassNames, onSave, contactData, setContactData, errors, setErrors, props}) => {
  const onChangeHandler = (e) => {
    setErrors({});
    if(e.target?.type === "checkbox")
      setContactData(prevData => ({...prevData, [e.target.name]: e.target.checked}));
    else
      setContactData(prevData => ({...prevData, [e.target.name]: e.target.value}));
  }

  const onSubmitHandler = () => {
    onSave({
      where: 'contact',
      data: contactData
    });
  }

  const onDeleteHandler = () => {
    // contactData.email = "";
    Object.keys(contactData).forEach(key => {
      if(key === "contact_type")
        setContactData(prevData => ({...prevData, ["contact_type"]: "all"}))
      else if(key === "salutation")
        setContactData(prevData => ({...prevData, ["salutation"]: "mrs"}))
      else{
        setContactData(prevData => ({...prevData, [key]: ""}))
      }
    });
  }
  return (
    <div className={`${styleClassNames} main-content`}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={12} xl={12}>
            <form>
              <Row>
                {/* General */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>{getMessage('General')}</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Contact type')}</Form.Label>
                      <Form.Control as="select" className='mb-4' name="contact_type" value={contactData?.contact_type} onChange={onChangeHandler} placeholder={getMessage('Choose the contact type.')}>
                            <option value="all">{getMessage('All')}</option>
                            <option value="contact">{getMessage('Contact')}</option>
                            <option value="workshop">{getMessage('Workshop')}</option>
                            <option value="insurance">{getMessage('Insurance')}</option>
                            <option value="lawyer">{getMessage('Lawyer')}</option>
                        </Form.Control>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Salutation')}</Form.Label>
                      <Form.Control as="select" className='mb-4' placeholder={getMessage('Choose the salutation.')} name="salutation" value={contactData?.salutation} onChange={onChangeHandler}>
                            <option value="mrs">{getMessage('Mrs.')}</option>
                            <option value="mr">{getMessage('Mr.')}</option>
                            <option value="mx">{getMessage('Mx.')}</option>
                            <option value="company">{getMessage('Company')}</option>
                        </Form.Control>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Title')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Title')} name="title" onChange={onChangeHandler} value={contactData?.title} />
                    </div>
                  </Col>
                  {
                    contactData?.salutation !== "company" &&
                    <Col xs={12}>
                      <Row>
                        <Col xs={`${contactData?.salutation !== "company" ? '6' : '12'}`} >
                          <div className="form-group">
                            <Form.Label>{getMessage('Firstname')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Firstname')} name="firstname" onChange={onChangeHandler} value={contactData?.firstname}/>
                          </div>
                        </Col>
                        <Col xs={6} className={`${contactData?.salutation !== "company" ? 'd-block' : 'd-none'}`}>
                          <Col xs={12}>
                            <div className="form-group">
                              <Form.Label>{getMessage('Surname')}</Form.Label>
                              <Form.Control type="text" placeholder={getMessage('Surname')} name="surname" onChange={onChangeHandler} value={contactData?.surname}/>
                            </div>
                          </Col>
                          <p xs={12} className="text-danger">
                            {errors.contact?.surname}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  }

                  <Col xs={12} className={`${contactData?.salutation === "company" ? 'd-block' : 'd-none'}`}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Company')}</Form.Label>
                      <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the company')} minRows={3} name="company" onChange={onChangeHandler} 
                      value={contactData.contact?.company}/>
                    </div>
                    <p className="text-danger">
                      {errors.contact?.company}
                    </p>
                  </Col>

                </Col>

                {/* Contact */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>{getMessage('contact')}</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Email')}</Form.Label>
                      <Form.Control type="email" placeholder={getMessage('Email')} name="email" onChange={onChangeHandler} value={contactData?.email}/>
                    </div>
                    {/* <div className='text-danger'>
                        {errors?.email}
                      </div> */}
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Website')}</Form.Label>
                      <Form.Control className="mb-3" type="text" placeholder={getMessage('Website')} name="website" onChange={onChangeHandler} value={contactData?.website}/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Telephone')}</Form.Label>
                      <TelephoneInput className="mb-3" phone={contactData?.telephone} setTelCountry = {(e) => setContactData(prevData => ({...prevData, ["telCountry"]: e})) } setPhone={(e) => setContactData(prevData => ({...prevData, ["telephone"]: e}))} />
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('The mobile phone number')}</Form.Label>
                      <TelephoneInput className="mb-3" phone={contactData?.mobile_phone_number} setTelCountry = {(e) => setContactData(prevData => ({...prevData, ["mobileCountry"]: e})) } setPhone={(e) => setContactData(prevData => ({...prevData, ["mobile_phone_number"]: e}))}/>
                    </div>
                  </Col>
                </Col>

                {/* Address */}
                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>{getMessage('Address')}</h2>
                    </div>
                  </Col>
                  
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Country')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Country')} name="country" onChange={onChangeHandler} value={contactData?.country}/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Zip')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Zip')} name="zip" onChange={onChangeHandler} value={contactData?.zip}/>
                      {/* <p className='text-danger'>{errors?.zip}</p> */}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('City')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('City')} name="city" onChange={onChangeHandler} value={contactData?.city}/>
                      {/* <p className='text-danger'>{errors?.city}</p> */}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Street, No')}</Form.Label>
                      <Form.Control type="text" placeholder={getMessage('Street, No')} name="street_no" onChange={onChangeHandler} value={contactData?.street_no}/>
                      {/* <p className='text-danger'>{errors?.street_no}</p> */}
                    </div>
                  </Col>
                </Col>

                <Col xs={12} md={6} xl={4}>
                  <Col xs={12}>
                    <div className="form-group">
                      <h2>{getMessage('Miscellaneous')}</h2>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="form-group">
                      <Form.Label>{getMessage('Comment')}</Form.Label>
                      <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the comment')} minRows={3} name="comment" onChange={onChangeHandler} value={contactData?.comment} />
                    </div>
                  </Col>
                </Col>
              </Row>
              
              <Row className="justify-content-between">
                <Col xs={12} md={6} className="col-12 col-md-6">
                  <Button variant="danger" onClick={onDeleteHandler}>{getMessage('Delete')}</Button>
                </Col>
                <Col xs="auto">
                  <Button onClick={onSubmitHandler}>{getMessage('Save')}</Button>
                </Col>
              </Row>
            </form>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  // if user is authenticated, continue with normal page rendering
  const cookies = parseCookies(context);
  const token = cookies.token;

  if (!token) {
      return {
          redirect: {
            destination: '/sign-in',
            permanent: false,
          },
        };
  }

  return {
    props: {},
  };
}

export default ContactAdd