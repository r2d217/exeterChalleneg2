var myObj =require('../StudentRecord')
const{addStudent,UpdateMarks,deleteStud} = require('../controller/studcontroller')

//setting schema for POST method
const AddStud ={
    schema:{
        body:{
            type:'object',
            required:['studentName','studentID','subject1','subject2','subject3','subject4','subject5'],
            properties:{
                studentName:{type:'string'},
                studentID:{type:'string'},
                subject1:{type:'integer'},
                subject2:{type:'integer'},
                subject3:{type:'integer'},
                subject4:{type:'integer'},
                subject5:{type:'integer'}
            },

        },
        response:{
            201:{
                type: 'object',
                properties:{
                    studentID:{type:'string'},
                    studentName:{type:'string'},
                    subject1:{type:'integer'},
                    subject2:{type:'integer'},
                    subject3:{type:'integer'},
                    subject4:{type:'integer'},
                    subject5:{type:'integer'}
                },
        },
        400:{
            type:'object',
            properties: {
                Message: { type: 'string' }
              },
        },
    },
},
    handler: addStudent
}
const UpdateStud = {
    schema:{
        body:{
            type:'object',
            required:['studentID','subjectName','subjectMarks'],
            properties:{
                studentID:{type:'string'},
                studentName:{type:'string'},
                subjectMarks:{type:'integer'}
            },

        },
        response:{
            202:{
                type:'object',
                properties:{
                    studentName:{type:'string'},
                    studentID:{type:'string'},
                    subject1:{type:'integer'},
                    subject2:{type:'integer'},
                    subject3:{type:'integer'},
                    subject4:{type:'integer'},
                    subject5:{type:'integer'}
                },
            },
            450:{
                type:'object',
                properties: {
                 Message: { type: 'string' }
                 },
             },
    },
},
    handler: UpdateMarks
}

const delStud ={
    schema:{
        body:{
            type:'object',
            required:['studentID'],
            properties:{
                studentID:{type:'string'}
              },
        },
        response:{
         300:{
            type:'object',
            properties: {
                Message: { type: 'string' }
              },
        },
    },
},
    handler: deleteStud
}
function studentRoutes (fastify , options , done )
{
    fastify.get('/get',(req,res)=>{
        res.send({myObj})
         
    })
  
    fastify.post('/add',AddStud)
   
    fastify.post('/update',UpdateStud)
    fastify.post('/delete',delStud)
    
    done()
}
module.exports = studentRoutes