import { useState, useEffect } from 'react';
import { publicClient, contractAddress } from './Client';
import { ABI } from './ABI';

const Greeting = () => {
    const [greeting, setGreeting] = useState('Welcome');
    const pollingInterval = 10000; // 10 seconds

    useEffect(() => {
        const fetchGreeting = async () => {
            try {
                const contract = await publicClient.readContract({
                    address: contractAddress,
                    abi: ABI,
                    functionName: 'greeting',
                });
                setGreeting(contract as string);
            } catch (error) {
                console.error('Error fetching contract', error);
            }
        };

        fetchGreeting(); 

        const intervalId = setInterval(fetchGreeting, pollingInterval); 

        return () => clearInterval(intervalId); 
    }, []); 

    return (
        <div>
            <h1>Greeting: {greeting}</h1>
        </div>
    );
};

export default Greeting;