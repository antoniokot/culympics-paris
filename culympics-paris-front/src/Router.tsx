import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { Explore } from './pages/Explore'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/explore" element={<Explore />}></Route>
      </Route>
    </Routes>
  )
}
