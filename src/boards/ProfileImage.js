import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../components/ProfileImage';

function ProfileImageBoard() {
  return (
    <Container>
      <h1>Sizes</h1>
      <Content>
        <ProfileImage
          src={require('../assets/user.png')}
          alt="profile"
          size={30}
          variant="circle"
        />
        <ProfileImage
          src={require('../assets/user.png')}
          alt="profile"
          size="small"
          variant="circle"
        />
        <ProfileImage
          src={require('../assets/user.png')}
          alt="profile"
          size="normal"
          variant="circle"
        />
        <ProfileImage
          src={require('../assets/user.png')}
          alt="profile"
          size="big"
          variant="circle"
        />
      </Content>
      <h1>Variants</h1>
      <Content>
        <ProfileImage
          src={require('../assets/user.png')}
          alt="profile"
          variant="circle"
        />
        <ProfileImage
          src={require('../assets/user.png')}
          alt="profile"
          variant="rounded"
        />
        <ProfileImage src={require('../assets/user.png')} alt="profile" />
      </Content>
    </Container>
  );
}

export default ProfileImageBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65vh;
  height: 23vh;
  border: 2px solid #dae1e7;
  border-radius: 4px;
`;
