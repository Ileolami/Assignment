import React, { useState } from 'react';
import { publicClient, contractAddress } from './Client';
import { ABI } from './ABI';

const UserGreetingCounter = () => {
    const [inputValue, setInputValue] = useState(''); 
    const [userGreetingCount, setUserGreetingCount] = useState(''); 

    const fetchData = async () => {
        try {
            const contract = await publicClient.readContract({
                address: contractAddress,
                abi: ABI,
                functionName: 'userGreetingCounter',
                args: [inputValue] 
            });
            console.log(contract);
            setUserGreetingCount((contract as number).toString()); 
            setInputValue('')
        } catch (error) {
            console.error('Error fetching user greeting count:', error);
        }
    };

    return (
        <div>
            <h1> Check User's Greeting Count </h1>
            <div>
                <input 
                    type="text"
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="0x0784646"
                />
                <div className='flex justify-center'>
                    <button 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mt-2 w-48'
                        type='button' 
                        onClick={fetchData}
                    >
                        Fetch
                    </button>
                    <p>Greeting Count: {userGreetingCount}</p> 
                </div>    
            </div>
        </div>
    );
}
export default UserGreetingCounter