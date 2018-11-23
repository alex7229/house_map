import Axios, { AxiosStatic } from "axios";

interface TemplatePart {
  readonly component: "ADDRESS" | "IMAGE" | "AREA" | "PRICE";
  readonly field: "string";
  readonly children: ReadonlyArray<TemplatePart>;
}

interface Template {
  readonly id: number;
  readonly template: ReadonlyArray<TemplatePart>;
}

type FetchTemplate = () => Promise<ReadonlyArray<Template>>;
type FetchTemplateFactory = (axios: AxiosStatic) => FetchTemplate;

export const fetchTemplateFactory: FetchTemplateFactory = axios => async () => {
  const response = await axios.get("http://demo4452328.mockable.io/templates");
  return response.data;
};

export const fetchTemplate: FetchTemplate = fetchTemplateFactory(Axios);
