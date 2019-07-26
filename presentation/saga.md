![bg original](first-bg.png)

# Redux Saga Introduction

###### August 2018

---

![bg original](second-bg.png)

# What is not Saga?

---

![bg original](whatsnot.png)

---

![bg original](second-bg.png)

# Saga is a process manager for complex systems.

Sagas is a Redux middleware that makes handling those cases easier, and more pure.

Please, don't put business logic in process managers.

###### Now: Next slide: User story!

---

![bg original](productcycle.png)

---

![bg original](second-bg.png)

### Saga Hierarchy

# ![](sagadetails.png)

---

![bg original](second-bg.png)

## Thunk vs Saga

There are two common ways of dealing with side effects in Redux applications. Thunk is a function that already has everything it needs to execute. In Redux actions are defined with simple objects. And the main benefit of thunk that it allows to send a function instead. So you already able to write some logic to execute immediately and dispatch other actions.

---

![bg original](second-bg.png)

```js
export const requestOrganization = () => ({
  type: REQUEST_ORGANIZATION
});

export const successReceiveOrganization = organization => ({
  type: RECEIVE_ORGANIZATION_SUCCESS,
  organization
});

export const failReceiveOrganization = error => ({
  type: RECEIVE_ORGANIZATION_FAIL,
  error
});

// will go through thunk middleware
export const fetchOrganization = id => dispatch => {
  dispatch(requestOrganization());

  const url = `/organization/`;

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(successReceiveOrganization(json)))
    .catch(err => dispatch(failReceiveOrganization(err)));
};
```

---

![bg original](second-bg.png)

### Saga

A few short words about Saga approach. Saga is just a series of connected stories. Saga are Long Lived Transaction that can be written as a sequence of transactions that can be interleaved. All transactions in the sequence complete successfully or compensating transactions are ran to amend a partial execution. Compensation transaction are able to undo or add some info about transaction or it’s fail.

---

![bg original](second-bg.png)

```js
import { put, takeEvery } from "redux-saga/effects";

const url = "/api/data/get";

// define fetch saga
// it contains success and fail steps for fetch scenario
export function* requestFetch() {
  // dispatch FETCH_DATA action
  yield put({ type: "FETCH_DATA" });
  // wrap our code to catch errors if something went wrong
  try {
    // fetch data in async way and write it into dataJSON since payload is resolved (2)
    const dataJSON = yield fetch(url, { "content-type": "application/json" });
    // parse JSON into object data
    const data = yield dataJSON.json();
    // since parse process is finished, dispatch FETCH_DATA_SUCCESS with payload
    yield put({ type: "FETCH_DATA_SUCCESS", data });
  } catch (error) {
    // if something goes wrong dispatch FETCH_DATA_FAIL with error payload to handle it outside
    yield put({ type: "FETCH_DATA_FAIL", error });
  }
}

export default function* rootSaga() {
  // spawn a new requestFetch on each REQUEST_FETCH action
  yield takeEvery("REQUEST_FETCH", requestFetch);
}
```

---

![bg original](second-bg.png)

### Pros: Testability

---

![bg original](second-bg.png)

```js
describe('requestFetch generator check', () => {
  const gen = requestFetch();

  it('should return an action, which will be dispatched by redux-saga', () => {
      expect(gen.next()).toEqual(put({ type: 'FETCH_DATA' }));
  });

  it('should return fetch promise to resolve data', () => {
      expect(gen.next().value instanceof Promise).toBe(true);
  });

  it('should successfuly parse payload JSON into Object', () => {
      expect(gen.next().value instanceof Object).toBe(true);
  });

  it('should return an action, which will be dispatched by redux-saga', () => {
      expect(gen.next().value.type).toEqual(put({ type: 'FETCH_DATA_SUCCESS', {} }).type);
  });
};

```

---

![bg original](monitors.png)

---

![bg original](monitors2.png)

---

![bg original](sagaend.png)

---

# TENK you :heart:

You can contribute this documentation on GitHub.
