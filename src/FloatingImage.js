import './FloatingImage.css'

function FloatingImage(props){
    return(
    <div id='floating-img-container'>
        <img src={props.src} id='floating-img' ></img>
        <div id='base'></div>
    </div>
    );
}

export default FloatingImage;