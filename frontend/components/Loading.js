import { Spinner, Container } from "react-bootstrap";

export default () => (
    <div className="position-absolute loading-spinner">
        <Spinner animation="grow" variant="primary" size="sm" className="mx-1"/>
        <Spinner animation="grow" variant="primary" size="sm" className="mx-1"/>
        <Spinner animation="grow" variant="primary" size="sm" className="mx-1"/>
    </div>
)