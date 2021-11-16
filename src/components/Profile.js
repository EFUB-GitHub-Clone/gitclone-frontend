import React from 'react';
import styled from 'styled-components';
import {FiMail, FiMapPin} from 'react-icons/fi';
import {BiBuildings, BiStar} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import profileImage from "../assets/profileImg.jpg";
import organ1 from '../assets/organization1.PNG';
import organ2 from '../assets/organization2.PNG';
import organ3 from '../assets/organization3.PNG';
import organ4 from '../assets/organization4.PNG';

function Profile() {
    return (
        <ProfileWrapper>
            <div style={{'text-align':'center'}}><ProfileImg src={profileImage} /></div>
            <UserName>Su a Kim</UserName>
            <UserId>sua-kim</UserId>
            <Bio>🏃‍♀️ Growing Developer</Bio>
            <Edit>Edit profile</Edit>
            <Follow>
                <BsPeople style={{'width':'1.2rem','height':'1.2rem', 'margin-right':'0.1vw'}}/>
                <FollowerNum>7</FollowerNum> followersㆍ<FollowerNum>8</FollowerNum> followingㆍ
                <BiStar style={{'width':'1.1rem','height':'1.1rem', 'margin-right':'0.1vw'}}/><FollowerNum>5</FollowerNum>
            </Follow>
            <Info>
                <BiBuildings style={{'width':'1rem','height':'1rem'}}/> Ewha W. University
            </Info>
            <Info>
                <FiMapPin style={{'width':'1rem','height':'1rem'}}/> Seoul, Korea
            </Info>
            <Info>
                <FiMail style={{'width':'1rem','height':'1rem'}}/> sua917@ewhain.net
            </Info>
            <Hr />
            <p style={{'fontWeight':'600'}}>Organizations</p>
            <Follow>
                <img src={organ1} />
                <img src={organ2} />
                <img src={organ3} />
                <img src={organ4} />
            </Follow>

        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.div`
width: 20vw;
text-align: left;
`

const ProfileImg = styled.img`
text-align: center;
width: 16vw;
height: 16vw;
object-fit: cover;
border-radius: 50%;
z-index: 10;
`

const UserName = styled.div`
font-size: 1.8rem;
font-weight: 600;
`

const UserId = styled.div`
font-size: 1.2rem;
color: #6E7781;
`

const Bio = styled.div`
margin-top: 1rem; margin-bottom: 1rem;
`

const Edit = styled.div`
border: 1px solid #D8DEE4;
border-radius: 0.5em;
text-align: center;
padding: 0.4rem;
font-size: 0.9rem; font-weight: 600;
cursor: pointer;
margin-right: 2rem;
`

const Follow = styled.div`
display: flex;
align-items: center;
font-size: 0.8rem;
color: #6E7781;
gap: 0.1vw;
padding-left: 0.1vw;
cursor: pointer;
`

const FollowerNum = styled.p`
font-size: 0.9rem;
font-weight: 600;
color: black;
margin-right: 0.2rem;
`

const Info = styled.div`
display: flex;
align-items: flex-end;
font-size: 0.9rem;
color: #24292F;
gap: 0.3vw;
padding: 0.1rem 0.2vw;
`

const Hr = styled.hr`
width: 90%;
height: 0.1rem;
background: #D8DEE4;
border: 0;
margin-right: 2rem;
`

export default Profile;