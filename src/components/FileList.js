import React from 'react';

function FileList(props) {
    const files = props.files ? props.files.map(file => (file||'').split('/').slice(-1)[0]) : [''];
    return (
        <div>
            <table>
                <thead>
                    <th>{props.title}</th>
                </thead>
                <tbody>
                {
                    files ? files.map(item => (
                        <tr>
                            <td className='postInfo'>
                                {item}
                            </td>
                        </tr>
                    )) : ''
                }
                </tbody>
            </table>
        </div>
    );
}

export default FileList;