import React from 'react'
import { useDispatch } from 'react-redux'
import { updateFeild } from '../Features/User/UserSlice'

const UserForm = () => {
    const Dispatch = useDispatch()
  return (
    <form action="">
        <input type="text" onChange={(e)=>Dispatch(updateFeild({firstName : "", value:e.target.value}))}/>
    </form>
  )
}

export default UserForm