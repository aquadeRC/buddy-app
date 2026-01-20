import React, {useContext} from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import {UserContext } from "Providers/UserProvider";


const Dashboard = () => {
    const {usersList} = useContext(UserContext);

    return (
        <ViewWrapper>
            <UsersList usersList={usersList} />
        </ViewWrapper>
    );
};


export default Dashboard;
