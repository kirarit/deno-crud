import { Router } from 'https://deno.land/x/oak@v6.2.0/mod.ts';
import { getAllUsers, addUser, deleteUser, updateUser } from './db.services.ts';
const REST = new Router();

const USER_PATHS = {
    "get" : '/app/users',
    "add" : '/app/user/add',
    "delete" : '/app/user/delete',
    "update" : '/app/user/update'
}

REST.get('/app/users', async ({ response }: {response: any}) => {
    response.body = await getAllUsers();
})

REST.post(USER_PATHS.add, async ({ params,response, }: {params:any,response: any})=> {
    response.body = await addUser(params);
})

REST.delete(USER_PATHS.delete, async ({ params,response, }: {params:any,response: any}) => {
    response.body = await deleteUser(params);
})

REST.put(USER_PATHS.update, async ({ params,response, }: {params:any,response: any}) => {
    response.body = await updateUser(params);
})

export default REST;