# Insurance AR Tools
Managing the insurance portion of the revenue cycle at a doctors practice can require many windows and tabs to be open at one time. 

This program consolidates some of the browser tabs that I open on a regular basis, so that the information needed can be easily accessed without additional tabs or searches.

## Features
* Calculate and display data based on an external factor.
    Program displays 90 days ago, 180 days ago, and 365 days ago under Aging AR dates, this is calculated based on today's date.
* Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
    This is displayed in the timely filing calculator. It passes the date of service, and the days (90, 180, 365) to a function, and then displays the timely filing deadline for the entered date of service.
* Regex to validate Medicare ID (MBI) format. 
    * 11 characters in length, and made up of only numbers and uppercase letters.
    * The MBI’s 2nd, 5th, 8th, and 9th characters are always letters.
    * Characters 1, 4, 7, 10, and 11 are always numbers.
    * The 3rd and 6th characters are letters or numbers.
    * No dashes.
    Information source for MBI format: https://www.cms.gov/medicare/new-medicare-card/understanding-the-mbi-with-format.pdf
