import { shallow } from "enzyme";
import * as React from "react";
import { House } from "../../components/House";
import { Page } from "../../components/Page";
import { Template } from "../../logic/fetchTemplates";
import { HouseData } from "../../logic/getHouseData";

const testHouseData: HouseData[] = [
  {
    area: 235,
    description: "",
    full_address: "some street",
    id: 1,
    images: ["some url"],
    price: 2225
  }
];
const testTemplates: ReadonlyArray<Template> = [
  {
    id: 1,
    template: [
      { component: "IMAGE", field: "images" },
      { component: "ADDRESS", field: "full_address" },
      { component: "PRICE", field: "price" },
      { component: "AREA", field: "area" }
    ]
  },
  {
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
  },
  {
    id: 5,
    template: [
      { component: "ADDRESS", field: "full_address" },
      {
        component: "IMAGE",
        field: "images",
        children: [{ component: "PRICE", field: "price" }]
      },
      { component: "AREA", field: "area" }
    ]
  }
];

it("default  template index should be 0", () => {
  const wrapper = shallow(
    <Page templates={testTemplates} data={testHouseData} />
  );
  const instance = wrapper.instance() as Page;
  expect(instance.state.templateIndex).toBe(0);
});

it("should choose next template properly", () => {
  const wrapper = shallow(
    <Page templates={testTemplates} data={testHouseData} />
  );
  const instance = wrapper.instance() as Page;
  const button = wrapper.find("#next_template");
  button.simulate("click");
  expect(instance.state.templateIndex).toBe(1);
  button.simulate("click");
  expect(instance.state.templateIndex).toBe(2);
  button.simulate("click");
  expect(instance.state.templateIndex).toBe(0);
});

it("should choose previous template properly", () => {
  const wrapper = shallow(
    <Page templates={testTemplates} data={testHouseData} />
  );
  const instance = wrapper.instance() as Page;
  const button = wrapper.find("#previous_template");
  button.simulate("click");
  expect(instance.state.templateIndex).toBe(2);
  button.simulate("click");
  expect(instance.state.templateIndex).toBe(1);
  button.simulate("click");
  expect(instance.state.templateIndex).toBe(0);
});

it("should render template components", () => {
  const wrapper = shallow(
    <Page templates={testTemplates} data={testHouseData} />
  );
  expect(wrapper.find(House).props()).toEqual({
    data: testHouseData[0],
    template: testTemplates[0]
  });
});
