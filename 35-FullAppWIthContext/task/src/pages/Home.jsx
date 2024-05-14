import React from 'react'
import Main from '../components/main/Main'
import Firstsection from '../components/firstsection/Firstsection'
import Cards from '../components/cards/Cards'
import SecondSection from '../components/secondSection/SecondSection'
import SecondCards from '../components/secondcardss/SecondCards'
import ThirdSection from '../components/thirdSection/ThirdSection '

const Home = () => {
  return (
    <div>
      <Main/>
      <Firstsection/>
      <Cards/>
      <SecondSection/>
      <SecondCards/>
      <ThirdSection/>
    </div>
  )
}

export default Home
