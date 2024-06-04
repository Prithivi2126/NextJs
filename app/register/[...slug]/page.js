import React from 'react'

const Form = ({params}) => {
  return (
    <div>Form : {params.slug[0]} / {params.slug[1]}</div>
  )
}

export default Form