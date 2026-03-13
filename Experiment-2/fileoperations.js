//import a fs module
const fs=require('fs');

//writing a file
fs.writeFile('./sample.txt','Testing FS Module',(err)=>{

          if(err)
          {
           console.log("file not created");
          }
         console.log("File created successfully");
  })

//reading a file

fs.readFile('./sample.txt','utf8',(err,data)=>{
           if(err)
           {
            console.log("file not found");
            return;
           }
        console.log('Data in file:',data);
     
})

//Appending a file

 fs.appendFile('./sample.txt','adding extra',(err,data)=>{

          if(err)
           {
            console.log("file not updated");
            return;
           }
        console.log('Updated Data in file:',data);
           
   })

//Deleting a file

fs.unlink('./sample.txt',(err)=>{

          if(err){
           console.log("file not deleted");
          };
          console.log('file deleted');
   })

//creating a directory

fs.mkdir('./test1',(err)=>{
           if(err){
            console.log("Directory not created");
           }
           console.log("Directory created");
        });
