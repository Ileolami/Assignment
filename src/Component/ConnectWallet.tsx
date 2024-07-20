// import React from 'react'
import { createThirdwebClient } from "thirdweb";
import {  ConnectButton } from "thirdweb/react";
 
const client = createThirdwebClient({ clientId: import.meta.env.VITE_API_KEY });

const ConnectWallet = () => {
  return (
    <div>
        <nav className="flex justify-end my-5 mx-4">
         <ConnectButton client={client} />
         </nav>
    </div>
  )
}

export default ConnectWallet