import React from 'react';
import styled from 'styled-components';
import profileImage from "../assets/profileImg.jpg";
import follower from '../assets/follower.PNG';
import star from '../assets/star.PNG';
import building from '../assets/building.PNG';
import position from '../assets/position.PNG';
import email from '../assets/mail.PNG';
import organ1 from '../assets/organization1.PNG';
import organ2 from '../assets/organization2.PNG';
import organ3 from '../assets/organization3.PNG';
import organ4 from '../assets/organization4.PNG';

function Profile() {
    return (
        <ProfileWrapper>
            <ProfileImg src={profileImage} />
            <ProfileInfo>
            <UserName>Su a Kim</UserName>
            <UserId>sua-kim</UserId>
            <Bio>🏃‍♀️ Growing Developer</Bio>
            <Edit>Edit profile</Edit>
            <Follow>
                <img src={follower} /><FollowerNum>7</FollowerNum> followersㆍ<FollowerNum>8</FollowerNum> followingㆍ
                <img src={star} /><FollowerNum>5</FollowerNum>
            </Follow>
            <Info>
                <img src={building} /> Ewha W. University
            </Info>
            <Info>
                <img src={position} /> Seoul, Korea
            </Info>
            <Info>
                <img src={email} /> sua917@ewhain.net
            </Info>
            <Hr />
            <p style={{'fontWeight':'600'}}>Organizations</p>
            <Follow>
                <img src={organ1} />
                <img src={organ2} />
                <img src={organ3} />
                <img src={organ4} />
            </Follow>
            </ProfileInfo>
        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.div`
width: 30%;
text-align: left;
`

const ProfileImg = styled.img`
position: absolute;
top: 7rem;
text-align: center;
width: 20rem; height: 20rem;
border-radius: 50%;
z-index: 10;
`

const ProfileInfo = styled.div`
padding-top: 19rem;
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
gap: 0.1rem;
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
align-items: flex-start;
font-size: 0.9rem;
color: #24292F;
gap: 0.1rem;
`

const Hr = styled.hr`
width: 90%;
height: 0.1rem;
background: #D8DEE4;
border: 0;
margin-right: 2rem;
`

export default Profile;