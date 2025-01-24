import { client } from '@/sanity/lib/client'
import Ping from './Ping'
import { START_VIEWS_QUERY } from '@/sanity/lib/queries'
import { formatNumber } from '@/app/lib/utils'

const View = async ({ id }: { id: number}) => {
    const { views: totalViews } = await client.withConfig({useCdn: false}).fetch(START_VIEWS_QUERY, { id })

    //TODO: Update the number of views when user enter this page
    
  return (
    <div className="view-container">
        <div className="absolute -top-2 -right-2">
            <Ping />
        </div>

        <p className='view-text'>
            <span className='font-black'>{formatNumber(totalViews)}</span>
        </p>
    </div>
  )
}

export default View