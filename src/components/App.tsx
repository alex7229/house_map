import * as React from "react";
import "../css/App.css";
import { fetchTemplates, Template } from "../logic/fetchTemplates";
import { getHouseData, HouseData } from "../logic/getHouseData";
import { Page } from "./Page";

interface State {
  readonly templates: ReadonlyArray<Template>;
  readonly data: ReadonlyArray<HouseData>;
  readonly downloaded: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      downloaded: false,
      data: [],
      templates: []
    };
  }

  public async componentDidMount() {
    const templates = await fetchTemplates();
    const data = await getHouseData();
    this.setState({
      templates,
      data,
      downloaded: true
    });
  }

  public render() {
    if (!this.state.downloaded) {
      return <p>fetching data</p>;
    }
    return <Page templates={this.state.templates} data={this.state.data} />;
  }
}

export default App;
