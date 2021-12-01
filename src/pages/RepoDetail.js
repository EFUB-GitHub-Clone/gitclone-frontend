import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import Header from '../components/Header';
import FileList from '../components/FileList';
import {BiBookBookmark, BiCode, BiGitPullRequest, BiBookOpen, BiLineChart} from 'react-icons/bi';
import {VscIssues, VscProject} from 'react-icons/vsc';
import {BsPlayCircle, BsShieldExclamation} from 'react-icons/bs';

function RepoDetail(props) {
    const [open, setOpen] = useState(false);
    const [selectedFile, setFile] = useState(null);
    const handleClickOpen = () => {setOpen(true)}
    const handleClickClose = () => {
        setOpen(false);
    }
    const fileHandler = (e) => {
        const files = e.target.files;
        console.log(files);
        setFile(files);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile[0]);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        await axios
            .post(`http://3.36.229.161:8080/api/repo/${props.match.params.no}/file`, formData, config)
            .then((res)=> {
                alert('성공적으로 업로드하였습니다.');
                window.location.replace(`/`);
            }).catch((e) => {
                console.log(e);
                alert('업로드에 실패하였습니다.');
            })
    };
    return (
        <>
            <MainWrapper>
                <Header />
                <MenuWrapper>
                    <Title>
                        <BiBookBookmark style={{'marginRight':'0.5rem', 'color':'#57606A'}}/>
                        <Link to = {`/`} style={{'textDecoration':'none', 'color':'inherit'}}>sua-kim</Link>
                        <div style={{'marginRight':'0.5rem', 'marginLeft':'0.5rem', 'color':'#57606A'}}> / </div>
                        <div style={{'fontWeight':'600'}}>{props.location.state.title}</div>
                        <Status>Public</Status>
                    </Title>
                </MenuWrapper>
                <MenuWrapper>
                    <Menu>
                        <Btn style={{'fontWeight':'600', 'color':'black', 'borderBottom':'2px solid #FD8C73'}}><BiCode style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem'}} />Code</Btn>
                        <Btn><VscIssues style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Issues</Btn>
                        <Btn><BiGitPullRequest style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Pull requests</Btn>
                        <Btn><BsPlayCircle style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Actions</Btn>
                        <Btn><VscProject style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Projects</Btn>
                        <Btn><BiBookOpen style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Wiki</Btn>
                        <Btn><BsShieldExclamation style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Security</Btn>
                        <Btn><BiLineChart style={{'paddingRight':'0.5rem', 'fontSize':'1.2rem', 'color':'#57606A'}} />Insights</Btn>
                        <UploadBtn onClick={handleClickOpen}>Add file</UploadBtn>
                        <Dialog open={open} onClose={handleClickClose}>
                            <UploadTitle>파일 업로드</UploadTitle>
                            <DialogContent>
                                <input type='file' onChange={fileHandler} multiple />
                            </DialogContent>
                            <DialogActions>
                                <UploadBtn onClick={submitHandler}>upload files</UploadBtn>
                                <UploadBtn style={{'background':'#F6F8FA'}} onClick={handleClickClose}>close</UploadBtn>
                            </DialogActions>
                        </Dialog>

                    </Menu>
                </MenuWrapper>
            </MainWrapper>
            <MainWrapper style={{'background':'#FFFFFF'}}>
                <FileList title = {props.location.state.title} files = {props.location.state.fileList} />
            </MainWrapper>
        </>
    );
}

const MainWrapper = styled.div`
text-align: center;
background: #F6F8FA;
`

const MenuWrapper = styled.div`
display: flex;
text-align: left;
width: 100%;
margin-bottom: 1rem;
`

const Title = styled.div`
display: flex;
margin-top: 2rem;
align-items: center;
font-size: 1.2rem;
color: #0969DA;
margin-left: 1.5vw;
`

const Menu = styled.div`
display: flex;
align-items: flex-end;
gap: 1vw;
margin-left: 1.5vw;
`

const Status = styled.div`
color: #57606A;
border: 1px solid #D8DEE4;
padding: 0.1rem 0.4rem;
border-radius: 5rem;
font-size: 0.75rem;
font-weight: 600;
margin-left: 0.5vw;
`

const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 2.5rem;
font-size: 0.9rem;
color: #24292F;
outline: none;
background: none;
border: none;
box-sizing: inherit;
`

const UploadBtn = styled.label`
display: flex;
justify-content: center;
align-items: center;
height: 2rem;
font-size: 0.9rem; font-weight: 600;
border: 1px #D8DEE4 solid; border-radius: 0.5rem;
background: #FFFFFF;
box-sizing: inherit;
padding: 0 1rem;
margin-bottom: 0.2rem; margin-left: 1rem;
cursor: pointer;
`

const UploadTitle = styled.div`
display: flex;
text-align: center;
display: flex;
padding: 1.5rem;
font-size: 1rem;
font-weight: 600;
`

const Foot = styled.div`
display: flex;
width: 70vw;
margin-top: 1rem;
border-top: 1px solid #D8DEE4;
`

export default RepoDetail;