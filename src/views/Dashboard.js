import React,{useEffect, useState} from 'react';

import {useParams, Navigate, Link} from "react-router"
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import UsersList from "components/organisms/UsersList/UsersList";


const Dashboard = () => {
    const [groups, setGroups] = useState([]);
    const { getGroups } = useStudents();
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const groups = await getGroups();
            setGroups(groups);
        })();
    }, [getGroups]);

    if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

    return (
        <Wrapper>
            <TitleWrapper>
                <Title as="h2">Group {id}</Title>
                <nav>
                    {groups.map((group) => (
                        <Link key={group} to={`/group/${group}`}>
                            {group}{' '}
                        </Link>
                    ))}
                </nav>
            </TitleWrapper>
            <GroupWrapper>
                <UsersList/>
            </GroupWrapper>
        </Wrapper>
    );
};


export default Dashboard;
