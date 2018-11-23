import * as React from "react";

interface Props {
  readonly url: string;
  readonly children?: ReadonlyArray<JSX.Element>;
}

export const ImageWrapper = (props: Props) => (
  <div className="image_wrapper">
    <img src={props.url} />
    {props.children}
  </div>
);
