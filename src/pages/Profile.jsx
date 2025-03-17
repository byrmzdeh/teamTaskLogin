import React from 'react'
import PhoneCard from '../components/PhoneCard'
import Details from '../components/Details'

const Profile = () => {
    return (
        <>
            <main>
                <section className='links-section'>
                    <div className="container links-section-wrapper">
                        <PhoneCard />
                        <Details />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile
