import * as React from "react";
import { PrettyPrintNumber } from "../logic/prettyPrintNumber";

interface Props {
  readonly square: number;
}

type FactoryProps = Props & {
  readonly prettyPrint: PrettyPrintNumber;
};

export const SquareFactory = (props: FactoryProps) => {
  const prettySquare = props.prettyPrint(props.square) + " sq. ft.";
  return <p className="square">{prettySquare}</p>;
};
