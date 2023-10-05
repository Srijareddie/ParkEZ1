import { NavLink } from "react-router-dom"
const NavItem = ({path, text}) => {
    return(
        <li>
            <NavLink to={path} className={({isActive}) => isActive ? "active" : "" }>
                {text}
            </NavLink>
        </li>
    )
}

export default NavItem