import './Hero.css';
// import heroMobile from '../public/images/hero-mobile.png';

function Hero() {
  return (
    <section className='Hero'>
      <div className='registration-outline'>
        <div className='registration'>
          <h1>STOCKHUNT</h1>
          <p>A Virtual Trading App to brush up your trading skills and take parts in various contest to complete with your friends and rank high on Leaderboard.Amazing Prizes for winners !</p>
          <h4>Pre-Register NOW !!</h4>

          <div className='input-email'>
          <input type='email'  placeholder='Your email address' id='email-id'></input>
          <div className='submit-email'><img src='images/Vector.png' alt='img'></img></div>
        </div>     
      </div>
      
      </div>
        <img src='images/hero-mobile.png' id='hero-mobile' alt='Img'></img>
      
    </section>
  );
}

export default Hero;
