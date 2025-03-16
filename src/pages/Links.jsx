import React from 'react'
import Header from '../components/Header'
import PhoneCard from '../components/PhoneCard'
import CustomizeLinks from '../components/CustomizeLinks'

const Links = () => {
  return (
    <>
      <Header />
      <main>
        <section className='links-section'>
          <div className="container links-section-wrapper">
            <PhoneCard />
            <CustomizeLinks/>
          </div>
        </section>
      </main>
    </>
  )
}

export default Links
