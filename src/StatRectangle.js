import './StatRectangle.css'

function StatRectangle(props){
    return(
        <div id='statrectangle'>
            <img src={props.src}></img>
            <p>{props.value}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default StatRectangle;