import { call, put, takeEvery } from "redux-saga/effects";

import {
  ACTION_SEARCH,
  ACTION_SEARCH_TERM,
  SEARCH,
  SEARCH_TERM,
} from "../slice/searchSlice";
import { searchTerm, search } from "../../api";

// SEARCH TERM
function* SearchTerm(action) {
  try {
    const response = yield call(() => searchTerm(action.payload));
    yield put(SEARCH_TERM({ response }));
  } catch (error) {
    yield put(SEARCH_TERM({ response: error.response }));
    console.log(error);
  }
}

// SEARCH
function* Search(action) {
  try {
    const response = yield call(() => search(action.payload));
    yield put(SEARCH({ response }));
  } catch (error) {
    yield put(SEARCH({ response: error.response }));
    console.log(error);
  }
}

function* SearchSaga() {
  yield takeEvery(ACTION_SEARCH_TERM, SearchTerm);
  yield takeEvery(ACTION_SEARCH, Search);
}

export default SearchSaga;
