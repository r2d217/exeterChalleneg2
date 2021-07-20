const { default: fastify } = require("fastify")
const myObj = require("../StudentRecord")
var size = myObj["Student_details"].length
var flag =0
let table = require("table");
let data, config;
data=[
    ["StudenName","Student ID","Subject 1","Subject 2","Subject 3","Subject 4","Subject 5"]]
   
 
for(let i=0; i<myObj["Student_details"].length;i++)
{
   data.push([ myObj["Student_details"][i].studentName, myObj["Student_details"][i].studentID, myObj["Student_details"][i].subject1, myObj["Student_details"][i].subject2, myObj["Student_details"][i].subject3, myObj["Student_details"][i].subject4, myObj["Student_details"][i].subject5])
}
 
config = {
  
    // Predefined styles of table
    border: table.getBorderCharacters("ramac"),
  }

  let x = table.table(data, config);
const addStudent = (req,reply) =>{
    console.log(size)
    for(let i=0;i<size;i++)
    {
        if(req.body.studentID == myObj["Student_details"][i].studentID)
        {
            console.log("hellps")
        reply.code(400).send({Message:'Studnet Id already exist'})
        flag=1
        }
    }
        if(flag==0){
            const newstud ={
                studentName:req.body.studentName,
                studentID: req.body.studentID,
                subject1:req.body.subject1,
                subject2:req.body.subject2,
                subject3:req.body.subject3,
                subject4:req.body.subject4,
                subject5:req.body.subject5
            }
            myObj["Student_details"][size]=newstud;
            console.log(x)   
            
       reply.code(201).send(myObj["Student_details"][size])
       size++;
        }
       

}

const UpdateMarks = (req,reply) =>
{
    
    for(let j=0;j<size;j++)
    {
        if(req.body.studentID == myObj["Student_details"][j].studentID)
        {
            if("subject1"==req.body.subjectName)
            {
                myObj["Student_details"][j].subject1=req.body.subjectMarks
                
                reply.code(202).send(myObj["Student_details"][j])
            }
            else if("subject2"==req.body.subjectName)
            {
                myObj["Student_details"][j].subject2=req.body.subjectMarks
               
                reply.code(202).send(myObj["Student_details"][j])
            }
            else if("subject3"==req.body.subjectName)
            {
                myObj["Student_details"][j].subject3=req.body.subjectMarks
               
                reply.code(202).send(myObj["Student_details"][j])
            }
            else if("subject4"==req.body.subjectName)
            {
                myObj["Student_details"][j].subject4=req.body.subjectMarks
               
                reply.code(202).send(myObj["Student_details"][j])
            }
            else if("subject5"==req.body.subjectName)
            {
                myObj["Student_details"][j].subject5=req.body.subjectMarks
                
                reply.code(202).send(myObj["Student_details"][j])
            }
           else
           {
            reply.code(450).send({Message:'wrong student id or subject name'})
           }     
            
        }
    }
    
}
let f=0
const deleteStud = (req,reply) =>
{
    for(let j=0;j<size;j++)
    {
        if(req.body.studentID == myObj["Student_details"][j].studentID)
        {
            myObj["Student_details"].splice(j,1);
            reply.code(300).send({Message:'Record Deleted'})
            f==1
        }
    }
    if(f==1)
    {
        reply.code(300).send({Message:'Wrong studid'})
    }
}
module.exports={addStudent,UpdateMarks,deleteStud}