// strictly follow the steps::::::
// step1:import json server using require methode

const jsonServer=require('json-server')

// step 2: to create  server using json-server

const server=jsonServer.create()

// route db.json

const router=jsonServer.router("db.json")

// step 3: middleware creation   middleware is a interface b/w server 

const middleware=jsonServer.defaults()

// step 4 :url creation
//  front is run in 3000port  but we need to to create a port for server(backend)
// node modules::process=>environmental variables

const PORT=process.env.PORT || 4000

// step 5: use middleware in server

server.use(middleware)

// use router in server
server.use(router)

// step 6: to use port in server

server.listen(PORT,()=>{
    console.log("media player strated at port" + PORT);
})







