
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


const BondTable2 = ({ data }) => {
  const columns = [{
    dataField: "isin",
    text: "ISIN",
  }, {
    dataField: "cusip",
    text: "CUSIP",
  }, {
    dataField: "type",
    text: "Bond Type",
  }, {
    dataField: "issuer_name",
    text: "Issuer",
    headerStyle: { width: '200px' },
    style: { width: '200px' },
  }, {
    dataField: "maturity_date",
    text: "Maturity Date",
    sort: true,
    headerStyle: { width: '150px' },
    style: { width: '150px' },
  }, {
    dataField: "face_value",
    text: "FaceValue",
  }, {
    dataField: "currency",
    text: "Currency",
  }, {
    dataField: "coupon",
    text: "coupon",
  }, {
    dataField: "status",
    text: "status",
  }
  ];

  return (
    <div>
      <BootstrapTable
        keyField = "id"
        data = {data}
        columns = {columns}
        filter = {filterFactory()} 
        pagination = {paginationFactory({ sizePerPage: 5 })} />
    </div>
  );
};

export default BondTable2;