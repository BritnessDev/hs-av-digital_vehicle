import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import AddressHeader from "../components/addresslist/header";
import CustomerDataPart from "./customer-data-part";
import GeneralDataPart from "./general-data-part";
import InsuranceDataPart from "./insurance-data-part"
import OpportunityDataPart from "./opponent-data-part";
import LawyerDataPart from "./lawyer-data-part";
import WorkshopDataPart from "./workshop-data-part";
import BankDataPart from "./bank-data-part";
import LessorDataPart from "./lessor-data-part";
import SignatureModal from "../modals/SignatureModal";
import Address2DataPart from "./address2-data-part";
import { ModalContacts } from "../modals";
import { SignatureDataPart } from "./signature-data-part";
import {
    Col,
    Container,
    Row,
    Accordion,
    Form,
    Fade,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { createDocument } from "../features/document";
import { getMessage } from "../helpers/lang";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getDocumentById, updateDocuments, previewDocuments, downloadDocument } from "../features/document";
import { SERVER_URL } from "../config/config";
import { setPreviewData } from "../features/preview/previewSlice";

const AddPdf = ({pageLoading, setPageLoading}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [pdfData, setPdfData] = useState({
        general: {
            case_number: ""
        },
        customer: {
            salutation: "mrs"
        },
        address2: {
            salutation: "mrs"
        },
        insurance: {
            salutation: "mrs"
        },
        opponent: {
            salutation: "mrs"
        },
        lawyer: {
            salutation: "mrs"
        },
        workshop: {
            salutation: "mrs"
        },
        bank: {
            salutation: "mrs"
        },
        lessor: {
            salutation: "mrs"
        },
        sign: {
            "signature0": '',
            "signature1": '',
            "signature2": '',
            "signature3": '',
            "signature4": '',
        }
    });
    const [addContactModal, setAddContactModal] = useState(false);
    const [tab, setTab] = useState("general");
    const [selectPdf, setSelectPdf] = useState("0");
    useEffect(() => {
        if(router.query.type === "update")
        {
            async function getDocumentData()
            {
                setPageLoading(true);
                const response = await getDocumentById(router.query.id);
                if(response?.success)
                {
                    const data = response?.data;
                    setPdfData({
                        general: data?.general_data,
                        customer: data?.customer_data,
                        address2: data?.address2_data,
                        insurance: data?.insurance_data,
                        opponent: data?.opponent_data,
                        workshop: data?.workshop_data,
                        bank: data?.bank_data,
                        lawyer: data?.lawyer_data,
                        lessor: data?.lessor_data,
                        sign: {
                            signature0: data?.signature_data?.signature0?.signature,
                            signature1: data?.signature_data?.signature1?.signature,
                            signature2: data?.signature_data?.signature2?.signature,
                            signature3: data?.signature_data?.signature3?.signature,
                            signature4: data?.signature_data?.signature4?.signature,
                        },
                    })
                }
                setPageLoading(false);
            }
            getDocumentData();
        }
    }, [])

    const onSaveHandler = async() => {
        console.log(pdfData)
        setPageLoading(true);

        if(router.query.type === "update")
        {
            const response = await updateDocuments(router.query.id, pdfData);
                if(response?.success)
                toast.success("Updated successfully", {autoClose: 2000});
            else
                toast.error("Failed", {autoClose: 2000});
        }
        else
        {
            await createDocument(pdfData);
            
        }
        setPageLoading(false);
    }

    const onPreviewHandler = async (id) => {
        setPageLoading(true);
        dispatch(setPreviewData({previewData: {
            data: pdfData,
            id
        }}))
        // router.push("/preview");
        window.open("/preview", "_black", "noopener,noreferrer");
        setPageLoading(false);
    }

    return (
        <div className="main-content">
            <Container fluid>
                <AddressHeader pretitle={getMessage('overview')} title={getMessage('generate_pdf')} />
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => {setTab("general")}}>{getMessage('general_data')}</Accordion.Header>
                                <Accordion.Body>
                                    <GeneralDataPart pdfData={pdfData} setPdfData={setPdfData}/>
                                </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                <Accordion.Header onClick={() => {setTab("customer")}}>{getMessage('Data of our customer')}</Accordion.Header>
                                <Accordion.Body>
                                    <CustomerDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                </Accordion.Body>
                                </Accordion.Item>

                                {
                                    pdfData.general?.address_diff ?
                                    <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={() => {setTab("address2")}}>{getMessage('AddressDiff')}</Accordion.Header>
                                    <Accordion.Body>
                                        <Address2DataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                    </Accordion.Body>
                                    </Accordion.Item> : <></>
                                }

                                {
                                    pdfData.general?.op_ins_known ?
                                    <Accordion.Item eventKey="3">
                                    <Accordion.Header onClick={() => {setTab("insurance")}}>{getMessage('Insurance Company Data')}</Accordion.Header>
                                    <Accordion.Body>
                                        <InsuranceDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                    </Accordion.Body>
                                    </Accordion.Item> : <></>
                                }

                                <Accordion.Item eventKey="4">
                                <Accordion.Header onClick={() => {setTab("opponent")}}>{getMessage('Accident Opponent Data')}</Accordion.Header>
                                <Accordion.Body>
                                    <OpportunityDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                </Accordion.Body>
                                </Accordion.Item>
                                {
                                    pdfData?.general.need_lawyer ?
                                    <Fade in={pdfData?.general.need_lawyer}>
                                        <Accordion.Item eventKey="5">
                                        <Accordion.Header onClick={() => {setTab("lawyer")}}>{getMessage('Lawyer Data')}</Accordion.Header>
                                        <Accordion.Body>
                                            <LawyerDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal}/>
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade> : <></>
                                }
                                {
                                    pdfData?.general.need_repair ? 
                                    <Fade in={pdfData?.general.need_repair}>
                                        <Accordion.Item eventKey="6">
                                        <Accordion.Header onClick={() => {setTab("workshop")}}>{getMessage('Repair Workshop Data')}</Accordion.Header>
                                        <Accordion.Body>
                                            <WorkshopDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal} />
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade> : <></>
                                }
                                {
                                    pdfData.general?.ownership === "financed" ?
                                    <Fade in={pdfData.general?.ownership === "financed"}>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header onClick={() => {setTab("bank")}}>{getMessage('Bank Data')}</Accordion.Header>
                                            <Accordion.Body>
                                                <BankDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade> : <></>
                                }
                                {
                                    pdfData.general?.ownership === "leased" ?
                                    <Fade in={pdfData.general?.ownership === "leased"}>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header onClick={() => {setTab("lessor")}}>{getMessage('Leased Data')}</Accordion.Header>
                                            <Accordion.Body>
                                                <LessorDataPart pdfData={pdfData} setPdfData={setPdfData} setAddContactModal={setAddContactModal} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Fade> : <></>
                                }
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header onClick={() => {setTab("sign")}}>{getMessage('Summary')}</Accordion.Header>
                                    <Accordion.Body>
                                        <SignatureDataPart
                                            pdfData={pdfData}
                                            onSaveHandler={onSaveHandler}
                                            onPreviewHandler={onPreviewHandler}
                                            pageLoading={pageLoading}
                                            setPageLoading={setPageLoading}
                                            selectPdf={selectPdf}
                                            setSelectPdf={setSelectPdf}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
                        </Form>
                    </Col>
                    <Col className="justify-content-end d-flex mt-3 px-6">
                        <Button variant="info" onClick={onSaveHandler}>{getMessage('Save')}</Button>
                    </Col>
                </Row>
                <ModalContacts
                    visible={addContactModal}
                    onDismiss={() => setAddContactModal(false)}
                    tab={tab} pdfData={pdfData}
                    setPdfData={setPdfData}
                    pageLoading={pageLoading}
                    setPageLoading={setPageLoading}
                    downloadDocument={downloadDocument}
                    selectPdf={selectPdf}
                    setSelectPdf={setSelectPdf}
                    />
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

export default AddPdf