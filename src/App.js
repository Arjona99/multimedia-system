import './App.css'
import UserAvatar from './components/UserAvatar'
import avatar from 'media/user-bear.png'
import BaseLayout from 'pages/BaseLayout'
import SelectUser from 'pages/SelectUser'
import Home from 'pages/Home'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <SelectUser />
    </div>
  );
}

export default App;
