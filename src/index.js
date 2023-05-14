import React from 'react';
import ReactDOM from 'react-dom/client';
import user from 'user';
import data from 'data';
import Friends from 'friends';
import transactions from 'transactions';
import { Profile } from 'components/profile';
import { Statistics } from 'components/statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/transactions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={Friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
