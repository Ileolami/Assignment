import { useState, useEffect } from 'react'
import { publicClient, contractAddress } from './Client'
import { ABI } from './ABI'

const TotalCounter = () => {
    const [count, setCount] = useState(0);
    const pollingInterval = 10000;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await publicClient.readContract({
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'totalCounter',
                })
                console.log(data)
                setCount(Number(data));
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
        const interval = setInterval(fetchData, pollingInterval)
        return () => clearInterval(interval) 
    }, [])

  return (
    <div>
        <h1>Total Counter: {count}</h1>
    </div>
  )
}

export default TotalCounter