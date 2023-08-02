import AddressHeader from "../components/addresslist/header";
import {
    Col,
    Container,
    Row,
    Spinner,
} from "react-bootstrap";
import { DocumentListTable } from "../widgets";
import { getMessage } from "../helpers/lang";
import { parseCookies, setCookie } from "nookies";
import { deleteDocuments, getDocuments } from "../features/document";
import { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';

const DocumentList = ({props, pageLoading, setPageLoading}) => {
    const token = useSelector(state => state.login.token.token); // retrieve token from Redux store

    const router = useRouter();
    const [documentData, setDocumentData] = useState({data: []});
    const [pageSize, setPageSize] = useState(10);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [query, setQuery] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);
    const pagesOptions = [
        { value: 10, label: "10" },
        { value: 50, label: "50" },
        { value: 100, label: "100" },
        // { value: -1, label: "All" },
    ];

    useEffect(() => {
        onSearchHandler();
    }, [pageSize, pageIndex])

    const getDocumentData = async(query, pageSize, pageIndex) => {
        setPageLoading(true);
        const response = await getDocuments({token, query, pageSize, pageIndex});
        // debugger
        if(response.success)
        {
            setDocumentData(response?.data);
            setPageIndex(response?.data?.current_page);
            setPageCount(response?.data?.totalCount);
        }
        setPageLoading(false);
    }

    const onSearchHandler = async() => {
        await getDocumentData(query, pageSize, pageIndex);
    }

    const titleOptions = [
        { value: "*", label: "Any" },
        { value: "designer", label: "Designer" },
        { value: "developer", label: "Developer" },
        { value: "owner", label: "Owner" },
        { value: "founder", label: "Founder" },
    ];

    const leadScoreOptions = [
        { value: "-1", label: "Any" },
        { value: "1", label: "1+" },
        { value: "2", label: "2+" },
        { value: "3", label: "3+" },
        { value: "4", label: "4+" },
        { value: "5", label: "5+" },
        { value: "6", label: "6+" },
        { value: "7", label: "7+" },
        { value: "8", label: "8+" },
        { value: "9", label: "9+" },
        { value: "10", label: "10" },
    ];

    const onDeleteHandlerById = async(id) => {
        setPageLoading(true);
        const response = await deleteDocuments([id]);
        if(response.success)
            toast.success("Successfully removed", {autoClose: 2000});
        else
            toast.error("Failed", {autoClose: 2000});
        onSearchHandler();
        setPageLoading(false);
    }

    const onDeleteRows = async(selectedIds) => {
        let deleteRowIds = [];
        Object.keys(selectedIds)?.map((item, key) => {
            if(selectedIds[item] === true)
                deleteRowIds.push(documentData?.data[key]?.id)
        })
        
        const response = await deleteDocuments(deleteRowIds);
        if(response.success)
            toast.success("Successfully remove", {autoClose: 2000});
        else
            toast.error("Failed", {autoClose: 2000});
        onSearchHandler();
    }

    const onEditRow = (selectedRow) => {
        router.push(`add-dossiers?type=update&id=${documentData?.data[selectedRow].id}`)
    }

    return (
        <div className="main-content">
            <Container fluid>
                <AddressHeader pretitle={getMessage('overview')} title={getMessage('Document List')} />
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <DocumentListTable
                            deals={documentData?.data?.map(item =>
                                ({
                                    id: item?.id ?? "",
                                    filenumber: item?.general_data?.case_number ?? "",
                                    license: item?.general_data?.license_plate ?? "",
                                    name: item?.customer_data?.salutation !== "company" ? ((item?.customer_data?.firstname??"") + " " + (item?.customer_data?.surname??"")) : (item?.customer_data?.company ?? ""),
                                    created: moment(item.created_at).format('DD.MM.YYYY'),
                                    modified: moment(item.updated_at).format('DD.MM.YYYY'),
                                    edit: <Link href={'/add-dossiers?type=update&id=' + item.id}>{getMessage("Edit")}</Link>,
                                    delete:
                                        <button type="button" className="btn w-auto gap-3 d-flex align-items-center text-primary" onClick={() => onDeleteHandlerById(item.id)}>
                                            {getMessage("Delete")}
                                        </button>
                                })
                            )}
                            leadScoreOptions={leadScoreOptions}
                            pagesOptions={pagesOptions}
                            titleOptions={titleOptions}
                            setQuery = {setQuery}
                            query={query}
                            onSearchHandler={onSearchHandler}
                            setPageSize = {setPageSize}
                            pageSize={pageSize}
                            pageIndex = {pageIndex}
                            setPageIndex = {setPageIndex}
                            pageCount={pageCount}
                            getDocumentData={getDocumentData}
                            setSelectedIds={setSelectedIds}
                            onDeleteRows={onDeleteRows}
                            onEditRow={onEditRow}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


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

export default DocumentList
