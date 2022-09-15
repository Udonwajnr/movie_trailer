import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

const NextArrow = (props) => {
   const { className, style, onClick } = props;
  return (
      <MdArrowForwardIos
       color={'#fff'}
       style={{ ...style, display: "block" }}
       onClick={onClick}
       className={className}
      />
  )
}

export default NextArrow