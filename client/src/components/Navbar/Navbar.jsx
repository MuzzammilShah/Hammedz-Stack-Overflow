import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/navbarLogo.png'
import search from '../../assets/searchicon.png'
import Avatar from '../../components/Navbar/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

export const Navbar = () => {

    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    
    useEffect(() => {
        // const token = User.token
        // if(token){
        //     const decodedToken = decode(token)
        //     if(decodedToken.exp * 1000 < new Date().getTime()){
        //         handleLogout()
        //     }
        // }
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
    },[dispatch])
   
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>ABOUT</Link>
            <Link to='/' className='nav-item nav-btn'>PRODUCTS</Link>
            <Link to='/' className='nav-item nav-btn'>FOR TEAMS</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" width="24" className='search-icon'/>
            </form>
            { User === null ?
                <Link to='/Auth' className='nav-item nav-links'>LOGIN</Link> :
                <>
                <Avatar backgroundColor='#ffffff' px="10px" py="5px" borderRadius="50%" color='black'><Link to={`/Users/${User.result._id}`} style={{color:"#e6792b", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>LOGOUT</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar