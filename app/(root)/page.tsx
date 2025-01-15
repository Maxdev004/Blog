import SearchForm from '@/components/SearchForm'
import React, { memo } from 'react'


const Home = async ({ searchParams } : {searchParams: Promise<{query?: string}>}) => {

  const posts = [
    {
      _createdAt: "Yesterday",
      views: "55",
      author: {_id: 1},
      _id: 1,
      description: 'This is a desxription',
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewsroom.porsche.com%2Fen_US%2F2024%2Fproducts%2Fporsche-new-911-world-premiere-hybrid-36337.html&psig=AOvVaw1bUB-WSca2TaJ6vVefpgeW&ust=1737009749076000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND267yP94oDFQAAAAAdAAAAABAE",
      category: "Robots",
      title: "We Robots"
    },
  ];

  const query = (await searchParams).query

  return (
    <>
    <section className='pink_container'>

      <div className='heading'>Pitch Your Startup, <br/>Connect With Entrepreneurs </div>

      <p className='sub-heading !max-w-3xl'>
        Submit Ideas, Vote on Pitches and Get Noticed in Virtual
      </p>

      <SearchForm query={query}/>

    </section>

    <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 
          ? 
          (
            posts.map((post, index: number) => (
              <StartupCard />
            ))
          )  
          :
          ""}
        </ul>
    </section>
    </>
  )
}

export default memo(Home)