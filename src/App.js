import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'

import {AppRouter} from './routes'
import Footer from './components/footer/Footer'
import HeaderNav from './layouts/Nav'

function App() {
  return (
    <Provider store={store}>
      <HeaderNav />

   <>
      <AppRouter />

      <Footer />
   </>
    </Provider>
  )
}

export default App