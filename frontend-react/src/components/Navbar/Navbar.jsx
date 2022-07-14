import React,{useState} from 'react';
import './Navbar.scss';
import {images} from '../../constants';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';



const Navbar = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='Logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home','about','Skills','project','contact'].map((items)=>(
         <li className='app__flex p-text' key={`link-${items}`}>
          <a href={`#${items}`}>{items}</a>
         </li> 
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=> setToggle(true)} />
        {Toggle&& (
        <motion.div whileInView={{x:[300,0]}} transition={{ duration:0.5,ease:'easeOut' }}>
          <HiX onClick={()=> setToggle(false)} />
          <ul>
            {['home','about','Skills','project','contact'].map((items)=>(
              <li className='app__flex p-text' key={`${items}`}>
                <a href={`#${items}`}>
                  {items}
                </a>
              </li> 
            ))}
          </ul>
        </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar