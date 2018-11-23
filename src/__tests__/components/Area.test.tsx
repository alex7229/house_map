import { shallow } from "enzyme";
import * as React from "react";
import { AreaFactory } from "../../components/Area";

it("should render square with pretty number", () => {
  const area = 1225;
  const prettySquare = jest.fn().mockReturnValue("1 200");
  const wrapper = shallow(
    <AreaFactory area={area} prettyPrint={prettySquare} />
  );
  expect(wrapper.find("p.area").props().children).toBe("1 200 sq. ft.");
});
