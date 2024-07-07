import React from 'react'
import Hero from '../components/Hero'
import LatestBooks from '../components/LatestBooks'
import SearchResults from '../components/SearchResults'

const Home = () => {
    return (
        <div className='px-4 py-2 lg:px-16 lg:py-4'>
            <Hero />
            <SearchResults />
            <LatestBooks />
        </div>
    )
}

export default Home