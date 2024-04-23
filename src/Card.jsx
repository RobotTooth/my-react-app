import profilePic from "./resources/images/profile_picture.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Chris</h2>
      <p className="card-text">
        I am a Site Visit Agent collecting data from commercial site on behalf
        of utilities companies. I am also self taught front end developer. My
        hobbies include watching movies, playing video games and reading science
        fiction and fanatsy novels.
      </p>
    </div>
  );
}

export default Card;
