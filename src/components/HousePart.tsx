import * as React from "react";
import { TemplatePart } from "../logic/fetchTemplates";
import { HouseData } from "../logic/getHouseData";
import { Address } from "./Address";
import { Area } from "./Area";
import { ImageWrapper } from "./ImageWrapper";
import { Price } from "./Price";

interface Props {
  readonly data: HouseData;
  readonly templatePart: TemplatePart;
}

export const HousePart = (props: Props) => {
  // it is assumed that value type is correct
  // template is not validated
  const value: any = props.data[props.templatePart.field];
  const componentName = props.templatePart.component;
  if (componentName === "ADDRESS") {
    return <Address address={value} />;
  }
  if (componentName === "AREA") {
    if (value === undefined) {
      return null;
    }
    return <Area area={value} />;
  }
  if (componentName === "PRICE") {
    return <Price price={value} />;
  }
  if (!props.templatePart.children) {
    return <ImageWrapper urls={value} />;
  }
  const children = props.templatePart.children.map(imageInnerPart => {
    return (
      <HousePart
        data={props.data}
        templatePart={imageInnerPart}
        key={imageInnerPart.component}
      />
    );
  });
  return <ImageWrapper urls={value} children={children} />;
};
