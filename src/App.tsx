import './App.css'
import ConnectWallet from './Component/ConnectWallet'

function App() {


  return (
    <main className='min-h-screen '>
      <ConnectWallet />
      <div>
        <button type='button' className='btn btn-primary'>Connect Wallet</button>
      </div>
    </main>
  )
}

export default App
