import { Inject } from "@syncfusion/ej2-react-calendars";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Page,
  Toolbar,
  Filter,
  Selection,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";

const Customer = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Customer" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customer;
