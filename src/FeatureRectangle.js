import './FeatureRectangle.css';

function FeatureRectangle(props){
    return(
        <div className='FeatureRectangle'>
            <div className='FeatureRectangle-left'><img src='images/tick.png'></img></div>
            <div className='FeatureRectangle-right'>
                <h3>{props.heading}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default FeatureRectangle;