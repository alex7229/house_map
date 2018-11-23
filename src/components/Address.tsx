import * as React from "react";

interface Props {
  readonly address: string;
}

export const Address = (props: Props) => (
  <p className="address">{props.address}</p>
);
