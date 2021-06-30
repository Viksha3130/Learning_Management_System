import React, {useContext , useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext'
import Navbar from '../layouts/Navbar'
import Quizpage from '../../quiz/quizcomponents/Quizpage'
import Assesmentpage from '../../assesment/component/Assesmentpage'

 const Studentpage = () => {
     const {getUser} =   useContext(AuthContext)
     useEffect ( () => {
          getUser()
          //eslint-disable-next-line
     }, [])
    return (
        <div>
            <Navbar/>
            Welcome!!
            <Quizpage/>
            <Assesmentpage/>
        </div>
    )
}
 export default Studentpage