import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "/src/user.json";
import data from "/src/data.json";
import friends from "/src/friends.json";
import transactions from "/src/transactions.json";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
