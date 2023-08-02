import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import TelephoneInput from '../components/TelephoneInput';
import { useState, useEffect } from 'react'
import { getMessage } from '../helpers/lang';
import { LoadButton } from '../components/LoadButton';

export default function LawyerDataPart ({pdfData, setPdfData, setAddContactModal}) {
    const [countries, setCountries] = useState([]);

    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, lawyer: {
                ...prevData.lawyer,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, lawyer: {
            ...prevData.lawyer,
            [e.target.id]: e.target.value
        }}));
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data.map(country => country.name.common)))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className="main-content">
            <Container fluid>
                <Row className="justify-content-center">
                <Col xs={12} lg={12} xl={12}>
                    <form>
                    <Row className='justify-content-end'>
                    <LoadButton setAddContactModal={setAddContactModal}/>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                        <Col xs={12}>
                            <div className="form-group">
                            <h2>{getMessage('General')}</h2>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <div className="form-group">
                                <Form.Label htmlFor="salutation">{getMessage('Salutation')}</Form.Label>
                                <Form.Control as="select" id="salutation" value={pdfData.lawyer?.salutation} onChange={onChangeHandler}>
                                    <option value="Mrs">{getMessage('Mrs.')}</option>
                                    <option value="Mr">{getMessage('Mr.')}</option>
                                    <option value="Mx">{getMessage('Mx.')}</option>
                                    <option value="Company">{getMessage('Company.')}</option>
                                </Form.Control>
                            </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Title')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Title')} id="title"
                                value={pdfData.lawyer?.title} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        {
                            pdfData.lawyer?.salutation !== "Company" &&
                            <Col xs={12}>
                            <Row>
                                <Col xs={`${pdfData.lawyer?.salutation !== "Company" ? '6' : '12'}`} >
                                <div className="form-group">
                                    <Form.Label>{getMessage('Firstname')}</Form.Label>
                                    <Form.Control type="text" placeholder={getMessage('Firstname')}
                                    id="firstname" value={pdfData.lawyer?.firstname} onChange={onChangeHandler}/>
                                </div>
                                </Col>
                                <Col xs={6} className={`${pdfData.lawyer?.salutation !== "Company" ? 'd-block' : 'd-none'}`}>
                                <div className="form-group">
                                    <Form.Label>{getMessage('Surname')}</Form.Label>
                                    <Form.Control type="text" placeholder={getMessage('Surname')}
                                    id="surname" value={pdfData.lawyer?.surname} onChange={onChangeHandler} />
                                </div>
                                </Col>
                            </Row>
                            </Col>
                        }

                        <Col xs={12} className={`${pdfData.lawyer?.salutation === "Company" ? 'd-block' : 'd-none'}`}>
                            <div className="form-group">
                                <Form.Label htmlFor="company">{getMessage('The name of the company')}</Form.Label>
                                <Form.Control id="company" placeholder={getMessage('Enter a company name')} type="text" value={pdfData.lawyer?.company} onChange={onChangeHandler} />
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
                            <Form.Control type="email" placeholder={getMessage('Email')}
                            id="email" value={pdfData.lawyer?.email} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Website')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Website')} className='mb-3'
                                id="website" value={pdfData.lawyer?.website} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Telephone')}</Form.Label>
                            <TelephoneInput
                                phone={pdfData.lawyer?.telephone}
                                setTelCountry={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, lawyer: {
                                    ...prevData.lawyer,
                                    ["telCountry"]: e
                                    }}))}
                                }
                                setPhone={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, lawyer: {
                                    ...prevData.lawyer,
                                    ["telephone"]: e
                                    }}))
                                }}
                                />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('The mobile phone number')}</Form.Label>
                            <TelephoneInput
                                phone={pdfData.lawyer?.mobile_phone_number}
                                setTelCountry={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, lawyer: {
                                    ...prevData.lawyer,
                                    ["mobileCountry"]: e
                                    }}))}
                                }
                                setPhone={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, lawyer: {
                                    ...prevData.lawyer,
                                    ["mobile_phone_number"]: e
                                    }}))
                                }}
                                />
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
                            <Form.Control type="text" placeholder={getMessage('Country')} id="country"  value={pdfData.lawyer?.country} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Zip')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Zip')} id="zip" value={pdfData.lawyer?.zip} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('City')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('City')} id="city" value={pdfData.lawyer?.city} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Street')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Street')} id="street_no" value={pdfData.lawyer?.street_no} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        </Col>
                    </Row>
                    <h3 className="mb-4 mt-3 text-info">MISCELLANEOUS:</h3>
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                            <div className="form-group">
                                <Form.Label htmlFor="case_number">{getMessage("case_number")}</Form.Label>
                                <Form.Control id="case_number" placeholder={getMessage("enter_case_number")} type="text" value={pdfData.lawyer?.case_number} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="form-group">
                                <Form.Label htmlFor="comment">{getMessage("Comment")}</Form.Label>
                                <Form.Control
                                    as={TextareaAutosize}
                                    placeholder={getMessage("Enter a comment...")}
                                    id="comment"
                                    value={pdfData.lawyer?.comment} onChange={onChangeHandler}
                                    minRows={3}
                                />
                            </div>
                        </Col>
                    </Row>
                    </form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}