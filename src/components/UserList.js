import React from 'react';
import styled from 'styled-components';

import UserCard from './UserCard';

const UserListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const UserList = props => {
    console.log('from UserList', props);
    return (
        <UserListDiv>
            {props.userData.map((user, index) => {
                return (
                    <UserCard user={user} key={index} />
                )
            })}
        </UserListDiv>
    )
}

export default UserList;