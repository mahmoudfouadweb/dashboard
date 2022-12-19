import React from "react";
import { Header } from "../../components";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";

const pyramid = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header title={"Bar"} category="Chart" />
      <AccumulationChartComponent id="charts">
        <Inject
          services={[
            AccumulationLegend,
            PyramidSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            explode={true}
            explodeOffset="10"
            explodeAll={false}
            explodeIndex={3}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
      ;
    </div>
  );
};

export default pyramid;
