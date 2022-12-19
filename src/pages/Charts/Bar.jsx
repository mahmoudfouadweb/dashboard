import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Bar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header title={"Bar"} category="Chart" />
      <ChartComponent
        id="bar-chart"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        dataSource={barChartData}
        legendSettings={{ visible: true, position: "Top" }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, idx) => (
            <SeriesDirective key={idx} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
