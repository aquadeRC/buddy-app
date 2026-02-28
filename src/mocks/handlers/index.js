import {http, HttpResponse } from 'msw'
import {students} from "mocks/data/students";
import {groups} from "mocks/data/groups";

export const handlers = [
    http.get('/groups',async (info) =>{
        return  HttpResponse.json({groups}, {status: 200});
}),
    http.get( '/students/:group', async ({request, params}) => {
        const {group} = params;
        if(group){
            const machingStudents = students.filter(student => student.group === params.group);

            return HttpResponse.json({students: machingStudents}, {status: 200});
        }

        return HttpResponse.json(students, {status: 200});
    }),
];

//10:15