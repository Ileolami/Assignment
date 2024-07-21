
import './App.css';
import ConnectWallet from './Component/ConnectWallet';
import SetGreeting from './SetGreeting';
import Greeting from './Greeting';
import TotalCounter from './TotalCounter';
import UserGreetingCounter from './userGreetingCounter';


function App() {
  return (
    <div className="min-h-screen">
      <ConnectWallet />
      <div className="flex justify-center items-center gap-10">
        <Greeting />
        <SetGreeting />
        <TotalCounter />
        <UserGreetingCounter />
        </div>
    </div>
  )
}

export default App;