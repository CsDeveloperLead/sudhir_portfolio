import { AuthProvider } from './Components/AuthContext'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
      </AuthProvider>
    </>
  )
}

export default App
