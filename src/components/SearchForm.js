import React, {useState} from 'react';
import {Button, Form, Input, Menu} from 'semantic-ui-react';
import styled from 'styled-components';

const Divider = styled.div`
    margin-left: 500px;
    margin-top: 10px;
`;

const SearchForm = (props) => {
    const [user, setUser] = useState('');

    const handleChange = event => {
        setUser(event.target.value) 
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addNewUser(user);
    }

    return (
        <Menu>
            <Divider>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            control={Input}
                            placeholder='User'
                            label='User'
                            value={user}
                            onChange={handleChange}
                            required
                        />
                        <Button>Search Users!</Button>
                    </Form.Group>  
                </Form>
            </Divider>
        </Menu>
    )
}

export default SearchForm;