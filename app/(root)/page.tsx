import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCard';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';


const Home = async ({ searchParams } : {searchParams: Promise<{query?: string}>}) => {
  
  const query = (await searchParams).query

  const posts = await client.fetch(STARTUPS_QUERY)

  console.log(posts)


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
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          )  
          :
          <p className='no-results'>No startups found</p>}
        </ul>
    </section>
    </>
  )
}

export default Home