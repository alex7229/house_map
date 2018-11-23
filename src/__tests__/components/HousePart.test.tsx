import { shallow } from "enzyme";
import * as React from "react";
import { Address } from "../../components/Address";
import { Area } from "../../components/Area";
import { HousePart } from "../../components/HousePart";
import { ImageWrapper } from "../../components/ImageWrapper";
import { Price } from "../../components/Price";
import { TemplatePart } from "../../logic/fetchTemplates";
import { HouseData } from "../../logic/getHouseData";

const defaultData: HouseData = {
  area: 235,
  description: "",
  full_address: "some street",
  id: 1,
  images: ["some url"],
  price: 2225
};

it("should render address component properly", () => {
  const templatePart: TemplatePart = {
    component: "ADDRESS",
    field: "full_address"
  };
  const wrapper = shallow(
    <HousePart templatePart={templatePart} data={defaultData} />
  );
  expect(wrapper.contains(<Address address={defaultData.full_address} />)).toBe(
    true
  );
});

it("should render area component properly", () => {
  const templatePart: TemplatePart = {
    component: "AREA",
    field: "area"
  };
  const wrapper = shallow(
    <HousePart templatePart={templatePart} data={defaultData} />
  );
  expect(wrapper.contains(<Area area={235} />)).toBe(true);
});

it("should not render area component if area value is undefined", () => {
  const templatePart: TemplatePart = {
    component: "AREA",
    field: "area"
  };
  const data = { ...defaultData, area: undefined };
  const wrapper = shallow(
    <HousePart templatePart={templatePart} data={data} />
  );
  expect(wrapper.find(Area).length).toBe(0);
});

it("should render price component properly", () => {
  const templatePart: TemplatePart = {
    component: "PRICE",
    field: "price"
  };
  const wrapper = shallow(
    <HousePart templatePart={templatePart} data={defaultData} />
  );
  expect(wrapper.contains(<Price price={defaultData.price} />)).toBe(true);
});

it("should render image wrapper component without children", () => {
  const templatePart: TemplatePart = {
    component: "IMAGE",
    field: "images"
  };
  const wrapper = shallow(
    <HousePart templatePart={templatePart} data={defaultData} />
  );
  expect(wrapper.contains(<ImageWrapper urls={defaultData.images} />)).toBe(
    true
  );
});

it("should render image wrapper with price, area and address inside", () => {
  const templatePart: TemplatePart = {
    component: "IMAGE",
    field: "images",
    children: [
      { component: "PRICE", field: "price" },
      { component: "ADDRESS", field: "full_address" },
      { component: "AREA", field: "area" }
    ]
  };
  const wrapper = shallow(
    <HousePart templatePart={templatePart} data={defaultData} />
  );
  expect(wrapper.props().urls).toEqual(defaultData.images);
  expect(wrapper.props().children.length).toBe(3);
  expect(wrapper.props().children[0].props).toEqual({
    data: defaultData,
    templatePart: { component: "PRICE", field: "price" }
  });
  expect(wrapper.props().children[1].props).toEqual({
    data: defaultData,
    templatePart: { component: "ADDRESS", field: "full_address" }
  });
  expect(wrapper.props().children[2].props).toEqual({
    data: defaultData,
    templatePart: { component: "AREA", field: "area" }
  });
});
