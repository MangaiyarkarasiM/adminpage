
const Progress = (props)=>{

    return(
        <div className="text-secondary">
            <h4 className="small font-weight-bold">{props.children} {props.value === 100? <span className="float-right">Complete!</span> : <span className="float-right">{props.value}%</span>}</h4>
            <div className="progress mb-4">
                <div style={{width: `${props.value}%`}} className={`progress-bar ${props.className}`} role="progress-bar" aria-valuenow={`${props.value}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}

export default Progress;