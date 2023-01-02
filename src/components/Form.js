import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Form.css'

export default function Form() {
    const navigate = useHistory()

    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handlePassword = (e) => {
        if(e.target.value !== inputs.password) {
            e.target.style.border = '1px solid red'
        } else {
            e.target.style.border = '1px solid #aaa'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate.push('/')
        setTimeout(() => alert(`Welcome ${inputs.firstName} ${inputs.lastName}`), 300)
    }
    return (
        <div className='sign-up'>
            <form onSubmit={handleSubmit}> 
                <p className='title'>Sign Up</p>
                <input
                    required
                    type='text'
                    name='firstName'
                    value={inputs.firstName || ''}
                    placeholder='First Name' 
                    onChange={handleChange}
                />
                <input
                    required
                    type='text'
                    name='lastName'
                    value={inputs.lastName || ''}
                    placeholder='Last Name' 
                    onChange={handleChange}
                />
                <input
                    required
                    type='text'
                    name='email'
                    value={inputs.email || ''}
                    placeholder='Email' 
                    onChange={handleChange}
                />
                <input
                    required
                    type='password' 
                    name='password'
                    value={inputs.password || ''}
                    placeholder='Password' 
                    onChange={handleChange}
                />
                <input
                    required
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handlePassword}
                />
                <button type='submit' style={{ width: '100%', marginTop : '32px', cursor : 'pointer' }} className='btn--secondary btn--medium'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}