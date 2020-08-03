import React from  'react';

const TRow = ({ picture, name, dob, gender, email, phone}) => {
    //const { headers } = props;
    //const headers = props.headers
return (
    // Picture, Name, DOB, Gender, Email, Phone, 
    <tr>
        <td>
            <img src={picture} alt={`${name} photo`}/>
        </td>
        <td>{name}</td>
        <td>{dob}</td>
    <td>{gender}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
)
}

export default TRow;