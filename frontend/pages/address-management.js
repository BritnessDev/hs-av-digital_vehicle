import FeatherIcon from 'feather-icons-react';
import { Button, InputGroup, Form, Col, Container, Row } from 'react-bootstrap';
import { Select } from '../components/vendor';
import { useEffect, useState } from 'react'
import { getMessage } from '../helpers/lang';
import { isEmpty, isEmptyArray } from '../helpers/isEmpty';
import { parseCookies, setCookie } from "nookies";
import { useRouter } from 'next/router'
import { addContact, updateContact } from '../features/contact';
import {ContactManagementHeader } from '../widgets';
import { toast } from 'react-toastify';
import ContactAdd from './contact-add';
import ContactPerson from './contact-person';
import { getContactById } from '../features/contact';

const ContactManagement = ({pageLoading, setPageLoading}) => {
  const router = useRouter()
  const [contactActive, setContactActive] = useState(true);
  const [contactPersonActive, setContactPersonActive] = useState(false);
  const [contactData, setContactData] = useState({
    "contact_type": "all",
    "salutation": "mrs",
  });
  const [errors, setErrors] = useState({
    contact: {},
    contactPerson: [],
  })
  const [contactPersonData, setContactPersonData] = useState([]);
  useEffect(() => {
    if(router.query.type === "update")
    {
      async function getContactByIdFunc()
      {
        setPageLoading(true);
        const response = await getContactById(router.query.id);
        if(response?.success)
          {
            setContactData(response?.data?.contact);
            setContactPersonData(response?.data?.contactPerson);
          }
        setPageLoading(false);
      }
      getContactByIdFunc();
    }
  }, [])

  const onClickContactHandler = () => {
    setContactActive(true);
    setContactPersonActive(false);
  }

  const onClickContactPersonHandler = () => {
    setContactActive(false);
    setContactPersonActive(true);
  }


  const onCheckContactPersonValidation = () => {
    let contactPersonError = [];
    contactPersonData?.map((item, key) => {
      let error = {};
      if(item?.salutation !== "company" && isEmpty(item?.surname))
        error.surname = "Surname is required";
      if(item?.salutation === "company" && isEmpty(item?.company))
        error.company = "Company is required";
      contactPersonError.push(error);
      // if(isEmpty(item?.email))
      //   error.email = "Email is required";
      // if(isEmpty(item?.city))
      //   error.city = "City is required";
      // if(isEmpty(item?.street_no))
      //   error.street = "Street is required";
      // showErrors.push(error);
    })
    // setErrors(showErrors);

    if(!isEmptyArray(contactPersonError))
      {
        setErrors(prevErrors => ({
          ...prevErrors,
          contactPerson: contactPersonError
        }));
        errors.contactPerson = contactPersonError;
        return false;
      }
    else
      return true;
  }

  const onCheckContactValidation = () => {
    let error = {}
    if(contactData?.salutation !== "company" && isEmpty(contactData?.surname))
      error.surname = "Surname is required";
    if(contactData?.salutation === "company" && isEmpty(contactData?.company))
      error.company = "Company is required";
    // if(isEmpty(contactData?.email))
    //   error.email = "Email is required";
    // if(isEmpty(contactData?.city))
    //   error.city = "City is required";
    // if(isEmpty(contactData?.street_no))
    //   error.street = "Street is required";
    if(!isEmpty(error))
      {
        setErrors({
          ...errors, ["contact"] : error
        });
        return false;
      }
    else
      return true;
  }


  const onSave = () => {
    async function addContactFunc()
    {
      setPageLoading(true);
      const response = await addContact({
        contactData,
        contactPersonData
      })
  
      if(response.success)
        {
          toast.success("successfully added", {autoClose: 2000});
          router.push('/addresses');
        }
      setPageLoading(false);
    }
    async function updateContactFunc()
    {
      setPageLoading(true);
      const response = await updateContact(
        router.query.id,
        contactData,
        contactPersonData
      )
      if(response.success)
        {
          toast.info("successfully updated", {autoClose: 2000});
          router.push('/addresses');
        }
      setPageLoading(false);
    }
    let flag = true;
    flag *= onCheckContactPersonValidation();
    flag *= onCheckContactValidation();
    if(!flag)
    {
      toast.info("Check the required inputs", {autoClose: 2000});
      return;
    }
    if(router.query.type === "add")
      addContactFunc();
    else
      updateContactFunc();
  }


  return (
    <div className="main-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={12} xl={12}>
            <ContactManagementHeader onClickContactHandler={onClickContactHandler} onClickContactPersonHandler={onClickContactPersonHandler} />
            <Row>
                {/* Contact */}
                <ContactAdd styleClassNames={`${contactActive ? 'd-block' : 'd-none'}`} onSave={onSave} contactData={contactData} setContactData={setContactData} errors={errors} setErrors={setErrors} />

                {/* ContactPerson */}
                <ContactPerson styleClassNames={`${contactPersonActive ? 'd-block' : 'd-none'}`} onSave={onSave} contactData={contactPersonData} setContactData={setContactPersonData} errors={errors} setErrors={setErrors} />
            </Row>
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

export default ContactManagement