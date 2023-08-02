import className from "classnames";
import FeatherIcon from "feather-icons-react";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
    Alert,
    Button,
    Card,
    CloseButton,
    Col,
    Dropdown,
    Form,
    InputGroup,
    ListGroup,
    Pagination,
    Row,
    Table,
} from "react-bootstrap";
import {
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
    useTable,
} from "react-table";
import { IndeterminateCheckbox, Select } from "../components/vendor";
import { getMessage } from "../helpers/lang";

export default function AddressListTable({
    deals,
    pagesOptions,
    titleOptions,
    setQuery,
    setContactType,
    setPageSize,
    pageIndex,
    setPageIndex,
    pageCount,
    setSelectedRows,
    onDeleteRows,
    onSearchHandler,
    onEditRow,
    ...props
}) {
    const [pageCountArray, setPageCountArray] = useState(new Array(pageCount).fill(''))
    useEffect(() => {
        setPageCountArray(new Array(pageCount).fill(''))
    }, [pageCount])
    const data = useMemo(() => deals, [
        deals
    ]);
    const columns = useMemo(
        () => [
            // {
            //     id: "selection",
            //     Header: ({ getToggleAllRowsSelectedProps }) => (
            //         <div>
            //             <IndeterminateCheckbox
            //                 {...getToggleAllRowsSelectedProps()}
            //             />
            //         </div>
            //     ),
            //     Cell: ({ row }) => (
            //         <div>
            //             <IndeterminateCheckbox
            //                 {...row.getToggleRowSelectedProps()}
            //             />
            //         </div>
            //     ),
            // },
            {
                Header: getMessage("Name"),
                accessor: "name",
            },
            {
                Header: getMessage("Type of contact"),
                accessor: "contact",
            },
            {
                Header: getMessage("Zip"),
                accessor: "zip",
            },
            {
                Header: getMessage("City"),
                accessor: "city",
            },
            {
                Header: getMessage("Phone"),
                accessor: "phone",
            },
            {
                Header: getMessage("Email"),
                accessor: "email",
            },
            {
                Header: getMessage("Person"),
                accessor: "person",
            },
            {
                Header: getMessage("Created on"),
                accessor: "created",
            },
            {
                Header: getMessage("Modified on"),
                accessor: "modified",
            },
            {
                Header: getMessage("Edit"),
                accessor: "edit",
            },
            {
                Header: getMessage("Delete"),
                accessor: "delete",
            },
            // {
            //     id: "actions",
            //     disableSortBy: true,
            //     Cell: (item) => (
            //         <Dropdown align="end">
            //             <Dropdown.Toggle
            //                 as="span"
            //                 className="dropdown-ellipses"
            //                 role="button"
            //             >
            //                 <FeatherIcon icon="more-vertical" size="17" />
            //             </Dropdown.Toggle>
            //             <Dropdown.Menu>
            //             {/* href={'/address-management?type=update&id='} */}
            //                 <Dropdown.Item href={'/address-management?type=update&id='}>Edit</Dropdown.Item>
            //                 <Dropdown.Item href="#!">{getMessage('Delete')}</Dropdown.Item>
            //             </Dropdown.Menu>
            //         </Dropdown>
            //     ),
            // },
        ],
        []
    );

    const {
        canNextPage,
        canPreviousPage,
        getTableBodyProps,
        gotoPage,
        headerGroups,
        nextPage,
        page,
        pageOptions,
        prepareRow,
        previousPage,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect
    );
    const onPrevPageHandler = () => {setPageIndex(pageIndex => pageIndex - 1);onSearchHandler();}
    const onNextPageHandler = () => {
        setPageIndex(pageIndex => pageIndex + 1)
        onSearchHandler();
    }
    const pushArray = (count) => {
        // forEach(const i)
    }
    return (
        <div>
            <Card>
                <Card.Header className="h-auto">
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} lg={12} xl={5} xxl={6}>
                            <InputGroup className="input-group-merge input-group-flush input-group-reverse">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    onChange={(e) =>
                                        setQuery(e.target.value)
                                    }
                                    onKeyPress={(e) => {
                                        if(e.key === "Enter")
                                            onSearchHandler();
                                    }}
                                />
                                <InputGroup.Text>
                                    <FeatherIcon icon="search" size="1em" />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={7} xxl={6}>
                            <Row>
                                <Col xs={12} sm={5} md={5} lg={5} xl={5} className="me-n3">
                                    <Select
                                        options={[
                                            {
                                                value: "",
                                                label: "All",
                                            },
                                            {
                                                value: "Contact",
                                                label: "Contact",
                                            },
                                            {
                                                value: "Workshop",
                                                label: "Workshop",
                                            },
                                            {
                                                value: "Insurance",
                                                label: "Insurance",
                                            },
                                            {
                                                value: "Lawyer",
                                                label: "Lawyer",
                                            },
                                        ]}
                                        placeholder={getMessage("Type of contact")}
                                        layout="flush"
                                        size="sm"
                                        onChange={(e) => setContactType(e.value)}
                                        className="btn btn-white btn-sm col-12 text-nowrap"
                                        
                                    />
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} className="me-n3 mt-2 mt-sm-0">
                                    <Select
                                        options={pagesOptions}
                                        layout="flush"
                                        size="sm"
                                        className="btn btn-white btn-sm col-12 text-nowrap"
                                        placeholder={getMessage('Select the page size')}
                                        onChange={(e) => setPageSize(e.value)}
                                    />
                                </Col>
                                <Col xs={2} sm={1} md={1} lg={1} xl={1} className="d-flex align-items-center mt-2 mt-sm-0">
                                    <Dropdown align="right" className="dropdown-card w-full text-nowrap ">
                                        <Link bsPrefix="btn btn-white btn-sm" href="/address-management?type=add">
                                            <FeatherIcon
                                                className="me-1"
                                                icon="plus"
                                                size="1em"
                                            />{" "}
                                            {getMessage('New')}
                                        </Link>
                                        <Dropdown.Menu>
                                            <Card.Header>
                                                <h4 className="card-header-title">
                                                    {getMessage('Filters')}
                                                </h4>
                                            </Card.Header>
                                            <Card.Body>
                                                <ListGroup className="list-group-flush mt-n4 mb-4">
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col>
                                                                <small>{getMessage('Title')}</small>
                                                            </Col>
                                                            <Col xs="auto">
                                                                <Select
                                                                    options={
                                                                        titleOptions
                                                                    }
                                                                    size="sm"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                                <Button className="w-100">
                                                    {getMessage('Apply filter')}
                                                </Button>
                                            </Card.Body>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Header>
                <Table
                    size="sm"
                    className="card-table table-nowrap"
                    hover
                    responsive
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr
                                {...headerGroup.getHeaderGroupProps({
                                    role: null,
                                })}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps({
                                                className: className(
                                                    column.className,
                                                    column.canSort &&
                                                        "is-sortable"
                                                ),
                                                role: null,
                                            })
                                        )}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        className="fs-base"
                        {...getTableBodyProps({ role: null })}
                    >
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps({ role: null })}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps({
                                                    className:
                                                        cell.column.className,
                                                    role: null,
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <Card.Footer className="d-flex justify-content-between">
                    <Pagination className="card-pagination pagination-tabs">
                        <Pagination.Item
                            className="ps-0 pe-4 border-end"
                            disabled={pageIndex == 1}
                            onClick={onPrevPageHandler}
                        >
                            <FeatherIcon
                                icon="arrow-left"
                                size="1em"
                                className="me-1"
                            />{" "}
                            {getMessage('Prev')}
                        </Pagination.Item>
                    </Pagination>
                    <Pagination className="card-pagination pagination-tabs">
                        {pageCountArray.map((option, index) => (
                            <Pagination.Item
                                key={index}
                                active={(index + 1) === pageIndex}
                                onClick={() => {setPageIndex(index + 1); onSearchHandler();}}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                    <Pagination className="card-pagination pagination-tabs">
                        <Pagination.Item
                            className="ps-4 pe-0 border-start"
                            disabled={pageCount == pageIndex}
                            onClick={onNextPageHandler}
                        >
                            {getMessage('Next')}{" "}
                            <FeatherIcon
                                icon="arrow-right"
                                size="1em"
                                className="ms-1"
                            />
                        </Pagination.Item>
                    </Pagination>
                </Card.Footer>
            </Card>
            {Object.keys(selectedRowIds).length > 0 && (
                <Alert
                    variant="dark"
                    className="list-alert alert-dismissible border"
                >
                    <Row className="align-items-center">
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label={`${
                                    Object.keys(selectedRowIds).length
                                } deal(s)`}
                                checked
                                disabled
                            />
                        </Col>
                        <Col xs="auto" className="me-n3">
                            <Button variant="white-20" size="sm" onClick={() => {onEditRow(Object.keys(selectedRowIds)[Object.keys(selectedRowIds).length-1])}}>
                                {getMessage('Edit')}
                            </Button>
                            <Button
                                variant="white-20"
                                size="sm"
                                className="ms-1"
                                onClick={() => onDeleteRows(selectedRowIds)}
                            >
                                {getMessage('Delete')}
                            </Button>
                        </Col>
                    </Row>
                    <CloseButton />
                </Alert>
            )}
            <div id="modals" {...props}>
      
    </div>
        </div>
    );
}
