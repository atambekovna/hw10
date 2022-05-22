import NavBar from '../navbar/NavBar'
import Author from '../Author/Author'

import './Header.css'

function Header() {
    return(
        <div>
            <NavBar/>
            <hr />
            <Author/>
        </div>
    )
}

export default Header