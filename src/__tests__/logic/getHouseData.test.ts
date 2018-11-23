import { AxiosStatic } from "axios";
import { getHouseDataFactory } from "../../logic/getHouseData";

it("should call correct api endpoint and return data", async done => {
  const get = jest.fn().mockResolvedValue({
    status: 200,
    data: { data: ["first house", "second house"] }
  });
  const axios = {} as AxiosStatic;
  axios.get = get;
  const result = await getHouseDataFactory(axios)();
  expect(get.mock.calls.length).toBe(1);
  expect(get.mock.calls[0][0]).toBe("/houseData.json");
  expect(result).toEqual(["first house", "second house"]);
  done();
});
