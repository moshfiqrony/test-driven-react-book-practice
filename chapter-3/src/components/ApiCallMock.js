import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';


function ApiCallMock(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/user/profile/')
        .then(res => {
            if(res.status === 200){
                setUser(res.data);
                setLoading(false)
            }else{
                setLoading(false)
            }
        })
    })


    if(loading){
        return(<div data-testid="loading">Loading Data..</div>)
    }else if(user){
        return(<Fragment>
            <h1 data-testid="name">{user.name}</h1>
            <p data-testid="email">{user.email}</p>
        </Fragment>)
    }else{
        return(<div data-testid="no-data">No Data Found</div>)
    }
}

export default ApiCallMock;