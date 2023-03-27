import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

import AppRouter from './routes/AppRouter'
import Footer from './components/footer/Footer'


function App() {
  return (
    <Provider store={store}>

      <AppRouter />

      <Footer />
    </Provider>
  )
}

export default App