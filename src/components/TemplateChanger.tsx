import * as React from "react";

interface Props {
  readonly chooseTemplate: (templateIndex: number) => void;
  readonly templatesIds: ReadonlyArray<number>;
}

export const TemplateChanger = (props: Props) => {
  const buttons = props.templatesIds.map(id => {
    return (
      <button
        id={"template_" + id}
        key={id}
        onClick={props.chooseTemplate.bind(null, id)}
      >
        Template {id}
      </button>
    );
  });
  return <div id="templateChanger">{buttons}</div>;
};
