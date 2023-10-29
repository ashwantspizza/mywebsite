// import React, {useState} from 'react';
// import {db} from './firebase';
// import './ContactForm.css';

// export default function ContactForm() {

// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');

// const handleSubmit = (e) => {
//   e.preventDefault();

//   db.collection('contacts').add({
//     name: name,
//     email: email,
//     message: message,
//   })

//   setName('');
//   setEmail('');
//   setMessage('');
// };

//   return (
//     <form className='form' onSubmit={handleSubmit}>

//     <label className='input-label'>Name:</label>
//     <input id='name' className='input-field' placeholder='Name'
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     />

//     <label className='input-label'>Email:</label>
//     <input id='email' className='input-field'  placeholder='Email'
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     />

//     <label className='input-label'>Message:</label>
//     <textarea id='message' className='input-field' placeholder='Message'
//     value={message}
//     onChange={(e) => setMessage(e.target.value)}
//     />

//     <button className='submit-button' type='submit'>Submit</button>

//     </form>
//   )
// }