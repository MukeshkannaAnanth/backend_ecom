import React from 'react';
import styles from '../../styles/style';
import { navItems } from '../../static/data';
import { Link } from 'react-router-dom';

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.noramlFlex}`}>
      {
        navItems && navItems.map((i,index)=> (
            <Link to={i.url}
            className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
            {i.title}
            </Link>
        ))
      }
    </div>
  )
}

export default Navbar
