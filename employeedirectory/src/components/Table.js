import React, { useState } from  'react';
import THeader from './THeader';
import TRow from './TRow';

const Table = ({employees}) => {

return (
    //ID, Picture, Name, DOB, Email, Phone, 
    <table>
        <THeader headers={['Picture', 'Name', 'DOB', 'Gender', 'Email', 'Phone']}/>
        {
            employees && (
                employees.map(item => {
                    return <TRow picture={item.picture.thumbnail}
                    name={`${item.name.first} ${item.name.last}`}
                    dob={item.dob.date}
                    gender={item.gender}
                    email= {item.email}
                    phone = {item.phone}
                    />
                })
            )
        }
    </table>
)
}

export default Table;