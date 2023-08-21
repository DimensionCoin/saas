import Image from 'next/image'
import React from 'react'

interface EmptyProps {
    label: string,
}

export const Empty = ({label}: EmptyProps) => {
  return (
    <div className='h-full p-15 flex flex-col items-center justigy-center'>
        <div className='relative h-60 w-60'>
        <Image
        alt='empty'
        fill
        src="/empty.png"/>
        </div>
        <p>{label}</p>
    </div>
  )
}

