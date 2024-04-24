import React from 'react'

const ReviewCard = ({ author, text }: { author: string; text: string }) => (
  <div className='flex flex-col p-4 rounded-xl shadow-md'>
    <div className='flex justify-between'>
      <div className='font-medium text-lg'>{author}</div>
      <span className='text-gray-600 text-sm'>24.04.2024</span>
    </div>
    <hr />
    <div className='mt-2'>
      <p>{text}</p>
    </div>
  </div>
)

export default ReviewCard
