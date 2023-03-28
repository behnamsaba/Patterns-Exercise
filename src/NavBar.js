import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = ({AllDogs}) => {
    console.log(AllDogs);
    return(
        <nav>
            {AllDogs.map((dog) => <NavLink to={'/dogs/' + dog.name}>{dog.name}</NavLink>)}
        </nav>
    )
}

export default NavBar