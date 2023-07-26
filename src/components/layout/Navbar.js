import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './Navbar.module.css'
import logo from '../../img/cashwave_logo.png'

function Navbar (){
return(
    <nav className={styles.navbar}>
        
        <Container>
            <Link to="/">
                <img src={logo} alt="CashWave"/>
            </Link>
            <ul class={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/Company">Empresa</Link></li>
                <li className={styles.item}><Link to="/Contact">Contato</Link></li>
            </ul>
        
        </Container>
      </nav>
)

}

export default Navbar