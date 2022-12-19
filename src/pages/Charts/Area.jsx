import { Tooltip } from "@syncfusion/ej2-charts/src";
import {
  ChartComponent,
  Inject,
  DateTime,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { LineSeries } from "@syncfusion/ej2/charts";

import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const Area = () => {
  const { currentMode, currentColor } = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header title={"Aria Chart"} category="Chart" />

      <ChartComponent
        id="aria-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
