import ReviewCard from '@/widgets/reviewCard/reviewCard'

import { reviews } from './mockreviews'

export default function Reviews() {
  return (
    <div className='container'>
      <div className='grid grid-cols-2 gap-6'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.author}
            author={review.author}
            text={review.text}
          />
        ))}
      </div>
    </div>
  )
}
