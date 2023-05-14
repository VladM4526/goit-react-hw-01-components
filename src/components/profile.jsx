import profileImage from './img/Profile-img-edited.png';
import './profile.css';

const link = "https://unsplash.com/photos/Py8F6-hRn5o";

export const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <div className='profile-description'>
          <img src={profileImage} alt='User-avatar' className='profile-avatar' />
          <p className='profile-name'>Petra Marica</p>
          <p className='profile-info'>@pmarica</p>
          <p className='profile-info'>Salvador, Brasil</p>
        </div>
            
        <ul className='profile-stats-list'>
          <li className='profile-stats-list-item'>
              <span className='profile-stats-list-item-title'>Followers</span>
              <span className='profile-stats-list-item-numbers'>5603</span>
          </li>
          <li className='profile-stats-list-item'>
              <span className='profile-stats-list-item-title'>Views</span>
              <span className='profile-stats-list-item-numbers'>4827</span>
          </li>
          <li className='profile-stats-list-item'>
            <span className='profile-stats-list-item-title'>Likes</span>
            <span className='profile-stats-list-item-numbers'>1308</span>
          </li>
        </ul>
      </div>
      <p className='profile-text'>Зображення хлопця взято з: <a className='profile-link' href={link} target="_blank" rel="noopener nofollow noreferrer">Unsplash</a></p>
    </div>
  );
};