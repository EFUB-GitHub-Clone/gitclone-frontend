import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import repo from '../assets/repo.PNG';
import {FiTrash2} from 'react-icons/fi';

function RepoBox(props) {
    const deleteRepo = async () => {
        if(window.confirm(`${props?.title}를 삭제하시겠습니까?`)) {
            await axios.delete(`http://3.36.229.161:8080/api/repo/${props?.id}`);
            alert('레포지토리가 성공적으로 삭제되었습니다.');
            return window.location.href = "/";
        }
    }
    return (
        <Box>
            <RepoTitle>
                <div style={{'display':'flex', 'alignItems': 'center'}}>
                    <Icon src={repo}/>
                    <Link to={{
                        pathname : `repo-detail/${props.id}`,
                        state: {
                            title: props.title,
                            fileList: props.fileList
                        }
                    }} style={{'textDecoration':'none', 'color':'inherit'}}>
                        <RepoName>{props.title}</RepoName>
                    </Link>
                </div>
                <div style={{'display':'flex', 'alignItems': 'center', 'gap':'0.5vw'}}>
                    <Status>Public</Status>
                    <DeleteBtn onClick={deleteRepo}><FiTrash2 /></DeleteBtn>
                </div>
            </RepoTitle>
            <RepoContent>{props.description}</RepoContent>
            <Language>
                <Circle style={{'background':'#3572A5'}} />
                <RepoContent>{props.language}</RepoContent>
            </Language>
        </Box>
    );
}

const Box = styled.div`
width: 23vw;
padding: 0.5rem;
margin-bottom: 0.5rem;
border: 1px solid #D8DEE4;
border-radius: 0.5em;
text-align: left;
`

const RepoTitle = styled.div`
display: flex;
justify-content: space-between;
font-size: 0.9rem;
`

const Icon = styled.img`
padding: 0.2rem
`

const RepoName = styled.div`
color: #0969DA;
font-weight: 600;
cursor: pointer;
`

const DeleteBtn = styled.button`
background: none;
outline: none;
border: none;
cursor: pointer;
`

const RepoContent = styled.div`
color: #57606A;
font-size: 0.75rem;
padding: 0.3rem 0.35rem;
`

const Status = styled.div`
color: #57606A;
border: 1px solid #D8DEE4;
padding: 0.1rem 0.4rem;
border-radius: 5rem;
font-size: 0.75rem;
font-weight: 600;
`

const Language = styled.div`
display: flex;
padding: 0.3rem;
align-items: center;
margin-top: 0.5rem;
`

const Circle = styled.div`
width: 0.8rem; height: 0.8rem;
border-radius: 50%;
`

export default RepoBox;