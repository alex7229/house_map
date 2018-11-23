import * as React from "react";
import {
  PrettyPrintNumber,
  prettyPrintNumber
} from "../logic/prettyPrintNumber";

interface Props {
  readonly square: number;
}

type FactoryProps = Props & {
  readonly prettyPrint: PrettyPrintNumber;
};

export const AreaFactory = (props: FactoryProps) => {
  const prettySquare = props.prettyPrint(props.square) + " sq. ft.";
  return <p className="square">{prettySquare}</p>;
};

export const Area = (props: Props) => (
  <AreaFactory {...props} prettyPrint={prettyPrintNumber} />
);
