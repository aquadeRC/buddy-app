import React,{useEffect, useState} from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import {Link, useParams} from "react-router-dom";
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from "axios";



const Dashboard = () => {
    const [students,setStudents] = useState([]);
    const [groups,setGroups] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('/groups')
            .then(({data}) => {setGroups(data.groups); console.log("Groups", data.groups)})
            .catch((err) => console.log(err));

    },[])


    useEffect(() => {
        console.log("ID:", id, groups[0]);
        axios.get(`/students/${id ||  groups[0]}`)
            .then(({data}) => {setStudents(data.students); console.log("Students", data.students)})
            .catch(error => console.log(error));
        },[id, groups])



    return (
        <ViewWrapper>
            <nav >
                {groups.map(group => (
                    <Link  key={group} to={`/group/${group}`}>{group}</Link>
                ))}
            </nav>
            <UsersList usersList={students} />
        </ViewWrapper>
    );
};


export default Dashboard;
