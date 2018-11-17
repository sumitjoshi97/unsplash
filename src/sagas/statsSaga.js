import { take, put, call, fork } from 'redux-saga/effects'

import { IMAGES } from '../constants'
import { fetchImageStats } from '../api'
import { loadImageStats, setImageStats, setImageStatsError } from '../actions'

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id))
      const response = yield call(fetchImageStats(id))
      console.log(response)
      yield put(setImageStats(id, response.downloads))
      return true
    } catch (error) {}
  }
  yield put(setImageStatsError(id))
}

export default function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS)

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id)
    }
  }
}
