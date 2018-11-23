import { shallow } from "enzyme";
import * as React from "react";
import { SquareFactory } from "../../components/Square";

it("should render square with pretty number", () => {
  const square = 1225;
  const prettySquare = jest.fn().mockReturnValue("1 200");
  const wrapper = shallow(
    <SquareFactory square={square} prettyPrint={prettySquare} />
  );
  expect(wrapper.find("p.square").props().children).toBe("1 200 sq. ft.");
});
