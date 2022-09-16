import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import "../App.css"

/**************************************************
 * -center navlinks
      
       -change active background
       -fix navlink background color
      
 */


const Header = () => {

  return (
   <div className="container my-4">
       
       
       <Nav>
          <NavItem active> <NavLink className="link" to="/" >Home</NavLink></NavItem>
          <NavItem><NavLink className="link" to='/builder'>Builder</NavLink></NavItem>
       </Nav>
     
     
   </div>
  )
}

export default Header