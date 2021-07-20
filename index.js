const { REPL_MODE_SLOPPY } = require('repl')

const PORT =5000

const fastify = require('fastify')({logger:true})
fastify.register(require('./routes/studentRoutes'))
const start = async() =>
{
    try{
        await fastify.listen(PORT)
    }
    catch(error){
        fastify.log.error(error);
        process.exit(1)
    }
}
start()