import React from 'react'
import Layout from '../components/Layout/Layout'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
import ContactUs from '../pages/ContactUs/ContactUs'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/featured" element={<div>okkok</div>} />
        <Route path="/contactUs" element={<ContactUs />} />


        {/* <Route path="about" element={<About />} />
      <Route path="web-design" element={<WebDesign />} />
      <Route path="web-dev" element={<WebDev />} />
      <Route path="frontend" element={<Frontend />} />
      <Route path="node" element={<Node />} />
      <Route path="seo" element={<SEO />} />
      <Route path="php" element={<PHP />} />
      <Route path="who-we-are" element={<AboutWho />} />
      <Route path="our-values" element={<OurValues />} /> */}
        <Route path="*" element={<p>Not found!</p>} />
      </Route>
    </Routes>
  )
}

export default index