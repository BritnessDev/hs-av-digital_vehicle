import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, CloseButton, Col, Form, InputGroup, ListGroup, Modal, Row } from 'react-bootstrap';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import { Avatar } from '../components';
import { getMessage } from '../helpers/lang';
import { getAddList } from '../features/contact';
import { toast } from 'react-toastify';
import { addContactData } from '../features/contact';

export default function ModalMembers({ visible, onDismiss, tab, pdfData, setPdfData, pageLoading, setPageLoading, downloadDocument, selectPdf, setSelectPdf, ...props }) {
  const [contactList, setContactList] = useState([]);
  const [showData, setShowData] = useState([]);

  const onAddHandler = (id) => {
    async function addFunc()
    {
      setPageLoading(true);
      const response = await addContactData(id, tab);
      if(response?.success)
      {
        setPdfData(prevData => ({
          ...prevData,
          [tab]: response?.contact
        }))
        toast.success("Successfully added", {autoClose: 2000});
      }
      else
        toast.error("Failed", {autoClose: 2000});
      setPageLoading(false);
      onDismiss();
    }
    addFunc();
  }
  
  useEffect(() => {
    async function getAddListFunc()
    {
      setPageLoading(true);
      const response = await getAddList(tab);
      if(response?.success)
        {
          setContactList(response?.contacts);
          setShowData(response?.contacts);
        }
      setPageLoading(false);
    }
    if(visible)
      getAddListFunc();
  }, [visible])

  const onChangeHandler = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredList = contactList.filter(item => {
      for (const key in item) {
        if (item[key] && item[key].toString().toLowerCase().indexOf(keyword) !== -1) {
          return true;
        }
      }
      return false;
    });
    setShowData(filteredList);
  }

  const data = useMemo(
    () => [
      {
        imgSrc: '/img/avatars/profiles/avatar-5.jpg',
        contact_type: 'Lawyer',
        title: 'Miyah Myles',
      },
      {
        imgSrc: '/img/avatars/profiles/avatar-6.jpg',
        contact_type: 'Insurance',
        title: 'Ryu Duke',
      },
      {
        imgSrc: '/img/avatars/profiles/avatar-7.jpg',
        contact_type: 'Contact',
        title: 'Glen Rouse',
      },
      {
        imgSrc: '/img/avatars/profiles/avatar-8.jpg',
        contact_type: 'Workshop',
        title: 'Grace Gross',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        accessor: 'firstname',
      },
      {
        accessor: 'surname',
      },
      {
        accessor: 'id',
      },
      {
        accessor: 'contact_type',
      },
      {
        accessor: 'title',
      },
    ],
    []
  );

  const { page, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <Modal show={visible} onHide={onDismiss} centered {...props}>
      <Card className="modal-card">
        <Card.Header>
          <h4 className="card-header-title">{getMessage("Add a data")}</h4>
          <CloseButton onClick={onDismiss} />
        </Card.Header>
        <Card.Header>
          <form>
            <InputGroup className="input-group-merge input-group-flush input-group-reverse">
              <Form.Control type="search" placeholder="Search" onChange={onChangeHandler} />
              <InputGroup.Text>
                <FeatherIcon icon="search" size="1em" />
              </InputGroup.Text>
            </InputGroup>
          </form>
        </Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush my-n3">
            {showData?.map((row, i) => {
              // prepareRow(row);
              const {contact_type, firstname, id, surname, title} = row;

              return (
                <ListGroup.Item>
                  <Row className="align-items-center">
                    <Col>
                      <p>{title ?? "no name"}</p>
                    </Col>
                    <Col className="ms-n2">
                      <h4 className="mb-1 name">
                        <Link href="/#">{firstname + " " + surname}</Link>
                      </h4>
                      <p className="small mb-0">
                        {getMessage(contact_type)}
                      </p>
                    </Col>
                    <Col xs="auto">
                      <Button variant="white" size="sm" onClick={() => onAddHandler(id)}>
                        {getMessage("Add")}
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </Modal>
  );
}
