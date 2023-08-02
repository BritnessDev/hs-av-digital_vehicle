import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Button, Card, CloseButton, Form, InputGroup, ListGroup, Modal } from 'react-bootstrap';
import { getMessage } from '../helpers/lang';
import SignatureCanvas from 'react-signature-canvas'

function SignatureModal({visible, onDismiss, pdfData, signIndex, onDownloadHandler, ...props}) {
  const canvasRef = useRef(null);
  const [sign, setSign] = useState(null);

  useEffect(() => {
    if(visible)
    {
      const img = new Image();
      switch(signIndex)
      {
        case "0":
          img.src = pdfData?.sign?.signature0;
          break;
        case "1":
          img.src = pdfData?.sign?.signature1;
          break;
        case "2":
          img.src = pdfData?.sign?.signature2;
          break;
        case "3":
          img.src = pdfData?.sign?.signature3;
          break;
        case "4":
          img.src = pdfData?.sign?.signature4;
          break;
        default:
          img.src = pdfData?.sign?.signature0;
      }
      
      img.onload = () => {
        canvasRef.current.getCanvas().getContext('2d').drawImage(img, 0, 0);
      }
    }

  }, [visible])
  function handleClear() {
    canvasRef.current.clear();
    setSign(null);
  }

  function handleSave() {
    setSign(canvasRef.current.toDataURL('image/png'));
    const signData = canvasRef.current.toDataURL('image/png');
    canvasRef.current.clear();
    const img = new Image();
    img.src = signData;
    img.onload = () => {
      canvasRef.current.getCanvas().getContext('2d').drawImage(img, 0, 0);
    }
    switch(signIndex)
      {
        case "0":
          pdfData.sign.signature0 = signData;
          break;
        case "1":
          pdfData.sign.signature1 = signData;
          break;
        case "2":
          pdfData.sign.signature2 = signData;
          break;
        case "3":
          pdfData.sign.signature3 = signData;
          break;
        case "4":
          pdfData.sign.signature4 = signData;
          break;
        default:
          pdfData.sign.signature0 = signData;
      }
      
    onDownloadHandler();
  }
  
  return (
    <Modal show={visible} onHide={onDismiss} centered {...props}>
      <Card className="modal-card">
        <Card.Header>
          <h4 className="card-header-title">{getMessage("Sign")}</h4>
          <CloseButton onClick={onDismiss} />
        </Card.Header>
        <Card.Body>
          <Row className='align-items-end'>
          <Col className='d-flex flex-column justify-content-center'>
          <div className={`d-flex flex-column justify-content-center canvas-container`}>
            <SignatureCanvas 
              penColor='black' 
              canvasProps={{className: `sigCanvas border border-primary canvas-content`,}}
              ref={canvasRef}
            />
          </div>
            <div className='mt-3 d-flex justify-content-center'>
              <Button variant="danger" onClick={handleClear}>{getMessage('Clear')}</Button>
              <Button variant="info" onClick={handleSave} className="ms-3">{getMessage('Download')}</Button>
            </div>
          </Col>
        </Row>
        </Card.Body>
      </Card>
    </Modal>
    
  );
}

export default SignatureModal;