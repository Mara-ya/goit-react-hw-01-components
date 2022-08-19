import {Profile} from '../profile/Profile';
import {FriendList} from '../friendList/FriendList';
import {Statistics} from '../statistics/Statistics';
import {TransactionHistory} from '../transactionHistory/TransactionHistory';

import {Wrapper} from './App.styled'
import user from '../profile/user.json';
import friends from '../friendList/friends.json';
import data from '../statistics/data.json';
import transactions from '../transactionHistory/transactions.json';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends = {friends} />
      <TransactionHistory items = {transactions} />
    </Wrapper>
  );
};
