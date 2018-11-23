import { shallow } from "enzyme";
import * as React from "react";
import { ImageWrapper } from "../../components/ImageWrapper";

it("should render correct classname for wrapper", () => {
  const wrapper = shallow(<ImageWrapper url={""} />);
  expect(wrapper.find("div.image_wrapper").length).toBe(1);
});

it("should render image", () => {
  const url = "https://someUrl.jpg";
  const imageWrapper = shallow(<ImageWrapper url={url} />);
  expect(imageWrapper.find("img").length).toBe(1);
  expect(imageWrapper.find("img").props().src).toBe(url);
});

it("should render children properly", () => {
  const price = <p key={"price"}>23 dollars</p>;
  const imageWrapper = shallow(<ImageWrapper url={""} children={[price]} />);
  expect(imageWrapper.contains(price)).toBe(true);
});
