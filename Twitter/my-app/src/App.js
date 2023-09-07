import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  const formatUserName = (username) => `@${username}`
  return (
    <div className='App'>
      <TwitterFollowCard isFollowing formatUserName={formatUserName} username='Iugaaa0' 
      name='danieliuga' />
      <TwitterFollowCard isFollowing={false} formatUserName={formatUserName} 
      username='midudev' name='Miguel Ángel Durán' />
    </div>
    
  )
}

export default App;
