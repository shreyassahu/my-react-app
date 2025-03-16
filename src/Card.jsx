 import profilePic from './assets/LinkedIn_Profile_Pic.jpeg'
 function Card() {
    return (
        <div className="card">
            <img id="profile-pic" src={profilePic} alt="Shreyas Image" />
            <h2 className='card-title'>Shreyas Sahu</h2>
            <p className='card-text'>I am a Software Engineer and play tennis.</p>
        </div>
    );
 }

 export default Card