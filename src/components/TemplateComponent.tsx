import * as React from "react";
import { Template } from "../logic/fetchTemplates";
import { HouseData } from "../logic/getHouseData";
import { TemplatePartComponent } from "./TemplatePartComponent";

interface Props {
  readonly template: Template;
  readonly data: HouseData;
}

export const TemplateComponent = (props: Props) => {
  const content = props.template.template.map(templatePart => (
    <TemplatePartComponent
      data={props.data}
      templatePart={templatePart}
      key={templatePart.component}
    />
  ));
  return <div className="template">{content}</div>;
};
