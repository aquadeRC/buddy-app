import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import {StyledList}  from "./UsersList.styles";
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const UsersList= () => {
    const [students, setStudents] = useState([]);
    const { id } = useParams();
    const { getStudents } = useStudents();

    useEffect(() => {
        (async () => {
            const students = await getStudents(id);
            setStudents(students);
        })();
    }, [getStudents, id]);

    return (
        <>
            <Title>Lista studentów</Title>
            <StyledList>
                {students.map((userData, index) => (
                    <UsersListItem key={userData.name} userData={userData}/>
                ))}
            </StyledList>
        </>
    );
};


export default UsersList;