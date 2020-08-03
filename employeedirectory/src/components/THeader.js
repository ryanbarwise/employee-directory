import React from  'react';

const THeader = ({headers}) => {
    //const { headers } = props;
    //const headers = props.headers
return (
    //Picture, Name, DOB, Gender, Email, Phone, 
    <thead>
        {
            headers.map(value => {
            return <th>{value}</th>

            })
        }
    </thead>
)
}

export default THeader;