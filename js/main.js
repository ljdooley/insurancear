/*
Features: 
1. Calculate and display data based on an external factor 
    (ex: get the current date, and display how many days remaining until some event)
2. Create and use a function that accepts two or more values (parameters), 
    calculates or determines a new value based on those inputs, and returns a new value
3.  TBD

Third feature ideas: 
- Can I substitue a date format instead of the phone number or email address regex? 
- A form to submit some sort of information
- Create a DX array that is searchable to look for chronic condition codes
- Can I get a CSV file from Aprima w/fake patient information to test ability to parse and display outstanding AR data? 

* * *BREAD CRUMBS* * *
Just finished: calculate based on external factor.
Next: start feature two - set up the inputs. 
*/

const today = new Date();
console.log(`Begin: ${today}`);

let oneeighty = new Date();
oneeighty.setDate(today.getDate() - 180);
console.log(`180 days ago: ${oneeighty.getMonth()+1}/${oneeighty.getDate()}/${oneeighty.getFullYear()}`);

let nintey = new Date();
nintey.setDate(today.getDate() - 90);
console.log(`90 days ago: ${nintey.getMonth()+1}/${nintey.getDate()}/${nintey.getFullYear()}`);

let oneyear = new Date();
oneyear.setDate(today.getDate() - 365);
console.log(`365 days ago: ${oneyear.getMonth()+1}/${oneyear.getDate()}/${oneyear.getFullYear()}`);