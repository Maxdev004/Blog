import { formatDate } from '@/app/lib/utils'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }: {params: Promise<{ id: string }>}) => {
    const id = (await params).id

    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })

    if(!post) return notFound()

  return <>

    <section className='pink_container !min-h-[230px]'>
      <p className='tag'>{formatDate(post?._createdAt)}</p>

      <h1 className='heading'>{post.title}</h1>
      <p className='sub-heading !max-w-5xl'>{post.description}</p>
    </section>

    <section className='section_container'>
      <img src={post.image} alt='thumbnail' className='w-full h-auto rounded-xl'/>

      <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
        <div className='flex-between gap-5'>
          <Link href={`/user/${post.author?.}`}></Link>
        </div>
      </div>
    </section>

  </>
}

export default page