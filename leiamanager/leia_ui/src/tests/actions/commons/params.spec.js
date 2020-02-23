import { configWithToken } from "../../../actions/commons/params";

describe("ConfigWithToken in action params", () => {
  it("should return headerConfig", () => {
    const getState = jest.fn(() => ({
      Auth: {
        token: 1
      }
    }));
    expect(configWithToken(getState)).toEqual({
      headers: { Authorization: "Token 1", "Content-Type": "application/json" }
    });
  });
});
