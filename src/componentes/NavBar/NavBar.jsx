import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    <h1>Endurance Fit</h1>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="categoria/2">Proteinas</NavLink>
                        </li>
                        <li>
                            <NavLink to="categoria/3">Creatinas</NavLink>
                        </li>
                        <li>
                            <NavLink to="categoria/4">Snacks</NavLink>
                        </li>
                    </ul>
                </nav>

                <CartWidget />

            </header>


        </div>
    )
}

export default NavBar

