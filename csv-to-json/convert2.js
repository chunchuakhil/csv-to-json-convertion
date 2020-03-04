const csvtojson = require("csvtojson");
const fs = require('fs');

async function convert() {

        
// var customer=[{
//         fName:"a",
//         lName:"aa",
//         phoneNumber:"123",
//         Email:"aa@gmail.com"
// },
// {
//         fName:"b",
//         lName:"bb",
//         phoneNumber:"456",
//         Email:"bb@gmail.com"
// }];
var tempObj={
        firstName:"",
        lastName:"",
        phone:"",
        Email:""
}
var arr=[];
// temp.firstName=customer[0].fName
// console.log(temp.firstName);

        await csvtojson()
            .fromFile("./Sample File - Sheet1.csv")
            .then((customer) => {
                for(var i=0;i<customer.length;i++){
                    var temp=Object.assign({},tempObj);
                    var obj=customer[i];
                    for(var prop in obj){
                        // console.log(prop);
                        // console.log(obj[prop]);
                        switch(prop){
                            case "fName":{
                                temp.firstName=obj[prop];
                                break;
                            }
                            case "lName":{
                                temp.lastName=obj[prop];
                                break;
                            }
                            case "telePhone":{
                                temp.phone=obj[prop];
                                break;
                            }
                            case "Email":{
                                temp.Email=obj[prop];
                                break;
                            }
                        } 
                    }
                    // console.log(arr);
                    // console.log(temp);
                    arr.push(temp)
                    // console.log(arr);   
                }
            })
            console.log(arr);
            create(arr)
}
async function create(arr){
        await fs.writeFile("hello.json", JSON.stringify(arr), function(err) {
          if(err) {
               console.log(err);
            }
            else{                    
            console.log("The file was saved!");
            }
        }); 
}
convert();
//create();
