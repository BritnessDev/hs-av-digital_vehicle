import TextareaAutosize from 'react-textarea-autosize';
import { Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {getMessage} from '../helpers/lang'

export default function GeneralDataPart ({pdfData, setPdfData}) {
    const onChangeHandler = (e) => {
        if(e.target.type === "checkbox")
            setPdfData(prevData => ({...prevData, general: {
                ...prevData.general,
                [e.target.id]: e.target.checked
            }}));
        else
        setPdfData(prevData => ({...prevData, general: {
            ...prevData.general,
            [e.target.id]: e.target.value
        }}));
    }
    return (
        <Row>
            {/* <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('licence_plate_and_vehicle_model')}</h3> */}
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="caseNumber">{getMessage('case_number')}</Form.Label>
                            <Form.Control id="case_number" placeholder={getMessage('enter_case_number')} type="text" value={pdfData.general?.case_number} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="date">{getMessage('date')}</Form.Label>
                            <Form.Control id="date" placeholder={getMessage('enter_a_date')} type="date" value={pdfData.general?.date} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="date_inspection">{getMessage('date_of_inspection')}</Form.Label>
                            <Form.Control id="date_inspection" placeholder={getMessage('enter_a_date_of_inspection')} type="date" value={pdfData.general?.date_inspection} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="place_inspection">{getMessage('place_of_inspection')}</Form.Label>
                            <Form.Control id="place_inspection" placeholder={getMessage('enter_place_inspection')} type="text" value={pdfData.general?.place_inspection} onChange={onChangeHandler}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="date_damage">{getMessage('damage_day')}</Form.Label>
                            <Form.Control id="date_damage" placeholder={getMessage('enter_damage_day')} type="date" value={pdfData.general?.date_damage} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="place_damage">{getMessage('damage_location')}</Form.Label>
                            <Form.Control id="place_damage" placeholder={getMessage('enter_damage_location')} type="text" value={pdfData.general?.place_damage} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                        <Form.Label htmlFor="vehicle-model-customer">{getMessage('is_the_vehicle_owned_financed_or_leased')}</Form.Label>
                        <Form.Control as="select" id="ownership" value={pdfData.general?.ownership} onChange={onChangeHandler}>
                            <option value="unknown">{getMessage('unknown')}</option>
                            <option value="financed">{getMessage('financed')}</option>
                            <option value="leased">{getMessage('leased')}</option>
                            <option value="owned">{getMessage('owned')}</option>
                        </Form.Control>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                        <Form.Label htmlFor="vehicle-model-customer">{getMessage('VAT ID')}</Form.Label>
                        <Form.Control type="text" id="vat" value={pdfData.general?.vat} onChange={onChangeHandler}>
                        </Form.Control>
                        </div>
                    </Col>
                </Row>
                <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('customer-vehicle')}</h3>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="license_plate">{getMessage('license_plate')}</Form.Label>
                            <Form.Control id="license_plate" placeholder={getMessage('enter_license_plate')} type="text" value={pdfData.general?.license_plate} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="manufacturer">{getMessage('vehicle_make')}</Form.Label>
                            <Form.Control id="manufacturer" placeholder={getMessage('enter_vehicle_make')} type="text" value={pdfData.general?.manufacturer} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="model">{getMessage('vehicle_model_customer')}</Form.Label>
                            <Form.Control id="model" placeholder={getMessage('enter_vehicle_model_customer')} type="text" value={pdfData.general?.model} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>
                <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('opponent-vehicle')}</h3>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="op_license_plate">{getMessage('license_plate')}</Form.Label>
                            <Form.Control id="op_license_plate" placeholder={getMessage('enter_license_plate')} type="text" value={pdfData.general?.op_license_plate} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="op_manufacturer">{getMessage('vehicle_make')}</Form.Label>
                            <Form.Control id="op_manufacturer" placeholder={getMessage('enter_vehicle_model_customer')} type="text" value={pdfData.general?.op_manufacturer} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Label htmlFor="op_model">Vehicle model</Form.Label>
                            <Form.Control id="op_model" placeholder={getMessage('enter_vehicle_model_customer')} type="text" value={pdfData.general?.op_model} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>

                <h3 htmlFor="license-accident" className="mb-4 mt-3 text-info">{getMessage('miscellaneous')}</h3>

                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="address_diff" label={getMessage('address_different')} checked={pdfData.general?.address_diff} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="signer_diff" label={getMessage('signer_different')} checked={pdfData.general?.signer_diff} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="to_email" label={getMessage('send_appraisals_by_email')} checked={pdfData.general?.to_email} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="op_known" label={getMessage('addressof_other_party_known')} checked={pdfData.general?.op_known} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="op_ins_known" label={getMessage('insurer_polluter_known')} checked={pdfData.general?.op_ins_known} onChange={onChangeHandler} />
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="need_lawyer" label={getMessage('want_lawyer')} checked={pdfData.general?.need_lawyer} onChange={onChangeHandler} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <div className="form-group">
                            <Form.Check type="switch" id="need_repair" label={getMessage('Repair intended')} checked={pdfData.general?.need_repair} onChange={onChangeHandler} />
                        </div>
                    </Col>
                </Row>

            </Row>
    )
}