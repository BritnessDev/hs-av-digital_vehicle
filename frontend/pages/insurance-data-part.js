import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import TextareaAutosize from 'react-textarea-autosize';
import TelephoneInput from '../components/TelephoneInput';
import { useState, useEffect } from 'react'
import { getMessage } from '../helpers/lang';
import { LoadButton } from '../components/LoadButton';

export default function InsuranceDataPart ({pdfData, setPdfData, setAddContactModal}) {
    const [countries, setCountries] = useState([]);

    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, insurance: {
                ...prevData.insurance,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, insurance: {
            ...prevData.insurance,
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
                                <Form.Control as="select" id="salutation" value={pdfData.insurance?.salutation} onChange={onChangeHandler}>
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
                                value={pdfData.insurance?.title} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        {
                            pdfData.insurance?.salutation !== "Company" &&
                            <Col xs={12}>
                            <Row>
                                <Col xs={`${pdfData.insurance?.salutation !== "Company" ? '6' : '12'}`} >
                                <div className="form-group">
                                    <Form.Label>{getMessage('Firstname')}</Form.Label>
                                    <Form.Control type="text" placeholder={getMessage('Firstname')}
                                    id="firstname" value={pdfData.insurance?.firstname} onChange={onChangeHandler}/>
                                </div>
                                </Col>
                                <Col xs={6} className={`${pdfData.insurance?.salutation !== "Company" ? 'd-block' : 'd-none'}`}>
                                <div className="form-group">
                                    <Form.Label>{getMessage('Surname')}</Form.Label>
                                    <Form.Control type="text" placeholder={getMessage('Surname')}
                                    id="surname" value={pdfData.insurance?.surname} onChange={onChangeHandler} />
                                </div>
                                </Col>
                            </Row>
                            </Col>
                        }

                        <Col xs={12} className={`${pdfData.insurance?.salutation === "Company" ? 'd-block' : 'd-none'}`}>
                            <div className="form-group">
                                <Form.Label htmlFor="company">{getMessage('The name of the company')}</Form.Label>
                                <Form.Control id="company" placeholder={getMessage('Enter a company name')} type="text" value={pdfData.insurance?.company} onChange={onChangeHandler} />
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
                            id="email" value={pdfData.insurance?.email} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Website')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Website')} className='mb-3'
                                id="website" value={pdfData.insurance?.website} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Telephone')}</Form.Label>
                            <TelephoneInput
                                phone={pdfData.insurance?.telephone}
                                setTelCountry={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, insurance: {
                                    ...prevData.insurance,
                                    ["telCountry"]: e
                                    }}))}
                                }
                                setPhone={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, insurance: {
                                    ...prevData.insurance,
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
                                phone={pdfData.insurance?.mobile_phone_number}
                                setTelCountry={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, insurance: {
                                    ...prevData.insurance,
                                    ["mobileCountry"]: e
                                    }}))}
                                }
                                setPhone={
                                    (e) => {
                                    setPdfData(prevData => ({...prevData, insurance: {
                                    ...prevData.insurance,
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
                            <Form.Control type="text" placeholder={getMessage('Country')} id="country"  value={pdfData.insurance?.country} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Zip')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Zip')} id="zip" value={pdfData.insurance?.zip} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('City')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('City')} id="city" value={pdfData.insurance?.city} onChange={onChangeHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="form-group">
                            <Form.Label>{getMessage('Street')}</Form.Label>
                            <Form.Control type="text" placeholder={getMessage('Street')} id="street_no" value={pdfData.insurance?.street_no} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        </Col>
                    </Row>
                    <h3 className="mb-4 mt-3 text-info">{getMessage('MISCELLANEOUS')}:</h3>
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                            <div className="form-group">
                                <Form.Label htmlFor="policy_number">{getMessage('Insurance policy number')}</Form.Label>
                                <Form.Control id="policy_number" placeholder={getMessage('Enter a policy number')} type="text" value={pdfData.insurance?.policy_number} onChange={onChangeHandler} />
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <div className="form-group">
                                <Form.Label htmlFor="claim_number">{getMessage('Schadennummer')}</Form.Label>
                                <Form.Control id="claim_number" placeholder={getMessage('Please write the Schadennummer.')} type="text" value={pdfData.insurance?.claim_number} onChange={onChangeHandler} />
                            </div>
                        </Col>
                    </Row>
                    <Col xs={12} md={6} xl={4}>
                            <div className="form-group">
                                <Form.Label htmlFor="comment">{getMessage('Comment')}</Form.Label>
                                <Form.Control
                                    as={TextareaAutosize}
                                    placeholder={getMessage("Enter a comment...")}
                                    id="comment"
                                    value={pdfData.insurance?.comment} onChange={onChangeHandler}
                                    minRows={3}
                                />
                            </div>
                        </Col>
                    </form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}