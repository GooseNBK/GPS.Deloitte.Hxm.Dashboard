import { Fragment, useState } from "react";
import {
  Filter,
  Operators,
  TextFilter,
  NumericFilter,
  BooleanFilter,
} from "@progress/kendo-react-data-tools";
import { filterBy } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import products from "./products.json";
import Scrollbars from "src/BaseTemplate/core/Scrollbars/Scrollbars";


export default function Kendo() {

    const cellWithBackGround = (props) => {
        const examplePrice = props.dataItem.UnitPrice < 15;
        const icon = examplePrice ? (
          <span className="k-icon k-i-sort-desc-sm" />
        ) : (
          <span className="k-icon k-i-sort-asc-sm" />
        );
        const style = {
          backgroundColor: examplePrice
            ? "rgb(243, 23, 0, 0.32)"
            : "rgb(55, 180, 0,0.32)",
        };
        const field = props.field || "";
        return (
          <td style={style}>
            {props.dataItem[field]} {icon}
          </td>
        );
      };

  return (
    <div className="w-full flex flex-col min-h-full">
      <Scrollbars className="grow overflow-x-auto">
        <Grid stickyHeader className="min-w-xl" aria-labelledby="tableTitle" data={products} >
            <GridColumn className="w-40 md:w-64 text-center"  field="ProductName" title="Product Name" />
            <GridColumn className="w-40 md:w-64 text-center"  field="UnitPrice" title="Units Price" cell={cellWithBackGround} />
            <GridColumn className="w-40 md:w-64 text-center"  field="UnitsOnOrder" title="Units On Order" />
            <GridColumn className="w-40 md:w-64 text-center"  field="ReorderLevel" title="Reorder Level" />
        </Grid>
      </Scrollbars>
    </div>
    
  );
    
}