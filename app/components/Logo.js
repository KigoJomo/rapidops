import Image from 'next/image'
import React from 'react'

const Logo = ({ white = false }) => {
  return (
    <div className="logo">
      <Image src={`${white ? '/images/logowhite.png' : '/images/logo.png'}`} alt="logo" width={100} height={100} />
    </div>
  )
}

export default Logo
