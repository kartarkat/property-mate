import React from 'react'
import Layout from '../components/Layout/Layout'
import Home from './Home'
import ContactUs from '../pages/ContactUs/ContactUs'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/featured" element={<div>okkok</div>} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Route>
    </Routes>
  )
}

export default index