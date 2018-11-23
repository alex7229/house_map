import { prettyPrintNumber } from "../../logic/prettyPrintNumber";

it("should place whitespace for rounded number properly", () => {
  expect(prettyPrintNumber(236)).toBe("236");
  expect(prettyPrintNumber(2000.525)).toBe("2 001");
  expect(prettyPrintNumber(45 * 10 ** 6)).toBe("45 000 000");
});
