/*
Features: 
1. (DONE) Calculate and display data based on an external factor 
    (ex: get the current date, and display how many days remaining until some event)
2. (DONE) Create and use a function that accepts two or more values (parameters), 
    calculates or determines a new value based on those inputs, and returns a new value
3. (DONE) Regex to validate Medicare ID (MBI) format. 


additional feature ideas & stretch ideas:  
- Searchable array of DX condes for common chronic conditions 
- Can I get a CSV file from Aprima w/fake patient information to test ability to parse and display outstanding AR data? 
- CSV file of insurance phone numbers and timely filing deadlines? 

Code clean up:
- Remove excessive comments, and commented out code snipets. 
- Add any necessary but missing comments.

Visual clean up:
- Tweak CSS more to make more visually appealing - move calculate button on timely filing calculator maybe?
- Select and apply a color scheme.
- Do I like it with or without the flexgrow on the column groups?

* * *BREAD CRUMBS* * *
Just finished: Added color change for MBI validation, and set input box to always display uppercase. 
Next: log historical timely filing dates - so multiple can display.
*/

function deadlinecalc(dateofservice, days){
    //adjust for timezone, so that dateofservice is not one day less than entered.
    dateofservice = new Date(dateofservice.getTime() + dateofservice.getTimezoneOffset() * 60000);

    let timelydate = new Date(dateofservice); //set timely date to date of service
    timelydate.setDate(dateofservice.getDate() + Number(days)); //add day quantity of timely filing deadline to the date of service. 
    timelydate = dateformatprint(timelydate);
    dateofservice = dateformatprint(dateofservice);
    document.getElementById("timelydeadline").innerHTML = `${timelydate} is the deadline for filing date of service ${dateofservice}`;
    
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

let mbiadjusted = mbientered.replace(/\s+/g, '').toUpperCase(); //remove all whitespace, and change to all uppercase. Upper case change needed even though CSS style set to text-transform.

let mbire = /^\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y0-9]{1}\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y0-9]{1}\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y]{1}\d{1}\d{1}$/; 

if (mbire.test(mbiadjusted)){ //if valid
    document.getElementById("mbi").value = mbiadjusted;
    document.getElementById("mbivalid").style.color = "green";
    document.getElementById("mbivalid").innerHTML = `${mbiadjusted} is a valid Medicare ID`
} else{
    document.getElementById("mbivalid").style.color = "red";
    document.getElementById("mbivalid").innerHTML = `${mbientered} is NOT a valid Medicare ID.`
    document.getElementById("mbi").style.color = "red";
}

}

//fomrat date in a string as MM/DD/YYYY
function dateformatprint(datetype){
    printmonth = (datetype.getMonth() + 1).toString().padStart(2, 0);
    printday = datetype.getDate().toString().padStart(2, 0);
    printyear = datetype.getFullYear().toString();
    printdate = `${printmonth}/${printday}/${printyear}`;
    return printdate;
}

function agingar(age){
    let agingdate = new Date()
    agingdate.setDate(today.getDate() - age);
    agingdate = dateformatprint(agingdate);
    return agingdate;
}

const today = new Date();
document.getElementById("today").innerHTML = `Today's Date is ${dateformatprint(today)}`;

let aging90 = agingar(90);
let aging180 = agingar(180);
let aging365 = agingar(365);

document.getElementById("agingdates").innerHTML = `90 days ago: ${aging90}<br>
180 days ago: ${aging180}<br>
365 days ago: ${aging365}`;

document.getElementById("mbi").addEventListener('click', colorchange => document.getElementById("mbi").style.color = "black");

