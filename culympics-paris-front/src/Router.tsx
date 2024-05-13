import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<DefaultLayout />}></Route>
    </Routes>
  )
}
