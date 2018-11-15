import { createStore } from 'redux'

import rootReducer from '../reducers'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX__DEVTOOLS_EXTENSION__ &&
      window.__REDUX__DEVTOOLS_EXTENSION__()
  )
  return store
}


export default configureStore