import * as React from "react";
import {
  PrettyPrintNumber,
  prettyPrintNumber
} from "../logic/prettyPrintNumber";

interface Props {
  readonly price: number;
}

type FactoryProps = Props & {
  readonly prettyPrintNumber: PrettyPrintNumber;
};

export const PriceFactory = (props: FactoryProps) => {
  const prettyPrice = "$" + props.prettyPrintNumber(props.price);
  return <p className="price">{prettyPrice}</p>;
};

export const Price = (props: Props) => (
  <PriceFactory {...props} prettyPrintNumber={prettyPrintNumber} />
);
