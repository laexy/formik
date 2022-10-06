import { useState } from 'react';

export default function Signup() {
  const [firstName, setFirstName] = useState('');

  console.log(firstName);

  return (
    <form>
      <div className='input-container'>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
    </form>
  );
}
