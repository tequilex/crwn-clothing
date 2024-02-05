import {call, all, takeLatest, put} from 'redux-saga/effects';

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.action';

import CATEGORIES_ACTION_TYPES from './categories.types';


export function* categoriesFetchAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments)
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}



export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, categoriesFetchAsync)
}

export function* categoriesSaga() {
  yield all([
    call(onFetchCategories)
  ])
}