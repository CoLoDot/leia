import { generateMessage, returnErrors } from "../../actions/messages";

describe("ConfigWithToken in action params", () => {
  it("should return generateMessage with payload and GENERATE_MSG", () => {
    const message = "This is a message";
    const expected = { payload: "This is a message", type: "GENERATE_MSG" };
    expect(generateMessage(message)).toEqual(expected);
  });
  it("should return returnErrors with payload and GET_ERRORS", () => {
    const message = "This is a message";
    const status = 400;
    const expected = {
      payload: { message: "This is a message", status: 400 },
      type: "GET_ERRORS"
    };
    expect(returnErrors(message, status)).toEqual(expected);
  });
});
