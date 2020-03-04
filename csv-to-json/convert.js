const csvtojson = require("csvtojson");
const fs = require('fs');

async function convert() {

        
var customer=[{
        fName:"a",
        lName:"aa",
        phoneNumber:"123",
        Email:"aa@gmail.com"
},
{
        fName:"b",
        lName:"bb",
        phoneNumber:"456",
        Email:"bb@gmail.com"
}]
var temp={
        firstName:"",
        lastName:"",
        phone:"",
        Email:""
}
temp.firstName=customer[0].fName
console.log(temp.firstName);

        await csvtojson()
            .fromFile("./Sample File - Sheet1.csv")
            .then((file) => {
                
                //console.log(typeof file);
                console.log(file);
                var newData=customer.map((data)=>{
                        // console.log(data);
                        
                        var Array3=Object.keys(data)
                        // console.log(Array3);
                        var ob={}
                        for(i=0;i<Array3.length;i++){

                                switch(Array3[i]){
                                        case "fName":
                                                Array3[i]="firstName";
                                                break;
                                        case "lName":
                                                Array3[i]="lastName";
                                                break;
                                        case "telePhone":
                                                Array3[i]="phone";
                                                break;

                                        case "Email":
                                                Array3[i]="Email";
                                                break;
                                        }
                                }
                                // console.log(Array3);
                        
                 });
                // console.log(newData);
                
                
                create(newData)
        })
        .catch((err)=>{console.log(err);});
}

async function create(file){
        await fs.writeFile("hello.json", JSON.stringify(file), function(err) {
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
