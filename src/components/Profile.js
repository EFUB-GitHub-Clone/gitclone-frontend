import React from 'react';
import styled from 'styled-components';
import profileImage from "../assets/profileImg.jpg";

function Profile() {
    return (
        <ProfileWrapper>
            <ProfileImg src={profileImage} />
            <UserName>Su a Kim</UserName>
            <UserId>sua-kim</UserId>
            <Bio>🏃‍♀️ Growing Developer</Bio>
            <Edit>Edit profile</Edit>
        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.div`
width: 30%;
text-align: left;
`

const ProfileImg = styled.img`
text-align: center;
width: 320px; height: 320px;
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

export default Profile;