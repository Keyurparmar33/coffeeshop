import React from 'react'
import { Banner } from './Banner'
import { Aboutblog } from './About'
import { Category } from './Category'
import Product from './Product'
import Read from './Read'




export const Home_body = () => {
  return (
    <>
    <Banner/>
    <Aboutblog/>
    <Category/>
    <Product/>
    <Read/>
    </>
  )
}
