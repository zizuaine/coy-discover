import './ProfileCard.css';

export type Profile = {
  id: string;
  name: string;
  age: number;
  photoUrl: string;
  bio: string;
  location: string;
  interests: string[];
};

export const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <div className="card">
      <img className="card-photo" src={profile.photoUrl} alt={profile.name} />
      <div className="card-info">
        <span className="chip">{profile.location}</span>
        <h2>
          {profile.name} <small>{profile.age}</small>
        </h2>
        <p>{profile.bio}</p>
        <div className="chips">
          {profile.interests.map((i) => (
            <span key={i} className="chip">{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}