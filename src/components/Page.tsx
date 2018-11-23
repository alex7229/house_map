import * as React from "react";
import { Template } from "../logic/fetchTemplates";
import { HouseData } from "../logic/getHouseData";
import { House } from "./House";

interface Props {
  readonly templates: ReadonlyArray<Template>;
  readonly data: ReadonlyArray<HouseData>;
}

interface State {
  readonly templateIndex: number;
}

export class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      templateIndex: 0
    };

    this.chooseNextTemplate = this.chooseNextTemplate.bind(this);
    this.choosePreviosTemplate = this.choosePreviosTemplate.bind(this);
  }

  public chooseNextTemplate() {
    let nextIndex = this.state.templateIndex + 1;
    if (nextIndex === this.props.templates.length) {
      nextIndex = 0;
    }
    this.setState({ templateIndex: nextIndex });
  }

  public choosePreviosTemplate() {
    let previousIndex = this.state.templateIndex - 1;
    if (previousIndex === -1) {
      previousIndex = this.props.templates.length - 1;
    }
    this.setState({ templateIndex: previousIndex });
  }

  public render() {
    const houses = this.props.data.map((house, index) => (
      <House
        template={this.props.templates[this.state.templateIndex]}
        data={house}
        key={index}
      />
    ));
    return (
      <>
        <button id="previous_template" onClick={this.choosePreviosTemplate}>
          Previous template
        </button>
        <button id="next_template" onClick={this.chooseNextTemplate}>
          Next template
        </button>
        <div>{houses}</div>
      </>
    );
  }
}
