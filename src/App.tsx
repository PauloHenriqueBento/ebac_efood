import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import AppRoutes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
