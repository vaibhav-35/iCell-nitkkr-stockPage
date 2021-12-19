import './Section2.css';
import FloatingImage from './FloatingImage';
import StatRectangle from './StatRectangle'


function Section2(){
    return(
    <section className='Section2'>
        <div  className='Section2-left'>
            <h2>DOWNLOAD APP NOW</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
            <div className='download-btn'>
            <img src='images/PlayStore.png'></img>
            <img src='images/AppleStore.png'></img>
            </div>
            <div className='stats'>
                <StatRectangle src='Icons/download.png' value="59865" message="DOWNLOAD"/>
                <StatRectangle src='Icons/like.png' value="29582" message="LIKES"/>
                <StatRectangle src='Icons/star.png' value="1500" message="5 STAR RATING"/>
            </div>

        </div>

        <FloatingImage src='images/Section2Phone.png' height="60vh"/>
    </section>  
    );
}

export default Section2;