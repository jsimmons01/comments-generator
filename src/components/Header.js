import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'




const Header = () => {

  return (
   <div>
       <Navbar expand="lg" className='nav-bar'>
       
       <Nav className='me-auto'>
          <NavItem> <Link to="/"><NavLink active >Home</NavLink></Link> </NavItem>
          <NavItem><Link to='/commentBuilder'><NavLink>Comment Builder</NavLink></Link></NavItem>
          <NavItem> <Link to='/resources'><NavLink  >Resources</NavLink></Link></NavItem>
            
             
            
          
       </Nav>
     
      
       </Navbar>   
   </div>
     
       
        
   
   
    
  )
}

export default Header