import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';


const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);


    return(
        <Card
            actions={[
                <div key="visit">Visit<br />0</div>,
                <div key="following">Following<br />0</div>,
                <div key="followers">Followers<br />0</div> 
            ]}
        >
            <Card.Meta
                avatar= {<Avatar>HK</Avatar>}
                title= "Hwakkyle"
            />
            <Button onClick={onLogOut}>Log Out</Button>
        </Card>
    );
};

export default UserProfile;