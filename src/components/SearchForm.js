import React, {useState} from 'react';
import {Button, Form, Input} from 'semantic-ui-react';
import styled from 'styled-components';

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
        <div className='search-navigation'>
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
        </div>
    )
}

export default SearchForm;