import './MediumCard.css'

const MediumCard = (props) =>{

    return(
            <div className="card mediumcard mb-4">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="text-primary">{props.title}</h6>
                    {props.dropdown===true? <div className="dropdown">
                        <button href="#" className="btn btn-primay dropdown" type="button" id="dropdownMenu" data-toggle="dropdown" aria-expanded="false"><i className="dropdowniconcolor fa fa-ellipsis-v" aria-hidden="true"></i></button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu">
                            <span className="dropdown-item-text font-weight-bold text-uppercase text-secondary">Dropdown Header:</span>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> 
                    : ""
                    }
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
    )
}

export default MediumCard;