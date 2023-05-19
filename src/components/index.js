import React from 'react'
import Header from './Header'
import Inputs from './Inputs'
import TextArea from './TextArea'

function index() {
  return (
    <>
      <div className='m-5' style={{alignItems: "center"}}>
        <Header />
        <Inputs />
        <TextArea />
      </div>
    </>
  )
}

export default index
