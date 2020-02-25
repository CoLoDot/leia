import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import { getLeaders, deleteLeaders, addLeaders } from "../../actions/leaders";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Leaders Actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });
  it("should return GET_LEADERS when getLeaders is OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            id: 26,
            name: "leia",
            email: "lo@lo.com",
            message: "Princess Organa",
            created_at: "2020-02-21T12:44:23.633638Z",
            owner: 9
          }
        ]
      });
    });

    const expectedActions = [
      {
        payload: [
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "lo@lo.com",
            id: 26,
            message: "Princess Organa",
            name: "leia",
            owner: 9
          }
        ],
        type: "GET_LEADERS"
      }
    ];

    const store = mockStore({
      LeadersList: {
        leaders: []
      },
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

    return store.dispatch(getLeaders()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return returnErrors when getLeaders is not OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: []
      });
    });

    const expectedActions = [
      { payload: { message: [], status: 400 }, type: "GET_ERRORS" }
    ];

    const store = mockStore({
      LeadersList: {
        leaders: []
      },
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

    return store.dispatch(getLeaders()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return DELETE_LEADERS when deleteLeaders is OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 204
      });
    });

    const expectedActions = [
      { payload: { leaderDeleted: "Leader deleted !" }, type: "GENERATE_MSG" },
      { payload: 1, type: "DELETE_LEADERS" }
    ];

    const store = mockStore({
      LeadersList: {
        leaders: [
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "lo@lo.com",
            id: 1,
            message: "Princess Organa",
            name: "leia",
            owner: 9
          },
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "sk@lo.com",
            id: 2,
            message: "sk",
            name: "luke",
            owner: 9
          }
        ]
      },
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

    return store.dispatch(deleteLeaders(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return returnErros when deleteLeaders is not OK", () => {
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
      LeadersList: {
        leaders: [
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "lo@lo.com",
            id: 1,
            message: "Princess Organa",
            name: "leia",
            owner: 9
          },
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "sk@lo.com",
            id: 2,
            message: "sk",
            name: "luke",
            owner: 9
          }
        ]
      },
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

    return store.dispatch(deleteLeaders(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return ADD_LEADERS when addLeaders is OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: []
      });
    });

    const expectedActions = [
      { payload: { addLeader: "new leader added !" }, type: "GENERATE_MSG" },
      { payload: [], type: "ADD_LEADERS" }
    ];

    const store = mockStore({
      LeadersList: {
        leaders: [
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "lo@lo.com",
            id: 1,
            message: "Princess Organa",
            name: "leia",
            owner: 9
          },
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "sk@lo.com",
            id: 2,
            message: "sk",
            name: "luke",
            owner: 9
          }
        ]
      },
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

    return store.dispatch(addLeaders()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should return returnErrors when addLeaders is not OK", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: []
      });
    });

    const expectedActions = [
      { payload: { message: [], status: 400 }, type: "GET_ERRORS" }
    ];

    const store = mockStore({
      LeadersList: {
        leaders: [
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "lo@lo.com",
            id: 1,
            message: "Princess Organa",
            name: "leia",
            owner: 9
          },
          {
            created_at: "2020-02-21T12:44:23.633638Z",
            email: "sk@lo.com",
            id: 2,
            message: "sk",
            name: "luke",
            owner: 9
          }
        ]
      },
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

    return store.dispatch(addLeaders()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
