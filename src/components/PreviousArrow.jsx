import React from 'react'
import {GrFormPrevious} from 'react-icons/gr'
import {FaBars} from 'react-icons/fa'
import {MdArrowBackIos} from 'react-icons/md'
import '../assets/css/prev.css'

const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
  return (
      <MdArrowBackIos
       color={'#fff'}
      style={{ ...style, display: "block", color:'white', }}
      onClick={onClick}
      className={className}
      />
  )
}

export default PreviousArrow