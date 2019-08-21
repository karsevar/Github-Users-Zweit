import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const UserCard = ({user}) => {
    return (
        <Card>
            <Image src={user.avatar_url} />
            <Card.Content>
                <Card.Header>{user.name}</Card.Header>
                <Card.Meta>
                    <a href={user.html_url} className='username'>{user.login}</a>
                </Card.Meta>
                <Card.Description>
                    {user.bio}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {user.followers} followers
                </a>
            </Card.Content>
        </Card>
    )
}

export default UserCard;