import { shallow } from "enzyme";
import * as React from "react";
import { PriceFactory } from "../../components/Price";

it("should render paragraph with pretty price in usd", () => {
  const price = 18123;
  const prettyPrint = jest.fn().mockReturnValue("18 123");
  const wrapper = shallow(
    <PriceFactory price={price} prettyPrintNumber={prettyPrint} />
  );
  expect(wrapper.find("p.price").length).toBe(1);
  expect(wrapper.find("p.price").props().children).toBe("$18 123");
});
