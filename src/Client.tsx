import { createWalletClient, custom, http, createPublicClient } from 'viem'
import { baseSepolia } from 'viem/chains'
 
export const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http()
})
 
export const walletClient = createWalletClient({
    chain: baseSepolia,
    transport: custom(window.ethereum)
  })
 

export const [ account ] = await walletClient.getAddresses()

export const contractAddress = '0x5d497d0fa8d77c0F9f75D3E67E839DA150920471'