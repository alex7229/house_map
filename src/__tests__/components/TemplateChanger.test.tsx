import { shallow } from "enzyme";
import * as React from "react";
import { TemplateChanger } from "../../components/TemplateChanger";

const defaultProps = {
  chooseTemplate: jest.fn(),
  templatesCount: 3
};

it("should render buttons for every possible template", () => {
  const wrapper = shallow(
    <TemplateChanger {...defaultProps} templatesIds={[0, 1, 4, 6, 7]} />
  );
  expect(wrapper.find("button").length).toBe(5);
});

it("buttons should call change template function with correct index", () => {
  const changeTemplate = jest.fn();
  const wrapper = shallow(
    <TemplateChanger
      {...defaultProps}
      templatesIds={[23, 62]}
      chooseTemplate={changeTemplate}
    />
  );
  wrapper.find("#template_62").simulate("click");
  expect(changeTemplate.mock.calls.length).toBe(1);
  expect(changeTemplate.mock.calls[0][0]).toBe(62);
});
