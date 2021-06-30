import React, {useContext , useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext'
import Navbar from '../layouts/Navbar'

 const Changepswd = () => {
     const {getUser} =   useContext(AuthContext)
     useEffect ( () => {
          getUser()
          //eslint-disable-next-line
     }, [])
    return (
        <div>
            <Navbar/>
            Change password
        </div>
    )
}
 export default Changepswd