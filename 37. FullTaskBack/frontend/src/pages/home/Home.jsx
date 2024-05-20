import React from 'react'
import "./home.css"
import { Header } from './../../../src/components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import Pages from '../../components/pagesSection/Pages'
import ImagePage from '../../components/imagePage/ImagePage'
import Categorypage from '../../components/categoryPage/Categorypage'
import LatestProducts from '../../components/latestProducts/LatestProducts'
import EmailPage from '../../components/emailPage/EmailPage'
import Footer from '../../components/footer/Footer'
export const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Pages/>
    <ImagePage/>
    <Categorypage/>
    <LatestProducts/>
    <EmailPage/>
    <Footer/>
    </>
  )
}
