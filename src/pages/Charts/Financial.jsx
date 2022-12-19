import React from "react";
import { Header } from "../../components";
import {
  AxisModel,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LegendSettingsModel,
  HiloSeries,
  Category,
  Tooltip,
  ILoadedEventArgs,
  Zoom,
  Crosshair,
  ChartTheme,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

const Financial = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header title={"Financial"} category="Chart" />

      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        title="Maximum and Minimum Rainfall"
      >
        <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            xName="x"
            yName="low"
            name="Egypt"
            type="Hilo"
            low="low"
            high="high"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
