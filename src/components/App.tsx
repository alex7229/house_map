import * as React from "react";
import "../css/App.css";
import { fetchTemplates, Template } from "../logic/fetchTemplates";
import { getHouseData, HouseData } from "../logic/getHouseData";
import { TemplateComponent } from "./TemplateComponent";

interface State {
  readonly template: Template;
  readonly data: ReadonlyArray<HouseData>;
  readonly downloaded: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    const data = {} as ReadonlyArray<HouseData>;
    const template = {} as Template;
    this.state = {
      downloaded: false,
      data,
      template
    };
  }

  public async componentDidMount() {
    const templates = await fetchTemplates();
    const data = await getHouseData();
    this.setState({
      template: templates[0],
      data,
      downloaded: true
    });
  }

  public render() {
    if (!this.state.downloaded) {
      return <p>fetching data</p>;
    }
    return this.state.data.map((dataPart, index) => (
      <TemplateComponent
        key={index}
        template={this.state.template}
        data={dataPart}
      />
    ));
  }
}

export default App;
