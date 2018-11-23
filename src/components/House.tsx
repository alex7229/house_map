import * as React from "react";
import { Template } from "../logic/fetchTemplates";
import { HouseData } from "../logic/getHouseData";
import { HousePart } from "./HousePart";

interface Props {
  readonly template: Template;
  readonly data: HouseData;
}

export const House = (props: Props) => {
  const content = props.template.template.map(templatePart => (
    <HousePart
      data={props.data}
      templatePart={templatePart}
      key={templatePart.component}
    />
  ));
  return <div className="template">{content}</div>;
};
