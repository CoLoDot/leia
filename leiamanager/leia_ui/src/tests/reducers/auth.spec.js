import reducer from "../../reducers/auth";
import {
  USER_IS_LOADED,
  USER_IS_LOADING,
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from "../../actions/types";

describe("Auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      isAuthenticated: null,
      isLoading: false,
      user: null
    });
  });
  it("should handle USER_IS_LOADING", () => {
    expect(
      reducer([], {
        type: USER_IS_LOADING
      })
    ).toEqual({ isLoading: true });
  });
  it("should handle USER_IS_LOADED", () => {
    expect(
      reducer([], {
        type: USER_IS_LOADED,
        payload: { id: 1, username: "co", email: "co@mail.com" }
      })
    ).toEqual({
      isAuthenticated: true,
      isLoading: false,
      user: { id: 1, username: "co", email: "co@mail.com" }
    });
  });
  it("should handle LOGIN_SUCCESS", () => {
    expect(
      reducer([], {
        type: LOGIN_SUCCESS,
        payload: {
          user: { id: 1, username: "co", email: "co@mail.com" },
          token: "1"
        }
      })
    ).toEqual({
      isAuthenticated: true,
      isLoading: false,
      token: "1",
      user: { email: "co@mail.com", id: 1, username: "co" }
    });
  });
  it("should handle REGISTRATION_SUCCESS", () => {
    expect(
      reducer([], {
        type: REGISTRATION_SUCCESS,
        payload: {
          user: { id: 1, username: "co", email: "co@mail.com" },
          token: "1"
        }
      })
    ).toEqual({
      isAuthenticated: true,
      isLoading: false,
      token: "1",
      user: { email: "co@mail.com", id: 1, username: "co" }
    });
  });
  it("should handle AUTH_ERROR", () => {
    expect(
      reducer([], {
        type: AUTH_ERROR,
        payload: {
          user: { id: 1, username: "co", email: "co@mail.com" },
          token: "1"
        }
      })
    ).toEqual({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  });
  it("should handle LOGIN_FAILED", () => {
    expect(
      reducer([], {
        type: LOGIN_FAILED,
        payload: {
          user: { username: "co", password: "blabla" },
          token: "1"
        }
      })
    ).toEqual({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  });
  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      reducer([], {
        type: LOGOUT_SUCCESS,
        payload: {
          user: { id: 1, username: "co", email: "co@mail.com" },
          token: "1"
        }
      })
    ).toEqual({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  });
  it("should handle REGISTRATION_FAILED", () => {
    expect(
      reducer([], {
        type: REGISTRATION_FAILED,
        payload: {
          user: { username: "co", email: "co@mail.com", password: "yolo" }
        }
      })
    ).toEqual({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  });
});
