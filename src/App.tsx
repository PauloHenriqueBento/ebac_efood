import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import AppRoutes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
