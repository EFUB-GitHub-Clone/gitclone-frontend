import React from 'react';
import styled from 'styled-components';

function FileList(props) {
    const files = props.files ? props.files.map(file => file.split('/').slice(-1)[0]) : ['등록된 파일이 없습니다.'];
    console.log(files);
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

const TableWrapper = styled.div`

`

export default FileList;