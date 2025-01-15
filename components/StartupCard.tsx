import { formatDate } from '@/app/lib/utils'
import { EyeIcon, Link } from 'lucide-react'
import React from 'react'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {

    const { _createdAt, views, author: { _id: authorId, name }, title, category, _id, image } = post;

  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary'/>
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>

        <div className='flex between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className=''>{name}</p>
                </Link>
            </div>
        </div>
    </li>
  )
}

export default StartupCard