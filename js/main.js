/*
Features: 
1. Calculate and display data based on an external factor 
    (ex: get the current date, and display how many days remaining until some event)
2. Create and use a function that accepts two or more values (parameters), 
    calculates or determines a new value based on those inputs, and returns a new value
3.  Regex to validate Medicare ID (MBI) format. 


additional feature ideas & stretch ideas:  
- Text conversion MBID -> IVR input.
- Searchable array of DX condes for common chronic conditions 
- Can I get a CSV file from Aprima w/fake patient information to test ability to parse and display outstanding AR data? 

clean it up:
- create a function for date to string in preferred date print out format. 

* * *BREAD CRUMBS* * *
Just finished: MBI validation works.
Next: Build a website that actually uses the javascript code & displays the results.  
*/

function deadlinecalc(dateofservice, days){
    //adjust for timezone, so that dateofservice is not one day less than entered.
    dateofservice = new Date(dateofservice.getTime() + dateofservice.getTimezoneOffset() * 60000);
    console.log(dateofservice);

    let timelydate = new Date(dateofservice); //set timely date to date of service
    timelydate.setDate(dateofservice.getDate() + Number(days)); //add day quantity of timely filing deadline to the date of service. 

    console.log(`${timelydate.getMonth()+1}/${timelydate.getDate()}/${timelydate.getFullYear()}`);
}

function mbivalidate(mbientered){
    
/*Medicare ID are Unique, randomly generated, and "non-intelligent." Non-intellegent means the characters do not have hidden or special meaning
Format:
• 11 characters in length, and made up of only numbers and uppercase letters.
• The MBI’s 2nd, 5th, 8th, and 9th characters are always letters.
• Characters 1, 4, 7, 10, and 11 are always numbers.
• The 3rd and 6th characters are letters or numbers.
• We don’t use dashes in the MBI. They aren’t part of our computer systems and we don’t use them in file formats.

Example from CMS: 1EG4TE5MK73

C A AN N A AN N A A N N
Where positions hold numbers and letters?
C – Numeric 1 thru 9 N – Numeric 0 thru 9 AN – Either A or N A – Alphabetic Character (A...Z); Excluding (S, L, O, I, B, Z)

position 1: ^\d{1}
Position 2: [AC-HJ-KM-NP-RT-Y]{1}
Position 3: [AC-HJ-KM-NP-RT-Y\d]{1}
Position 4: \d{1}
Position 5: [AC-HJ-KM-NP-RT-Y]{1}
Position 6: [AC-HJ-KM-NP-RT-Y\d]{1}
Position 7: \d{1}
Position 8: [AC-HJ-KM-NP-RT-Y]{1}
Position 9: [AC-HJ-KM-NP-RT-Y]{1}
Position 10: \d{1}
Position 11: \d{1}
*/
let mbiadjusted = mbientered.replace(/\s+/g, '').toUpperCase(); //remove all whitespace, and change to all uppercase

let mbire = /^\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y0-9]{1}\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y0-9]{1}\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y]{1}\d{1}\d{1}$/; 
console.log(mbire.test(mbiadjusted));
}

const today = new Date();
console.log(`Begin: ${today}`);

let oneeighty = new Date();
oneeighty.setDate(today.getDate() - 180);
console.log(oneeighty);
console.log(`180 days ago: ${oneeighty.getMonth()+1}/${oneeighty.getDate()}/${oneeighty.getFullYear()}`);


let nintey = new Date();
nintey.setDate(today.getDate() - 90);
console.log(`90 days ago: ${nintey.getMonth()+1}/${nintey.getDate()}/${nintey.getFullYear()}`);

let oneyear = new Date();
oneyear.setDate(today.getDate() - 365);
console.log(`365 days ago: ${oneyear.getMonth()+1}/${oneyear.getDate()}/${oneyear.getFullYear()}`);
