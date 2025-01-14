import React, { memo } from 'react'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <>
    <section className='pink_container'>

      <div className='heading'>Pitch Your Startup, <br/>Connect With Entrepreneurs </div>

      <p className='sub-heading !max-w-3xl'>
        Submit Ideas, Vote on Pitches and Get Noticed in Virtual
      </p>

      <SearchForm />

    </section>
    </>
  )
}

export default memo(Home)