import React from 'react';

const profileInfoForm=(props) => {
    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                <td style={{ width: '20%' }}>{props.info.mail}</td>
                <td style={{ width: '20%' }}>{props.info.signdate}</td>
                <td style={{ width: '20%' }}>{props.info.phonenumber}</td>
                <td style={{ width: '40%' }}>{props.info.bio}</td>
                </tr>
        </tbody>
        </Table>
);
    }


export default profileInfoForm