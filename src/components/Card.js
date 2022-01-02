import './Card.css'

function Card(props){
    return (
        <div className='Card'>
            <div className='Card-desc'>
                <img src={props.src} className='card-profile'  alt='Img'></img>
                <h1>{props.name}</h1>
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
            <div className='Card-links'>
                <a href={props.fb}><img src='Icons/fb.png' alt='img'></img></a>
                <a href={props.insta}><img src='Icons/insta.png' alt='img'></img></a>
                <a href={props.twitter}><img src='Icons/twitter.png' alt='img'></img></a>
                <a href={props.yt}><img src='Icons/yt.png' alt='img'></img></a>
            </div>
        </div>
    );
}

export default Card;