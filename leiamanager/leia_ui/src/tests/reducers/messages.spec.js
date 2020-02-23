import reducer from "../../reducers/messages";
import { GENERATE_MSG } from "../../actions/types";

describe("Messages reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it("should handle GENERATE_MSG", () => {
    expect(
      reducer([], {
        type: GENERATE_MSG,
        payload: "Blabla"
      })
    ).toEqual("Blabla");
  });
});
