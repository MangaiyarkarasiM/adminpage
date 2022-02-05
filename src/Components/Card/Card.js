import './Card.css'

function Card(props) {
    
    const col=props.color==='#f8f9fc' ? '': 'text-white-50';
    return(
        <div className={`${props.primaryClassName}`}>
            {props.value ? 
            <div className={`card card-style w-30 py-2 border-${props.className}`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs text-uppercase text-${props.className} mb-1`}>{props.title}</div>
                            <div className="h5 text-secondary">{props.value}</div>
                        </div>
                        <div className="col-auto">
                            <div className="text-muted">
                            {props.icon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :
            <div className={`card ${props.className} text-white`}>
                <div className="card-body">{props.children}
                    <div className={`small ${col}`}>{props.color}</div>
                </div>
            </div>}
        </div>  
    )
}

export default Card;