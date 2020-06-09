import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Profile(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [pronoun, setPronoun] = useState('')
    const [manager, setManager] = useState(' ')
    const [timeZone, setTimeZone] = useState(' ')


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
                <select
                    name='pronoun'
                    className='form-control'
                    type='text'
                    value={pronoun}
                    onChange={(e) => setPronoun(e.target.value)}
                    placeholder='Enter your pronoun here'
                    data-testid='pronoun'
                >
                    <option value='MALE'>He</option>
                    <option value='FEMALE'>She</option>
                    <option value='RATHER_NOT_SAY'>Rather not say</option>
                    <option value='NEUTRAL'>Neutral</option>
                </select>
                <label htmlFor='manager' >Manager </label>
                <Select
                    id='manager'
                    className='form-control'
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    data-testid='manager'
                >
                    <MenuItem value=' '>
                        Select One
                    </MenuItem>
                    <MenuItem value='user1'>
                        <img data-testid='manager-image' height='25' className='mr-2' src='https://img.icons8.com/officel/2x/user.png' />
                        User 1
                    </MenuItem>
                    <MenuItem value='user2'>
                        <img data-testid='manager-image' height='25' className='mr-2' src='https://img.icons8.com/officel/2x/user.png' />
                        User 2
                    </MenuItem>
                    <MenuItem value='user3'>
                        <img data-testid='manager-image' height='25' className='mr-2' src='https://img.icons8.com/officel/2x/user.png' />
                        User 3
                    </MenuItem>
                    <MenuItem value='user4'>
                        <img data-testid='manager-image' height='25' className='mr-2' src='https://img.icons8.com/officel/2x/user.png' />
                        User 4
                    </MenuItem>
                </Select>
                <label htmlFor='firstName'>Time Zone </label>
                <Select
                    className='form-control'
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    data-testid='timeZone'
                >
                    <MenuItem value=' '>
                        Select One
                    </MenuItem>
                    <MenuItem value='asia/dhaka'>
                        Asia/Dhaka
                    </MenuItem>
                </Select>
                <button className='btn btn-light mt-2' onClick={handleCancel}>Cancel</button>
                <button className='btn btn-primary mt-2' onClick={handleDone}>Done</button>
            </div>
        </div>
    );
}

export default Profile;