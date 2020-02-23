import reducer from "../../reducers/LeadersListReducers";
import {
  GET_LEADERS,
  DELETE_LEADERS,
  ADD_LEADERS
} from "../../actions/types.js";

describe("Leaders reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({ leaders: [] });
  });
  it("should handle GET_LEADERS", () => {
    expect(
      reducer([], {
        type: GET_LEADERS,
        payload: [
          {
            id: 1,
            name: "CP3O",
            email: "c3po@mail.com",
            message: "robot",
            created_at: "2020-02-21T12:44:23.633638Z",
            owner: 1
          }
        ]
      })
    ).toEqual({
      leaders: [
        {
          created_at: "2020-02-21T12:44:23.633638Z",
          email: "c3po@mail.com",
          id: 1,
          message: "robot",
          name: "CP3O",
          owner: 1
        }
      ]
    });
  });
  it("should handle DELETE_LEADERS", () => {
    expect(
      reducer(
        {
          leaders: [
            {
              created_at: "2020-02-21T12:44:23.633638Z",
              email: "c3po@mail.com",
              id: 2,
              message: "robot",
              name: "CP3O",
              owner: 1
            },
            {
              created_at: "2020-02-21T12:44:23.633638Z",
              email: "c3po@mail.com",
              id: 1,
              message: "robot",
              name: "BB9",
              owner: 1
            }
          ]
        },
        {
          type: DELETE_LEADERS,
          payload: 1
        }
      )
    ).toEqual({
      leaders: [
        {
          created_at: "2020-02-21T12:44:23.633638Z",
          email: "c3po@mail.com",
          id: 2,
          message: "robot",
          name: "CP3O",
          owner: 1
        }
      ]
    });
  });
  it("should handle ADD_LEADERS", () => {
    expect(
      reducer(
        {
          leaders: [
            {
              created_at: "2020-02-21T12:44:23.633638Z",
              email: "c3po@mail.com",
              id: 2,
              message: "robot",
              name: "CP3O",
              owner: 1
            }
          ]
        },
        {
          type: ADD_LEADERS,
          payload: {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "c3po@mail.com",
            id: 1,
            message: "robot",
            name: "BB9",
            owner: 1
          }
        }
      )
    ).toEqual({
      leaders: [
        {
          created_at: "2020-02-21T12:44:23.633638Z",
          email: "c3po@mail.com",
          id: 2,
          message: "robot",
          name: "CP3O",
          owner: 1
        },
        {
          created_at: "2020-02-21T12:44:23.633638Z",
          email: "c3po@mail.com",
          id: 1,
          message: "robot",
          name: "BB9",
          owner: 1
        }
      ]
    });
  });
});
