import React from 'react'

const index = () => {
  return (
    <div className='w-full relative shadow-md rounded-lg transition ease-in-out'>
        <input className='w-full p-5 pl-8 text-base text-left border-0 rounded-lg' placeholder="Cari catatan.." id="searchElement" type="text"></input>
    </div>
  )
}

export default React.memo(index)