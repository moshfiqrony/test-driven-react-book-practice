import React, { useState } from 'react';

function Profile(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [pronoun, setPronoun] = useState('')
    const [manager, setManager] = useState('')
    const [timeZone, setTimeZone] = useState('')


    const handleCancel = () => {

    }


    const handleDone = () => {

    }

    return (
        <div className='container'>
            <div className="col-8 mx-auto mt-2">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor='firstName'>First Name </label>
                        <input
                            name='firstName'
                            className='form-control'
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Enter your first name here'
                            data-testid='firstName'
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor='firstName'>Last Name </label>
                        <input
                            name='lastName'
                            className='form-control'
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Enter your last name here'
                            data-testid='lastName'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">

                        <label htmlFor='firstName'>Title </label>
                        <input
                            name='title'
                            className='form-control'
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Enter your first name here'
                            data-testid='title'
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor='firstName'>Department </label>
                        <input
                            name='department'
                            className='form-control'
                            type='text'
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder='Enter your department here'
                            data-testid='department'
                        />
                    </div>
                </div>
                <label htmlFor='firstName'>Pronoun </label>
                <input
                    name='pronoun'
                    className='form-control'
                    type='text'
                    value={pronoun}
                    onChange={(e) => setPronoun(e.target.value)}
                    placeholder='Enter your pronoun here'
                    data-testid='pronoun'
                />
                <label htmlFor='firstName'>Manager </label>
                <input
                    name='manager'
                    className='form-control'
                    type='text'
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    placeholder='Enter your manager here'
                    data-testid='manager'
                />
                <label htmlFor='firstName'>Time Zone </label>
                <input
                    name='timeZone'
                    className='form-control'
                    type='text'
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    placeholder='Enter your time zone here'
                    data-testid='timeZone'
                />
                <button className='btn btn-light mt-2' onClick={handleCancel}>Cancel</button>
                <button className='btn btn-primary mt-2' onClick={handleDone}>Done</button>
            </div>
        </div>
    );
}

export default Profile;