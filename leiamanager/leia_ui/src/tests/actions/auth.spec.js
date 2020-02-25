import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import {
  userLoad,
  userLogin,
  userLogout,
  userRegistration
} from "../../actions/auth";
import userLoadIsOkMock from "../mocks/userLoadIsOkMock";
import userLoadIsErrorMock from "../mocks/userLoadIsErrorMock";
import userLoginIsErrorMock from "../mocks/userLoginIsErrorMock";
import userLoginIsOkMock from "../mocks/userLoginIsOkMock";
import userRegistrationIsOkMock from "../mocks/userRegistrationIsOkMock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Auth actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("should return USER_IS_LOADED when userLoad action is rightly called", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userLoadIsOkMock
      });
    });

    const expectedActions = [
      { type: "USER_IS_LOADING" },
      {
        payload: {
          token: "1",
          user: { email: "co@mail.com", id: 1, username: "co" }
        },
        type: "USER_IS_LOADED"
      }
    ];

    const store = mockStore({
      Auth: {
        token: "1",
        isAuthenticated: true,
        isLoading: false,
        user: {
          email: "co@mail.com",
          id: 1,
          username: "co"
        }
      }
    });

    return store.dispatch(userLoad()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return GET_ERRORS and AUTH_ERROR when userLoad action is error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: userLoadIsErrorMock
      });
    });

    const expectedActions = [
      { type: "USER_IS_LOADING" },
      {
        payload: {
          message: {
            token: "1",
            user: { email: "co@mail.com", id: 1, username: "co" }
          },
          status: 400
        },
        type: "GET_ERRORS"
      },
      { type: "AUTH_ERROR" }
    ];

    const store = mockStore({
      Auth: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: {}
      }
    });

    return store.dispatch(userLoad()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return LOGIN_SUCCESS when userLogin action IS OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userLoginIsOkMock
      });
    });

    const expectedActions = [
      {
        payload: {
          token: "1",
          user: { email: "c@mail.com", id: 9, username: "co" }
        },
        type: "LOGIN_SUCCESS"
      }
    ];

    const store = mockStore({
      Messages: {},
      Auth: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: {}
      }
    });

    return store.dispatch(userLogin()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return LOGIN_FAILED when userLogin action is error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: userLoginIsErrorMock
      });
    });

    const expectedActions = [
      {
        payload: {
          message: { non_field_errors: ["Wrong credentials"] },
          status: 400
        },
        type: "GET_ERRORS"
      },
      { type: "LOGIN_FAILED" }
    ];

    const store = mockStore({
      Messages: {},
      Auth: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: {}
      }
    });

    return store.dispatch(userLogin()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return LOGOUT_SUCCESS when userLogout action IS OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204
      });
    });

    const expectedActions = [{ type: "LOGOUT_SUCCESS" }];

    const store = mockStore({
      Auth: {
        token: "1",
        isAuthenticated: true,
        isLoading: false,
        user: {
          email: "co@mail.com",
          id: 1,
          username: "co"
        }
      }
    });

    return store.dispatch(userLogout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return GET_ERRORS when userLogout action is not OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400
      });
    });

    const expectedActions = [
      { payload: { message: undefined, status: 400 }, type: "GET_ERRORS" }
    ];

    const store = mockStore({
      Auth: {
        token: "1",
        isAuthenticated: true,
        isLoading: false,
        user: {
          email: "co@mail.com",
          id: 1,
          username: "co"
        }
      }
    });

    return store.dispatch(userLogout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return REGISTRATION_SUCCESS when userRegistration action is OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userRegistrationIsOkMock
      });
    });

    const expectedActions = [
      {
        payload: {
          token: "1",
          user: {
            id: 13,
            username: "test",
            email: "test@mail.com"
          }
        },
        type: "REGISTRATION_SUCCESS"
      }
    ];

    const store = mockStore({
      Auth: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null
      }
    });

    return store
      .dispatch(
        userRegistration({
          username: "test",
          email: "test@mail.com",
          password: "test"
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should return REGISTRATION_FAILED when userRegistration action is not OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: { username: ["A user with that username already exists."] }
      });
    });

    const expectedActions = [
      {
        payload: {
          message: { username: ["A user with that username already exists."] },
          status: 400
        },
        type: "GET_ERRORS"
      },
      { type: "REGISTRATION_FAILED" }
    ];

    const store = mockStore({
      Auth: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null
      }
    });

    return store
      .dispatch(
        userRegistration({
          username: "test",
          email: "test@mail.com",
          password: "test"
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
