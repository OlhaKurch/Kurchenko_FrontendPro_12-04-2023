import './Main.css';

function Main() {
  return (
    <div className='main'> 
        <section className="main-text">
            <p className="label">A Hiking guide</p>
            <h1 className="main-text__title">Be prepared for the Mountains and beyond!</h1>
            <button className="main-text__link">scroll down</button>
    </section>
        <section className="presentation">
            <article className="presentation__item presentation__item--first" >
                <div className="presentation__about">
                    <p className="label label--mr24">GEt Started</p>
                    <h2 className="presentation__title">What level of hiker are you?</h2>
                    <p className="presentation__text">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                    <button className="presentation__link">read more</button>
                    <div className="presentation__bg">
                        01
                    </div>
                </div>
                               
            </article>
            <article className="presentation__item">
                <div className="presentation__about" id="block02">
                    <p className="label label--mr28">Hiking Essentials</p> 
                    <h2 className="presentation__title">Picking the right Hiking Gear!</h2>
                    <p className="presentation__text">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
                    <button className="presentation__link">read more</button>
                    <div className="presentation__bg">
                        02
                    </div>
                </div>                
            </article>          
            <article className="presentation__item presentation__item--first" >
                <div className="presentation__about">
                    <p className="label label--mr24">GEt Started</p>
                    <h2 className="presentation__title">What level of hiker are you?</h2>
                    <p className="presentation__text">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                    <button className="presentation__link">read more</button>
                    <div className="presentation__bg">
                        01
                    </div>
                </div>
                               
            </article>
            <article className="presentation__item">
                <div className="presentation__about" id="block02">
                    <p className="label label--mr28">Hiking Essentials</p> 
                    <h2 className="presentation__title">Picking the right Hiking Gear!</h2>
                    <p className="presentation__text">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
                    <button className="presentation__link">read more</button>
                    <div className="presentation__bg">
                        02
                    </div>
                </div>
                
            </article>      
        </section>
    </div>
    
  );
}

export default Main;