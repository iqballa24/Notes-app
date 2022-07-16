import React from 'react'

const ContainerForm = (props) => {
  return (
    <div className='p-5 md:p-7 rounded-md shadow-md'>
        {props.children}
    </div>
  )
}

export default React.memo(ContainerForm)