import { shallow } from "enzyme";
import * as React from "react";
import { Address } from "../../components/Address";

it("should render paragraph with address", () => {
  const address = "Fenny street, 25";
  const wrapper = shallow(<Address address={address} />);
  expect(wrapper.find("p.address").length).toBe(1);
  expect(wrapper.find("p.address").props().children).toBe(address);
});
