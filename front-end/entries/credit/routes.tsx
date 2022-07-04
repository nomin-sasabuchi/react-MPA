import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/credit/index/'
import Confirm from '@/pages/credit/confirm/'
import Complete from '@/pages/credit/complete/'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/confirm/`} element={<Confirm />} />
        <Route path={`/complete/`} element={<Complete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
