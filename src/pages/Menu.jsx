import { Link, NavLink } from "react-router-dom"
const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/products/101/tanvir">Product</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/profile/ichbintanvir">Profile</NavLink></li>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/profile">Profile</Link></li> */}
            </ul>
        </div>
    );
}
export default Menu;