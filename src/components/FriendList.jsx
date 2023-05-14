import FriendListFirst from './img/friendlist/Friend-list-1-edited.png';
import FriendListSecond from './img/friendlist/Friend-list-2-edited.png';
import FriendListThird from './img/friendlist/Friend-list-3-edited.png';
import FriendListFourth from './img/friendlist/Friend-list-4-edited.png';
import FriendListFifth from './img/friendlist/Friend-list-5-edited.png';
import './FriendList.css';

export const FriendList = () => {
    return (
        <div className='friend-list-container'>
            <ul className="friend-list">
                <li className="friend-list-item">
                    <span className="status"></span>
                    <img className='friend-list-item-img' src={FriendListFirst} alt="1" />
                    <p className='friend-list-item-name'>Mango</p>
                </li>
                <li className="friend-list-item">
                    <span className="status"></span>
                    <img className='friend-list-item-img' src={FriendListSecond} alt="2" />
                    <p className='friend-list-item-name'>Kiwi</p>
                </li>
                <li className="friend-list-item">
                    <span className="status"></span>
                    <img className='friend-list-item-img' src={FriendListThird} alt="3" />
                    <p className='friend-list-item-name'>Ajax</p>
                </li>
                <li className="friend-list-item">
                    <span className="status"></span>
                    <img className='friend-list-item-img' src={FriendListFourth} alt="4" />
                    <p className='friend-list-item-name'>Jay</p>
                </li>
                <li className="friend-list-item">
                    <span className="status"></span>
                    <img className='friend-list-item-img' src={FriendListFifth} alt="5" />
                    <p className='friend-list-item-name'>Poly</p>
                </li>
            </ul>
        </div>
    );
};