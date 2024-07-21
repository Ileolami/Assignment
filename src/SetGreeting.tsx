import { useState } from 'react';
import { publicClient, walletClient, account, contractAddress } from './Client';
import { ABI } from './ABI';

const SetGreeting = () => {
  const [greeting, setGreeting] = useState('');
  const [operationResult, setOperationResult] = useState(''); 

  const handleGreeting = async () => {
    try {
      const { request } = await publicClient.simulateContract({
        account,
        address: contractAddress,
        abi: ABI,
        functionName: 'setGreeting',
        args: [greeting],
      });
      const result = await walletClient.writeContract(request);
      console.log('Result:', result);
      setOperationResult('Greeting updated successfully!'); 
      setGreeting(''); 
    } catch (err) {
      console.error(err);
      setOperationResult('Failed to update greeting.'); 
    }
  };

  return(
    <div className="flex justify-center items-center"> 
      <div className='flex flex-col gap-5'>
        <input
          type="text"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          placeholder="Enter greeting"
          className='border border-gray-300 rounded-lg p-2 bg-black text-white'
        />
        <div className='flex justify-center'>
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mt-2 w-48'
            type='submit' 
            onClick={handleGreeting}
          >
            New Greeting
          </button>
        </div>
        {operationResult && <p>{operationResult}</p>}
      </div>
    </div>
  )
};

export default SetGreeting;