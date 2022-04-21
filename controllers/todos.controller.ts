import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { config } from '../config/index.ts'
import { RequestBody,DB_Request } from '../interfaces.ts';
import { BASE_URI, DbConfig } from '../config/db.ts';

const { DATA_SOURCE, DATABASE } = config();
const COLLECTION = "todos";

const options: DB_Request ={...DbConfig, method:'POST'};
const query: RequestBody = {
  dataSource: DATA_SOURCE,
  database: DATABASE,
  collection: COLLECTION,
  document: undefined
};

const addTodo = async ({request,response}:Context) => {
  try {
    if (!request.body) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      console.log( 'todos');
      const body = await request.body();
      console.log( 'todos', {body});
      const todo = await body.value;
      const URI = `${BASE_URI}/insertOne`;
      query.document = todo;
      options.body = JSON.stringify(query);
     
      const dataResponse = await fetch(URI, options);
      const {insertedId}= await dataResponse.json();
      
      response.status = 201;
      response.body = {
        success: true,
        data: todo,
        insertedId
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

const getTotdos  = async ({
  request,
  response,
}: {
  request: any;
  response: any;
  })=>{
  response.status = 201;
  response.body = {
    success: true,
  };
}

export { addTodo,getTotdos };