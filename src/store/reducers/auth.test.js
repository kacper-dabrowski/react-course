import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: "/",
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should store the token upon login", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.AUTH_SUCCESS,
        idToken: "idToken",
        userId: "someId",
      })
    ).toEqual({ ...initialState, token: "idToken", userId: "someId" });
  });
});
