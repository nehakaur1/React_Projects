import React, { useContext } from 'react'
import Mybox from '../Context'

function Zero() {
    const {username} =useContext(Mybox)
  return (
    <div>{username}</div>
  )
}

export default Zero