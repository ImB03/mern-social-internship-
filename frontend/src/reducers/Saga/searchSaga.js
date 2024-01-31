import { call, put, takeEvery } from "redux-saga/effects";

import { ACTION_SEARCH_TERM, SEARCH_TERM } from "../slice/searchSlice";
import { searchTerm } from "../../api";

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

function* SearchSaga() {
  yield takeEvery(ACTION_SEARCH_TERM, SearchTerm);
}

export default SearchSaga;
