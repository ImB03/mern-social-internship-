import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_SEARCH,
  SEARCH_TERM,
} from "../slice/searchSlice";
import { searchTerm, search } from "../../api";
import { SET_USERS } from "../slice/slice";

// SEARCH
function* Search(action) {
  try {
    const response = yield call(() => search(action.payload));
    yield put(SET_USERS({ response, users: response.data }));
  } catch (error) {
    yield put(SET_USERS({ response: error.response }));
    console.log(error);
  }
}

function* SearchSaga() {
  yield takeEvery(ACTION_SEARCH, Search);
}

export default SearchSaga;
