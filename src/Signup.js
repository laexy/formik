import { useState } from 'react';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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
      <div className='input-container'>
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div className='input-container'>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
    </form>
  );
}
