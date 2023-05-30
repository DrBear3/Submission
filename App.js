
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('light-mode');
  const [zipCode, setZipCode] = useState('');
  const [timeOff, setTimeOff] = useState(false);
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyFee, setMonthlyFee] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  const handleChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleTimeOffToggle = () => {
    setTimeOff(!timeOff);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipCode.length !== 5 || isNaN(zipCode)) {
      alert('Invalid zipcode!');
    } else {
      const watts = prompt('How many watts will you use?');
      const cost = watts * 0.37;
      const savings = (watts * 0.15 * 30).toFixed(2);
      alert(`Your solar energy bill will cost $${cost} per month. You will save $${savings} per month with solar energy.`);
    }
  };

  const handleLoanSubmit = (event) => {
    event.preventDefault();
    const monthlyPayment = (loanAmount / monthlyFee).toFixed(2);
    alert(`Your monthly payment for a ${loanAmount} loan at ${monthlyFee}% interest is $${monthlyPayment}.`);
  };
  return (
    <div className={theme}>
      <Navbar />
      <div className='h-screen bg-cover bg-center' style={{ backgroundImage: 'url("/solar-energy.jpg")' }}>
        <h1 className='text-white text-3xl text-center pt-20'>Hello, welcome!</h1>
        <form className='mt-10 flex flex-col items-center' onSubmit={handleSubmit}>
          <label className='text-white text-lg mb-2'>Enter your zipcode:</label>
          <input type='text' value={zipCode} onChange={handleChange} className='px-4 py-2 mb-4' />
          <button type='submit' className='px-4 py-2 bg-blue-500 text-black rounded-lg'>Calculate Solar Energy Bill</button>
        </form>
        <div className='flex justify-center items-center mt-10'>
          <button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg' onClick={handleTimeOffToggle}>
            {timeOff ? 'Disable Time Off' : 'Enable Time Off'}
          </button>
          <button className='bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg' onClick={() => alert('Please contact us at 925-663-5895 or drsinger144@gmail.com to learn more about solar energy and how it can benefit you.')}>
            Contact Us
          </button>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => alert('Sign up to view more information about our solar energy services.')}>
            View More Information
          </button>
        </div>
        <p className='text-white text-lg mt-10 px-10'>Solar Energy App calculator </p>
        {timeOff && (
          <form className='mt-10 flex flex-col items-center' onSubmit={handleLoanSubmit}>
            <label className='text-white text-lg mb-2'>Loan amount:</label>
            <input type='number' value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            <button type='submit' className='px-4 py-2 bg-blue-500 text-black rounded-lg mt-4'>Calculate Loan Payment</button>
          </form>
        )
        }
      </div>
    </div>
  );
 } 
export default App;
