import * as React from "react";

interface Props {
  readonly urls: ReadonlyArray<string>;
  readonly children?: ReadonlyArray<JSX.Element>;
}

export const ImageWrapper = (props: Props) => (
  <div className="image_wrapper">
    <img src={props.urls[0]} />
    {props.children ? <div className="imageText">{props.children}</div> : null}
  </div>
);
