import './NavItems.css'
import { Link } from 'react-router-dom';


const GetNavElement = (props) => {
    return (
    <>
        <Link to = {`${props.to}`}className='item'>
        <span className="material-symbols-outlined">{props.symbol}</span>
        {props.name}
        </Link>
    </>
    );
}

const NavItems = (
    <div className='nav-items'>
        <GetNavElement name = 'Home' symbol = 'home' to = '/'/>
        <GetNavElement name = 'My Cart' symbol = 'shopping_cart' to='/cart'/>
        <GetNavElement name = 'Logout' symbol = 'logout' to='/'/>
      </div>
);


export default NavItems;