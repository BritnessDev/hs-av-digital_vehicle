import AddressHeader from "../components/addresslist/header";
import {
    Col,
    Container,
    Row,
    Button,
} from "react-bootstrap";
import { AddressListTable } from "../widgets";
import { getMessage } from "../helpers/lang";
import { parseCookies } from "nookies";
import { getContact, deleteContactByIds } from "../features/contact";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Spinner from 'react-bootstrap/Spinner';
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';

const AddressList = ({props, pageLoading, setPageLoading}) => {
        const token = useSelector(state => state.login.token.token); // retrieve token from Redux store

        const data = {props}
        const router = useRouter();
        const pagesOptions = [
            { value: 10, label: "10" },
            { value: 50, label: "50" },
            { value: 100, label: "100" },
            // { value: -1, label: getMessage('all') },
        ];
    
        const titleOptions = [
            { value: "*", label: getMessage('any') },
            { value: "designer", label: getMessage('designer') },
            { value: "developer", label: getMessage('developer') },
            { value: "owner", label: getMessage('owner') },
            { value: "founder", label: getMessage('founder') },
        ];
    
        const [contactData, setContactData] = useState([]);
        const [query, setQuery] = useState('');
        const [contactType, setContactType] = useState('');
        const [pageSize, setPageSize] = useState(5);
        const [pageIndex, setPageIndex] = useState(1);
        const [pageCount, setPageCount] = useState(1);
        const [selectedRows, setSelectedRows] = useState([]);

        useEffect(() => {
            async function getContactFunc()
            {
                setPageLoading(true);
                const data = await getContact(query, contactType, pageSize, pageIndex);
                if(data?.contacts?.data && data?.contacts?.totalCount)
                {
                    setContactData(data.contacts.data);
                    setPageCount(data.contacts.totalCount);
                }
                setPageLoading(false);
            }

            getContactFunc();
        }, [pageIndex, pageSize, contactType])


        const onDeleteHandlerById = (id) => {
            async function deleteContactFunc() {
                setPageLoading(true);
                const response = await deleteContactByIds([id]);
                if(response.success)
                    {
                        toast.info('Removed Successfully', {autoClose: 2000});
                        
                        const data = await getContact(query, contactType, pageSize, pageIndex);
                        setContactData(data.contacts.data);
                        setPageCount(data.contacts.totalCount);
                    }
                else
                    toast.error('Failed', {autoClose: 2000});
                setPageLoading(false);
            }
            deleteContactFunc();
        }
        
        const onEditRow = (selectedRow) => {
            router.push(`/address-management?type=update&id=${contactData[selectedRow].id}`)
        }


        const onDeleteRows = async(selectedIds) => {
            let deleteRowIds = [];
            Object.keys(selectedIds)?.map((item, key) => {
                if(selectedIds[item] === true)
                    deleteRowIds.push(contactData[key]?.id)
            })
            const response = await deleteContactByIds(deleteRowIds);
            if(response.success)
                toast.success("Successfully remove", {autoClose: 2000});
            else
                toast.error("Failed", {autoClose: 2000});
            const data = await getContact(query, contactType, pageSize, pageIndex);
            setContactData(data.contacts.data);
            setPageCount(data.contacts.totalCount);
        }

        const onSearchHandler = () => {
            async function getContactData() {
                setPageLoading(true);
                const data = await getContact(query, contactType, pageSize, pageIndex);
                setContactData(data.contacts.data);
                setPageCount(data.contacts.totalCount);
                setPageLoading(false);
            }
            getContactData();
        }
        
        return (
            <div className="main-content">
    
                <Container fluid>
                    <AddressHeader pretitle={getMessage('overview')} title={getMessage('Title')} />
                </Container>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <AddressListTable
                                deals={contactData?.map(item =>
                                    ({
                                        name: item?.salutation !== "company" ? ((item?.firstname ?? "") + " " + (item?.surname ?? "")) : item?.company ?? "",
                                        contact: item?.contact_type ?? "",
                                        zip: item.zip ?? "",
                                        city: item.city ?? "",
                                        phone: item.telephone ?? "",
                                        email: item.email ?? "",
                                        person: item.contact_person_count ?? "",
                                        created: moment(item.created_at).format('DD.MM.YYYY'),
                                        modified: moment(item.updated_at).format('DD.MM.YYYY'),
                                        edit: <Link href={'/address-management?type=update&id=' + item.id}>{getMessage("Edit")}</Link>,
                                        delete:
                                            <Button variant="link" onClick={() => onDeleteHandlerById(item.id)}>{getMessage("Delete")}</Button>
                                    })
                                )}
                                pagesOptions={pagesOptions}
                                titleOptions={titleOptions}
                                setQuery = {setQuery}
                                setContactType = {setContactType}
                                setPageSize = {setPageSize}
                                pageIndex = {pageIndex}
                                setPageIndex = {setPageIndex}
                                pageCount={pageCount}
                                setSelectedRows={setSelectedRows}
                                onDeleteRows={onDeleteRows}
                                onSearchHandler={onSearchHandler}
                                onEditRow={onEditRow}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );

  }
  
  export async function getServerSideProps(ctx) {
    // if user is authenticated, continue with normal page rendering
    const cookies = parseCookies(ctx);
    const token = cookies.token;
    // const data = await getContact('', '', 5, 1);
    if (!token) {
        return {
            redirect: {
              destination: '/sign-in',
              permanent: false,
            },
        };
    }
    else
        return {
            props: {
                // data,
            }
        }
  }
  
  export default AddressList