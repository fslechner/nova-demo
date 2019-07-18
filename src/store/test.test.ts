import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: "FETCH_DATA_SUCCESS"
  };
}

function fetchData() {
  return (dispatch: any) => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1") // Some async action with promise
      .then(() => dispatch(success()));
  };
}

it("gremlins", () => {
  const store = mockStore({});

  // Return the promise
  return store.dispatch<any>(fetchData()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(success());
  });
});
