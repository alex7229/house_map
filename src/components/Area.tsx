import * as React from "react";
import {
  PrettyPrintNumber,
  prettyPrintNumber
} from "../logic/prettyPrintNumber";

interface Props {
  readonly area: number;
}

type FactoryProps = Props & {
  readonly prettyPrint: PrettyPrintNumber;
};

export const AreaFactory = (props: FactoryProps) => {
  const prettyArea = props.prettyPrint(props.area) + " sq. ft.";
  return <p className="area">{prettyArea}</p>;
};

export const Area = (props: Props) => (
  <AreaFactory {...props} prettyPrint={prettyPrintNumber} />
);
