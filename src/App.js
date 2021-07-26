import React from "react";
import {
  Histogram,
  DensitySeries,
  BarSeries,
  withParentSize,
  XAxis,
  YAxis
} from "@data-ui/histogram";

const ResponsiveHistogram = withParentSize(
  ({ parentWidth, parentHeight, ...rest }) => (
    <Histogram width={parentWidth} height={parentHeight} {...rest} />
  )
);

const rawData = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

export default function App(props) {
  return (
    <ResponsiveHistogram
      ariaLabel={"Histogram"}
      orientation="vertical"
      cumulative={false}
      normalized={false}
      parentHeight={200}
      height={props.height ? props.height : 350}
      width={props.width ? props.width : 550}
      binValues={([1, 5], [5, 10], [10, 15], [15, 20])}
      valueAccessor={(datum) => datum}
      binType="numeric"
      renderTooltip={({ event, datum, data, color }) => (
        <div>
          <strong style={{ color }}>
            {datum.bin0} to {datum.bin1}
          </strong>
          <div>
            <strong>count </strong>
            {datum.count}
          </div>
          <div>
            <strong>total count </strong>
            {Math.floor(datum.count / datum.density)}
          </div>
          <div>
            <strong>cumulative </strong>
            {datum.cumulative}
          </div>
          <div>
            <strong>density </strong>
            {Math.round(datum.density * 100) / 100}
          </div>
        </div>
      )}
    >
      <BarSeries fill={props.variant} rawData={rawData} />
      <DensitySeries
        stroke={props.variant}
        fill={props.variant}
        rawData={rawData}
        kernel={"gaussian"}
        showLine={true}
      />
      <XAxis numTicks={9} />
      <YAxis />
    </ResponsiveHistogram>
  );
}
