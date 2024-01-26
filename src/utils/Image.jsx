import React from 'react'

const Image = ({sorce,alter, style}) => {
  return (
    <img className={style} src={sorce} alt={alter} />
  )
}

export default Image