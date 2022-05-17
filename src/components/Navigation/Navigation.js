import {Link} from "react-router-dom"

export default function Navigation() {
    let user = localStorage.getItem('user');
   
    return (
        <nav>
            <Link to="/catalog">All games</Link>
            {user
                ? <div id="user">
                    <Link to="/create-game">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                : <div id="guest">
                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>
                </div>
            }
        </nav>
    )



}