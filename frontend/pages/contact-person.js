import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import { ContactManagementHeader } from '../widgets';
import TelephoneInput from '../components/TelephoneInput';
import { useEffect, useState } from 'react'
import { getMessage } from '../helpers/lang';
import { isEmpty } from '../helpers/isEmpty';

export default function ContactPerson({styleClassNames, onSave, contactData, setContactData, errors, setErrors}) {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    setPersons(contactData)
  }, [contactData])

  const onChangeHandler = (e, index) => {
    setErrors([]);
    if (e.target?.type === "checkbox")
      setContactData((prevData) => [...prevData.slice(0, index), { ...prevData[index], [e.target.name]: e.target.checked },
        ...prevData.slice(index + 1),
      ]);
    else
      setContactData((prevData) => [...prevData.slice(0, index), { ...prevData[index], [e.target.name]: e.target.value },
        ...prevData.slice(index + 1),
      ]);
  };

  const onClickAddNewPerson = () => {
    let temp = [...persons];
    temp.push([])
    contactData.push({
      salutation: "mrs"
    })
    setPersons(temp);
  }

  const onDeletePerson = (key) => {
    let temp = [...persons];
    temp.splice(key, 1);
    contactData.splice(key, 1);
    setPersons(temp);
  }

  const onSubmitHandler = () => {
    onSave({
      where: 'contact-person',
      data: contactData
    });
  }

  return (
    <div className={`${styleClassNames} main-content`}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={12} xl={12}>
            <form>
              {
                persons.map((person, key) => {
                  return (
                    <Row key={key}>
                      {/* General */}
                      <Col xs={12} md={6} xl={4}>
                        <Col xs={12}>
                          <div className="form-group">
                            <h2>{getMessage("General")}</h2>
                          </div>
                        </Col>

                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage("Salutation")}</Form.Label>
                            <Form.Control as="select" className='mb-4' placeholder={getMessage('Choose the salutation.')} name="salutation" value={contactData[key]?.salutation} onChange={(e) => onChangeHandler(e, key)}>
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
                            <Form.Control type="text" placeholder={getMessage('Title')} name="title" value={contactData[key]?.title} onChange={(e) => onChangeHandler(e, key)}/>
                          </div>
                        </Col>
                        {
                          contactData[key].salutation !== "company" &&
                          <Col xs={12}>
                            <Row>
                              <Col xs={`${contactData[key].salutation !== "company" ? '6' : '12'}`} >
                                <div className="form-group">
                                  <Form.Label>{getMessage('Firstname')}</Form.Label>
                                  <Form.Control type="text" placeholder={getMessage('Firstname')} name="firstname" value={contactData[key]?.firstname} onChange={(e) => onChangeHandler(e, key)}/>
                                </div>
                              </Col>
                              <Col xs={6} className={`${contactData[key].salutation !== "company" ? 'd-block' : 'd-none'}`}>
                                <div className="form-group">
                                  <Form.Label>{getMessage('Surname')}</Form.Label>
                                  <Form.Control type="text" placeholder={getMessage('Surname')} name="surname" value={contactData[key]?.surname} onChange={(e) => onChangeHandler(e, key)}/>
                                </div>
                                <div className='text-danger'>
                                  {errors.contactPerson?.[key]?.surname}
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        }

                        <Col xs={12} className={`${contactData[key].salutation === "company" ? 'd-block' : 'd-none'}`}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Company')}</Form.Label>
                            <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the company')} minRows={3} name="company" value={contactData[key]?.company} onChange={(e) => onChangeHandler(e, key)}/>
                          </div>
                          <div className='text-danger'>
                            {errors.contactPerson?.[key]?.company}
                          </div>
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
                            <Form.Control type="email" placeholder={getMessage('Email')} name="email" value={contactData[key]?.email} onChange={(e) => onChangeHandler(e, key)}/>
                          </div>
                          {/* <div className='text-danger'>
                              {errors[key]?.email}
                          </div> */}
                        </Col>
                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Website')}</Form.Label>
                            <Form.Control className="mb-3" placeholder={getMessage('Website')} name="website" value={contactData[key]?.website} onChange={(e) => onChangeHandler(e, key)}/>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Telephone')}</Form.Label>
                            <TelephoneInput
                              className="mb-3"
                              phone={contactData[key]?.telephone} 
                              setTelCountry = {(e) => setContactData((prevData) => [...prevData.slice(0, key), { ...prevData[key], ["telCountry"]: e },
                                ...prevData.slice(key + 1),
                              ])}
                              setPhone={(e) => setContactData((prevData) => [...prevData.slice(0, key), { ...prevData[key], ["telephone"]: e },
                              ...prevData.slice(key + 1),
                            ])}/>
                          </div>
                        </Col>

                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('The mobile phone number')}</Form.Label>
                            <TelephoneInput
                              className="mb-3"
                              phone={contactData[key]?.mobile_phone_number}
                              setTelCountry = {(e) => setContactData((prevData) => [...prevData.slice(0, key), { ...prevData[key], ["mobileCountry"]: e },
                              ...prevData.slice(key + 1),
                            ])}
                              setPhone={(e) => setContactData((prevData) => [...prevData.slice(0, key), { ...prevData[key], ["mobile_phone_number"]: e },
                              ...prevData.slice(key + 1),
                            ])}/>
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
                            <Form.Control type="text" placeholder={getMessage('Country')} name="country" onChange={(e) => onChangeHandler(e, key)} value={contactData[key]?.country} />
                          </div>
                        </Col>
                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Zip')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Zip')} name="zip" onChange={(e) => onChangeHandler(e, key)} value={contactData[key]?.zip}/>
                          </div>
                          {/* <div className='text-danger'>
                            {errors[key]?.zip}
                          </div> */}
                        </Col>
                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('City')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('City')} name="city" onChange={(e) => onChangeHandler(e, key)} value={contactData[key]?.city}/>
                            {/* <div className='text-danger'>
                              {errors[key]?.city}
                            </div> */}
                          </div>
                        </Col>
                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Street, No')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Street, No')} name="street_no" onChange={(e) => onChangeHandler(e, key)} value={contactData[key]?.street_no}/>
                          </div>
                          {/* <div className='text-danger'>
                            {errors[key]?.street}
                          </div> */}
                        </Col>
                      </Col>

                      <Col xs={12} md={6} xl={4}>
                        <Col xs={12}>
                          <div className="form-group">
                            <h2>{getMessage('Miscellaneous')}</h2>
                          </div>
                        </Col>


                        {/* <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Versicherungsscheinnummer')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Please write the Versicherungsscheinnummer."')} />
                          </div>
                        </Col>

                        
                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Schadennummer')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Please write the Schadennummer.')} />
                          </div>
                        </Col> */}

                        <Col xs={12}>
                          <div className="form-group">
                            <Form.Label>{getMessage('Comment')}</Form.Label>
                            <Form.Control as={TextareaAutosize} placeholder={getMessage('Please write the comment')} minRows={3} name="comment" onChange={(e) => onChangeHandler(e, key)} value={contactData[key]?.comment}/>
                          </div>
                        </Col>

                      </Col>

                      <Row>
                        <Col>
                          <InputGroup className="input-group-merge mb-3" style={{width: 'fit-content', float: 'right'}}>
                              <InputGroup.Text className='bg-warning'>
                                  <FeatherIcon icon="trash" size="1em" className='text-white' />
                              </InputGroup.Text>
                              <Button className='btn btn-warning text-white' onClick={() => onDeletePerson(key)}>{getMessage('Delete')}</Button>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className='mt-5 mb-2'>
                        <hr />
                      </Row>
                    </Row>
                  )
                })
              }

              <Row>
                <Col>
                    <Button className='btn btn-success' onClick={() => onClickAddNewPerson()}>{getMessage('New contact person')}</Button>
                </Col>
              </Row>

              <Row className='mt-3 mb-3'>
                <hr />
              </Row>

              <Row className="justify-content-between mt-2">
                <Col xs={12} md={6} className="col-12 col-md-6">
                  <Button variant="danger">
                    {getMessage('Abort')}
                  </Button>
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
