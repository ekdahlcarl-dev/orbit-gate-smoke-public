import http from 'node:http';
export const add=(a,b)=>a+b;
if(process.argv[1]?.endsWith('/server.mjs')) http.createServer((req,res)=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify({sum:add(2,3)}));}).listen(Number(process.env.PORT||8080),'127.0.0.1');
