import React from 'react'
import'./RightSidebar.css'
import comment from '../../assets/commenticon.svg'
import pen from '../../assets/penicon.svg'
// import blacklogo from '../../assets/'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='14' />
                <p>Hello! My name is Muhammed Shah. I am creating this website using MERN Stack</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='14' />
                <p>I am currently in my Final year of Engineering. I am interested in doing Web development</p>
            </div>
        </div>

        <h4>Featured on Instagram</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='14' />
                <p>Third Vice-President of the Literature club, Saahitya</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='14' />
                <p>Director of Design at TEDxMVJCE for 3 TEDx events</p>
            </div>
        </div>

        <h4>Latest Tweets on Tech</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>30</p>
                <p>Photo unblur: Uses the power of Tensor G2 to remove blur and sharpen faces and entire images so you can "remaster" any image in your Google photos library.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>07</p>
                <p>iPhone 14 series buyers/iOS 16 users: How has your experience been? Underrated features? Any bugs?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget