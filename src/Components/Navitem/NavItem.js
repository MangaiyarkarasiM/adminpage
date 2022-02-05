import './Navitem.css';

const NavItem = (props) =>{

    return(
        <li className={`${props.className}`}>
            <a className="text-white" href="#">
                <i className={`white ${props.icon}`}></i>
                <span> {props.children}</span>
                </a>
        </li>
    )
}

export default NavItem;