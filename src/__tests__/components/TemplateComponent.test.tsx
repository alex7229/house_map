import { shallow } from "enzyme";
import * as React from "react";
import { TemplateComponent } from "../../components/TemplateComponent";
import { TemplatePartComponent } from "../../components/TemplatePartComponent";
import { Template } from "../../logic/fetchTemplates";

it("should render component properly", () => {
  const data = {
    area: 235,
    description: "",
    full_address: "some street",
    id: 1,
    images: ["some url"],
    price: 2225
  };
  const template: Template = {
    id: 3,
    template: [
      { component: "ADDRESS", field: "full_address" },
      {
        component: "IMAGE",
        field: "images",
        children: [{ component: "PRICE", field: "price" }]
      },
      { component: "AREA", field: "area" }
    ]
  };
  const wrapper = shallow(
    <TemplateComponent data={data} template={template} />
  );
  expect(wrapper.find(TemplatePartComponent).length).toEqual(3);
  expect(wrapper.find(TemplatePartComponent).get(0).props).toEqual({
    data,
    templatePart: template.template[0]
  });
  expect(wrapper.find(TemplatePartComponent).get(1).props).toEqual({
    data,
    templatePart: template.template[1]
  });
  expect(wrapper.find(TemplatePartComponent).get(2).props).toEqual({
    data,
    templatePart: template.template[2]
  });
});
