import React from 'react'
import './Home.css'
import Navbar from '../../componects/Navbar/Navbar'
import img1 from './money2.png'

const Home = () => {
  return (
    <div className='home-page'>
      <Navbar />
      <div className='home-container'>
        <div className='home-img'>

          <img src={img1} className='img-height' />
        </div>
        <div className='home-card'>
          <h1>Expanse Tracker💰💵🫰</h1>
          <p className='para'>"Expanse Tracker" is a budget management website, it likely helps users track and manage their expenses, income, and overall financial situation.

         Expanse Tracker is your go-to platform for managing your budget with ease. Take control of your financial journey by tracking your income and expenses effortlessly.</p>

         <span className='second-para'>Record and categorize your sources of income, whether it's your salary, side hustle, or any other form of earnings.</span>
         <span className='second-para'>Clearly visualize your total income and total debit income, giving you a comprehensive snapshot of your financial health.</span>
         <span className='second-para'>Tailor your budget categories to suit your unique lifestyle. Whether it's bills, groceries, or entertainment, Expanse Tracker adapts to your needs.</span>

        </div>
      </div>

    </div>
  )
}

export default Home
