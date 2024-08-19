import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Emi() {
    const [amount, setAmount] = useState('100000');
    const [years, setYears] = useState('1');
    const [rate, setRate] = useState('10.45');
    const [emi, setEmi] = useState(0);

    function handleAmount(e) {
        setAmount(e.target.value);
    }

    function handleTime(e) {
        setYears(e.target.value);
    }

    function handleRate(e) {
        setRate(e.target.value);
    }

    function EmiCalculate() {
        const P = parseInt(amount);
        const R = parseFloat(rate / 12 / 100);
        const N = parseInt(years * 12);

        const emi = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        setEmi(emi.toFixed(2));
    }

    return (
        <div className='container-fluid bg-secondary text-white text-center' style={{ height: '100vh' }}>
            <h1 className='fw-bold mt-2'>Personal Loan EMI Calculator</h1>
            <div className='row mt-4 p-2'>
                <div className='col-md-4 mb-3'>
                    Amount You need <input type="text" onChange={handleAmount} value={amount} size="15" className='form-control d-inline-block w-auto' />
                </div>
                <div className='col-md-4 mb-3'>
                    For <input type="text" onChange={handleTime} value={years} size="5" className='form-control d-inline-block w-auto' /> Years
                </div>
                <div className='col-md-4 mb-3'>
                    Interest Rate <input type="text" onChange={handleRate} value={rate} size="5" className='form-control d-inline-block w-auto' /> %
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4 mb-3'>
                    <input type='range' className='form-range w-100' min='100000' max='1000000' onChange={handleAmount} value={amount} step='100000' />
                    <div className='d-flex justify-content-between'>
                        <label>&#8377; 1,00,000</label>
                        <label>&#8377; 10,00,000</label>
                    </div>
                </div>

                <div className='col-md-4 mb-3'>
                    <input type='range' onChange={handleTime} value={years} className='form-range w-100' min='1' max='5' step='1' />
                    <div className='d-flex justify-content-between'>
                        <label>1</label>
                        <label>5</label>
                    </div>
                </div>
                <div className='col-md-4 mb-3'>
                    <input type='range' value={rate} onChange={handleRate} className='form-range w-100' min='10.45' max='18.45' step='0.01' />
                    <div className='d-flex justify-content-between'>
                        <label>10.45</label>
                        <label>18.45</label>
                    </div>
                </div>
            </div>
            
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary mt-4' onClick={EmiCalculate}>Calculate</button>
                </div>
            </div>
            
            <div className='row'>
                <div className='col'>
                    <p style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '30px' }}> Your Emi is &#8377;{emi} for {years * 12} months. </p>
                </div>
            </div>
        </div>
    );
}

export default Emi;
