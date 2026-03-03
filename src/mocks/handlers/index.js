import {http, HttpResponse } from 'msw'
import {students} from "mocks/data/students";
import {groups} from "mocks/data/groups";

export const handlers = [
    http.get('/groups', async (info) => {
        return HttpResponse.json({groups}, {status: 200});
    }),
    http.post('/students/search', async({request, params}) => {
        const {searchPhrase} = await request.json();
        const matchingStudents = searchPhrase.inputValue
            ? students.filter((student) => student.name.toLowerCase().includes(searchPhrase.inputValue.toLowerCase()))
            : [];

        return HttpResponse.json({students: matchingStudents}, {status: 200});
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