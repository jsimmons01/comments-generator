import { Nav, NavItem, NavLink } from 'reactstrap'


const Header = () => {

  return (
    <div>
       
        
        <Nav className='my-3 nav-bar'fill tabs>
            <NavItem>
              <NavLink active className="nav-link" href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="nav-link" href="./components/CommentBuilder">Comment Builder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="nav-link" href="#">Resources</NavLink>
            </NavItem>
        </Nav>
        
   
    </div>
    
  )
}

export default Header