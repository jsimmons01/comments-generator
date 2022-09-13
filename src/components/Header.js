import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import "../App.css"




const Header = () => {

  return (
   <div className="container">
       <Navbar light color='light' expand="md" className='nav-bar my-3'>
       
       <Nav fill>
          <NavItem> <NavLink className='nav-link' to="/" active >Home</NavLink></NavItem>
          <NavItem><NavLink className='nav-link' to='/builder'>Builder</NavLink></NavItem>
          <NavItem><NavLink className='nav-link' to='/resources'>Resources</NavLink></NavItem>    
       </Nav>
     
      
       </Navbar>   
   </div>
     
       
        
   
   
    
  )
}

export default Header