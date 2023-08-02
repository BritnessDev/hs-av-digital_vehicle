import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Header } from '../components';
import { getMessage } from '../helpers/lang';
import { addContact, getContactById } from '../features/contact';

export default function AccountHeader({ onClickContactHandler, onClickContactPersonHandler }) {
  const router = useRouter();
  const [contactActive, setContactActive] = useState(true);
  const [contactPersonActive, setContactPersonActive] = useState(false);

  const onContact = () => {
    setContactActive(true);
    setContactPersonActive(false);

    onClickContactHandler();
  }

  const onContactPerson = () => {
    setContactPersonActive(true);
    setContactActive(false);

    onClickContactPersonHandler();
  }

  return (
    <Header className="mt-md-5">
      <Header.Body>
        <Row className="align-items-center">
          <Col>
            <Header.Pretitle>{getMessage('overview')}</Header.Pretitle>
            <Header.Title>{getMessage('contact_management')}</Header.Title>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Header.Tabs className="nav-overflow">
              <Nav.Item>
                <Nav.Link active={contactActive} onClick={onContact}>
                  {getMessage('contact')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link active={contactPersonActive} onClick={onContactPerson}>
                  {getMessage('contact_person')}
                </Nav.Link>
              </Nav.Item>
            </Header.Tabs>
          </Col>
        </Row>
      </Header.Body>
    </Header>
  );
}
