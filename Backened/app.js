

require('dotenv').config();
const port=process.env.PORT;
const server=()=>{
    console.log('you are listening at port :',port);
}
server()