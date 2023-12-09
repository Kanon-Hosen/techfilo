"use client"

import { Provider } from "react-redux"
import store from "./store"

function ReduxRootProvider({children}) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxRootProvider