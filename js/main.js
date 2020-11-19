function deadlinecalc(dateofservice, days){
    //adjust for timezone, so that dateofservice is not one day less than entered.
    dateofservice = new Date(dateofservice.getTime() + dateofservice.getTimezoneOffset() * 60000);
    let timelydate = calcTimelyDate(dateofservice, days);
    
    dateofservice = dateformatprint(dateofservice);
    document.getElementById("timelydeadline").innerHTML = `${timelydate} is the deadline for filing date of service ${dateofservice}`;
}

function calcTimelyDate(dateofservice, days){
    let timelydate = new Date(dateofservice); //set timely date to date of service
    timelydate.setDate(dateofservice.getDate() + Number(days)); //add day quantity of timely filing deadline to the date of service. 
    timelydate = dateformatprint(timelydate);
    return timelydate;
}

function mbivalidate(mbientered){    
/*Medicare ID (MBI) example from CMS: 1EG4TE5MK73
Position key from CMS:
C A AN N A AN N A A N N
Where positions hold numbers and letters?
C – Numeric 1 thru 9 N – Numeric 0 thru 9 AN – Either A or N A – Alphabetic Character (A...Z); Excluding (S, L, O, I, B, Z)
*/

let mbiadjusted = mbientered.replace(/\s+/g, '').toUpperCase(); //remove all whitespace, and change to all uppercase. Upper case change needed even though CSS style set to text-transform.

let mbire = /^\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y0-9]{1}\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y0-9]{1}\d{1}[AC-HJ-KM-NP-RT-Y]{1}[AC-HJ-KM-NP-RT-Y]{1}\d{1}\d{1}$/; 

if (mbire.test(mbiadjusted)){ //if mbi valid
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

//calculate dates in the past, based on the age passed to it.
function agingar(age){
    let agingdate = new Date()
    agingdate.setDate(today.getDate() - age);
    agingdate = dateformatprint(agingdate);
    return agingdate;
}

const today = new Date();
document.getElementById("today").innerHTML = `Today's Date is ${dateformatprint(today)}`; //Displays in the header

let aging90 = agingar(90);
let aging180 = agingar(180);
let aging365 = agingar(365);

/*Display the aging AR*/
document.getElementById("agingdates").innerHTML = `90 days ago: ${aging90}<br>
180 days ago: ${aging180}<br>
365 days ago: ${aging365}`;

/*listen for change to MBI Validation input, that way it doesn't remain red after an invalid MBI format is entered*/
document.getElementById("mbi").addEventListener('click', colorchange => document.getElementById("mbi").style.color = "black");

