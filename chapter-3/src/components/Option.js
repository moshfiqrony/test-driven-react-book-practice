import React from 'react';

const Option = ({children, value, imgUrl}) => <option value={value} style={{background: 'url('+imgUrl+')'}}>
    {children}
    </option>

export default Option;