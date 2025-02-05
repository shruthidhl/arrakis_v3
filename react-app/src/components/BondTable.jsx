
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";



const columns = [
  {
    dataField: "isin",
    text: "ISIN",
    sort: true
  },
  {
    dataField: "type",
    text: "Bond Type",

  },
  {
    dataField: "issuer_name",
    text: "Issuer",
    headerStyle: { width: '200px' },
    style: { width: '200px' },
  },
  {
    dataField: "maturity_date",
    text: "Maturity Date",
    sort: true,
    headerStyle: { width: '150px' },
    style: { width: '150px' },
  },
  
  {
    dataField: "face_value",
    text: "FaceValue",

  },
  {
    dataField: "currency",
    text: "Currency",
   
  },
  {
    dataField: "coupon",
    text: "coupon",
   
  },
  {
    dataField: "status",
    text: "status",
   
  }
];







const BondTable = ({ data}) => {

  return (
    
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
};

export default BondTable;