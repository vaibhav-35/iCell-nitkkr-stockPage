import './Section3.css';
import FloatingImage from './FloatingImage';
import FeatureRectangle from './FeatureRectangle';
function Section3(){
    return (
        <section className='section3'>
        <div className='section3-top'>
            
            <h1>ABOUT OUR APP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        </div>

        <div className='section3-bottom'>

            <FloatingImage src='images/Section3Mobile.png' />

            <div className='section3-bottom-right'>
                <FeatureRectangle content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit." heading="CREATIVE DESIGN"/>

                <FeatureRectangle content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit." heading="EASY TO USE"/>

                <FeatureRectangle content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit." heading="BEST USER EXPERIENCE"/>
            </div>

        </div>
        </section>
    );
}


export default Section3;