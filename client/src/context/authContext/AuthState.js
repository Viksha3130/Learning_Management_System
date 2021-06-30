import React , {useReducer} from 'react';
import axios from 'axios';
import AuthContext from '../authContext/authContext';
import authReducer from '../authContext/authReducer';
import setToken from '../../utils/setToken'
import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN,
    SET_ERROR,
    CLEAR_ERROR,
    LOG_OUT,
    SET_USER,
    AUTH_ERROR,
    ADD_USER,
    USER_ERROR,
    EDIT_USER,
    UPDATE_USER,
    CLEAR_EDIT,
    CLEAR_USER
  } from '../types'
  


 const AuthState = (props) => {
     const initialState={
         user : null ,
         userAuth : null,
         errors : null,
         editUser: null,
     }
      const [state , dispatch] = useReducer(authReducer , initialState)


   //getUser


   const getUser = async () => {
    if(localStorage.token ){
        setToken(localStorage.token)
      }
      try{
           const res = await axios.get('/auth')
           dispatch({
               type:SET_USER,
               payload: res.data
           })
      } catch(err){
         dispatch({
             type: AUTH_ERROR,
             payload:err
         })
      }
   }

   //register user

   const registerUser = async userData => {
       const config = {
           header : {
               'Content-Type' : 'application/json'
           }
       }
         try{
              const res = await axios.post('/register', userData , config)
              dispatch({
                type : SUCCESS_REGISTER , 
                payload: res.data
              })

         } catch(err){
             dispatch({
                 type: FAIL_REGISTER , 
                 payload:err.response.data
             })


         }
   }
    //login user

    const loginUser = async userData => {
        const config = {
            header : {
                'Content-Type' : 'application/json'
            }
        }
          try{
               const res = await axios.post('/auth', userData , config)
               dispatch({
                 type : SUCCESS_LOGIN , 
                 payload: res.data
               })
 
          } catch(err){
              dispatch({
                  type: FAIL_LOGIN , 
                  payload:err.response.data
              })
 
 
          }
    }

 //Logout user
  const logout = () => {
      dispatch({
          type:LOG_OUT
      })
  }



   const setError = err => {
       dispatch({
          type:SET_ERROR,
          payload:err
       })
   }
   const clearError =()=> {
    dispatch({
       type:CLEAR_ERROR
    })
}

// Add User

const addUser = async (user) => {
    const config = {
      'Content-Type': 'application/json'
    }
    try {
      const res = await axios.post('/register', user, config)
      dispatch({
        type: ADD_USER,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg
      })
    }
  }
// update user

const update_user = async (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.put(`/register/${user._id}`, user, config)
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    })
    getUser()

  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}
 // Edit user
 const edit_user = (user) => {
  dispatch({
    type: EDIT_USER,
    payload: user
  })
}
const clearEdit = () => {
  dispatch({
    type: CLEAR_EDIT
  })
}
const clearUser = () => {
  dispatch({
    type: CLEAR_USER
  })
}
    return (
        <AuthContext.Provider value={{
            user:state.user,
            userAuth : state.userAuth , 
            errors:state.errors,
            editUser: state.editUser,
            getUser:getUser,
            registerUser,
            loginUser,
            logout,
            setError,
            clearError,
            addUser,
            edit_user,
            clearEdit,
            update_user,
            clearUser
        }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthState