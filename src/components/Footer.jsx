import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px', marginTop:'100px'}} className='mt-5 w-full bg-red-300'>
     <div className="flex flex-between">
      {/* intro */}
      <div style={{width:'400px'}} className='w-1/4'>
        <h5 className='text-xl font-bold mt-5'><i className="fa-solid fa-truck-fast me-2"></i>E-CART</h5>
        <p className='text-m font-mono'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p className='text-m font-mono'>Code licensed MIT, docs CC BY 3.0.</p>
        <p className='text-m font-mono'>Currently v5.3.2.0</p>
      </div>
      {/* links */}
      <div className=" flex flex-col w-1/4" style={{width:'400px'}}>
        <h5 className='text-xl font-bold mt-5'>Links</h5>
        <Link to={'/'} className='text-m font-mono;'>Home Page</Link>
        <Link to={'/wishlist'}  className='text-m font-mono;'>Wishlist Page</Link>
        <Link to={'/:id/view'}  className='text-m font-mono;'>View Page</Link>
        <Link to={'/cart'}  className='text-m font-mono;'>Cart</Link>

      </div>
      {/* guides */}
      <div className="flex flex-col w-1/4">
        <h5 className='text-xl font-bold mt-5'>Guides</h5>
        <a className='text-m font-mono;' href="https://react.dev/" target='_blank'>React</a>
        <a className='text-m font-mono;' href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
        <a className='text-m font-mono;' href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>

        </div>
      {/* contact */}
      <div className="flex flex-col">
        <h5 className='text-xl font-bold mt-5'>Contact</h5>
        <div className="flex justify-evenly">
        <input className='rounded p-1' style={{width:'300px'}} type='text' placeholder='Enter Your Email Here!'/>
          <button className='text-xl'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="flex justify-between mt-3">
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'>
          <i className="fa-brands fa-twitter"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'>
          <i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'>
          <i className="fa-brands fa-facebook"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'>
          <i className="fa-brands fa-linkedin"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'>
          <i className="fa-brands fa-github"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'>
          <i className="fa-brands fa-phone"></i></a>
        </div>
      </div>
     </div>
     <p className="text-center mt-3">Copyright &copy; July 2024 Batch, Media player App. Built with React</p>
    </div>
  )
}

export default Footer