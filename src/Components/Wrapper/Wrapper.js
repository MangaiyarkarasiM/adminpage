import './Wrapper.css'
import NavItem from '../Navitem/NavItem';

function Wrapper(props) {
    
    return(
        <div id="wrapper">
            <ul className="sidebar navbar-nav bg-primary my-0 mx-0 collapse show" id="sideBar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div className="text-white font-weight-bold text-uppercase">Admin</div>
                </a>
                <hr className="sidebar-divider my-0"></hr>
                <NavItem className="nav-item" icon="fa fa-tachometer">Dashboard</NavItem>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading text-white-50 text-uppercase font-weight-bold ">Interface</div>
                <NavItem className="nav-item" icon="fa fa-cog">Components</NavItem>
                <NavItem className="nav-item" icon="fa fa-wrench">Utilities</NavItem>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading text-white-50 text-uppercase font-weight-bold ">Addons</div>
                <NavItem className="nav-item" icon="fa fa-folder">Pages</NavItem>
                <NavItem className="nav-item" icon="fa fa-area-chart">Charts</NavItem>
                <NavItem className="nav-item" icon="fa fa-table">Tables</NavItem>
                <hr className="sidebar-divider"></hr>
            </ul>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white my-0 mb-4">
                        <div className='container'>
                            <button className="btn btn-link rounded-circle mr-3" type="button" data-toggle="collapse" data-target="#sideBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <form className="d-sm-inline-block form-inline navbar-search">
                                <div className="input-group">
                                    <input className="small border-0 bg-light" type="input" placeholder="Search for..."></input>
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;