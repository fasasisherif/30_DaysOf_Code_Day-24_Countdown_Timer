// JS CODES BEGIN
//<meta charset="utf-8">
/* I BEGIN TO SET VARIABLES TO THE CLASSES IN THE HTML FILE */ 

var minutes_now = document.getElementsByClassName("minutes_now")
var hours_now = document.getElementsByClassName("hours_now")
var todays_date = document.getElementsByClassName("todays_date")
var days_date22 = document.getElementsByClassName("days_date22")
var days_date33 = document.getElementsByClassName("days_date33")
var days_date44 = document.getElementsByClassName("days_date44")
var hours_date22 = document.getElementsByClassName("hours_date22")
var hours_date33 = document.getElementsByClassName("hours_date33")
var minutes_date22 = document.getElementsByClassName("minutes_date22")
var minutes_date33 = document.getElementsByClassName("minutes_date33")
var seconds_date22 = document.getElementsByClassName("seconds_date22")
var seconds_date33 = document.getElementsByClassName("seconds_date33")

/* I'M DONE WITH SETTING VARIABLES TO THE CLASSES IN THE HTML FILE */ 


/* THE 'new Date()' OBJECT IS USED TO GET */
//THE TIME IN MILLISECONDS RIGHT FROM WHEN IT 
//STARTED COUNTING IN 1970, WHEN IT WAS FIRST 
//ESTABLISHED UP TO THIS MOMENT 

//HERE, I GET THE NUMBER OF MILLISECONDS THAT 
//HAS PASSED SINCE 1970 UP TO "apr 27 2020 00:00:00". 
//I'LL BE NEEDING THIS SO I STORED IT I  A 
//VARIABLE CALLED 'count_down_date'

//NOTE THAT THE "getTime()" METHOD ADDED TO NEW DATE GETS THE TIME PASSED IN MILLISECONDS

/* WHEREAS, IF I DIDN'T ADD IT, IT WOULD GET THE TIME IN EXACTLY THIS FORMAT "Tue Apr 21 2020 14:08:17 GMT+0100 (West Africa Standard Time)" 
*/

var count_down_date = new Date("may 4 2020 00:00:00").getTime();	


/* I THEN DECLARE A FUNCTION WHERE I'LL BE DOING MOST OF THE WORK. IF YOU NOTICE, YOU'LL SEE THAT FOR THIS PROJECT, THE RESULT NEEDS TO BE UPDATED EVERY SECONDS BCOS IT'S A 'countdown timer' AND WE USE 'setInterval' WHICH IS PERFECT FOR THIS 
*/

function myfunc(){
		
var now = new Date()

/* THIS WILL GET THE TIME PASSED UP TO NOW SINCE NOTHING WAS SPECIFIED IN THE "new Date()" */
		
var date_now = new Date().getTime();		

/*THIS IS USED TO GET THE PRESENT MINUTE. IT STARTS FROM "0" AND ENDS AT "59" LIKE AN ARRAY*/ 	

/* ALSO THE MONTHS, DAYS, SECONDS ARE COUNTED USING THIS CONVENTION, EXCEPT THE DATE OF A MONTH */

minutes_now[0].innerHTML = now.getMinutes();

/* THIS "if statement" SOLVES A PROBLEM I HAD
WHERE THE A RESULT LIKE THIS "9:5" AS THE PRESENT TIME, BUT I WANTED IT LIKE THIS "09:05" */

/* SO WHAT I DID, WAS TO THE THE JAVASCRIPT THAT IF THE PRESENT MINUTE IS LESS THAN OR EQUALS TO "9", ADD A ZERO BEHIND IT */

/* THE PROBLEM IS SOLVED BUT ANOTHER PROBLEM ARISES, WHICH IS, AFTER THE "0" HAS BEEN ADDED, WHEN THE MINUTE GETS BACK TO A DOUBLE DIGIT FIGURE LIKE "59", THE ZERO IS STILL PRESENT */

/* THIS PROBLEM IS SOLVED WITH ANOTHER "if statement", WHICH IS IF THE MINUTE IS GREATER THAN OR EQUALS TO "10", THE "0" SHOULD BE REMOVED */

if (minutes_now[0].innerHTML <= 9){
minutes_now[0].innerHTML = "0" + now.getMinutes();		
		}
if (minutes_now[0].innerHTML >= 10){
minutes_now[0].innerHTML = now.getMinutes();		
		}		
		
/* I USED THE SAME METHOD FOR THE HOURS */	

hours_now[0].innerHTML = now.getHours();
if (hours_now[0].innerHTML <= 9){
hours_now[0].innerHTML = "0" + now.getHours();		
		}
if (hours_now[0].innerHTML >= 10){
hours_now[0].innerHTML = now.getHours();		
		}	
					
a = now.getMonth();
b = now.getDate();
c = now.getFullYear();

/* THE METHODS USED ABOVE LIKE "getMonth()", getDate()", AND "getFullYear()" ARE TO GET WHAT THEY RESPECTIVELY LITERALLY MEAN */

/* SINCE THE "getMonth()", RETURNS NUMBERS, I'M USING THIS ARRAY CALLED "all_months" TO RETURN THE MONTHS IN WORDS OR SHOULD I SAY "STRING"? */

var all_months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

/* COMING OF THE ECMASCRIPT 6, THE (` `) AND THE ${expression} CAN BE USED TO OUTPUT VARIABLES IN STRINGS. WHICH I USED BELOW */
 
todays_date[0].innerHTML = `${b} of ${all_months[a]} ${c} `

//NOW, TO THE MAIN PART

/* THE "diff" VARIABLE IS USED TO STORE THE NUMBER OF MILLISECONDS NOW AND THE FUTURE DATE WE'RE COUNTING DOWN TO. */

var diff = count_down_date - date_now;

/* "Maths.floor" ROUNDS THE NUMBER DOWN */

/* THE "toString(x)" METHOD CONVERTS THE NUMBER GOTTEN TO A STRING */

/* THE DIVISION GOING ON HERE IS USED TO GET THE NUMBER OF DAYS BETWEEN THAT FUTURE TIME AND NOW */

var days = [Math.floor(diff / (1000*60*60*24))].toString(10);

/* THIS IS USED TO GET THE REMAINDER OF THE NUMBER OF HOURS BETWEEN THAT FUTURE TIME AND NOW */

/* WE'RE NOT INTERESTED IN THE NUMBER OF HOURS BETWEEN THEN AND NOW BCOS THAT'S NOT WHAT'LL BE OUTPUTTED IN THE CODE WE DESIRE. 
WE ARE INTERESTED IN THE REMAINDER */

/* AND THIS IS THE SAME CONVENTION WE USE IN OUR "hours", "minutes", AND "seconds" */

/* I ALSO CONVERTED THE VALUE OF THE "day", "hours", "minutes", "seconds" GOTTEN INTO AN ARRAY TO GET THE INDIVIDUAL NUMBERS EASILY */

var hours = [Math.floor((diff % (1000*60*60*24)) / (1000*60*60))].toString(10);

var minutes = [Math.floor((diff % (1000*60*60)) / (1000*60))].toString(10);

var seconds = [Math.floor((diff % (1000*60)) / (1000))].toString(10);

/* THESE ARE TO DISPLAY THE "day", "hours", e.t.c CALCULATED INTO THE HTML */

/* I GET THE VALUES LIKE AN ELEMENT IS GOTTEN FROM AN ARRAY */

days_date22[0].innerHTML = days[0];
days_date33[0].innerHTML = days[1];
days_date44[0].innerHTML = days[2];
hours_date22[0].innerHTML = hours[0];
hours_date33[0].innerHTML = hours[1];
minutes_date22[0].innerHTML = minutes[0];
minutes_date33[0].innerHTML = minutes[1];
seconds_date22[0].innerHTML = seconds[0];
seconds_date33[0].innerHTML = seconds[1];


/* BECAUSE SOMETIMES THE WE CAN GET "0" OR A ONE DIGIT FIGURE AS THE RESULT, JAVASCRIPT SETS TO REMAINING ELEMENTS TO UNDEFINED */

/* THIS IS BCOS I'M TRYING TO OUTPUT A VARIABLE THAT DOES NOT EXIST IN THE ARRAY "hours", "minutes" e.t.c */

/* SO INSTEAD OF SHOWING "undefined" ON MY WEBPAGE, I SET THE DISPLAY TO "none" IN AN "if statement". THAT'S A CLEVER THING IF U ASK ME */

/* ANOTHER PROBLEM ARISES, WHICH IS, WHEN IT IS NOW DEFINED, IT STILL SHOWS "undefined" */

/* I CORRECT THAT BY USING ANOTHER IF STATEMENT TO SET THE DISPLAY BACK TO "block" */

/* THAT'S THE CONVENTION I USED IN THIS PART */

if (days_date22[0].innerHTML === "undefined"){
		days_date22[0].style.display ="none";
		}
if (days_date33[0].innerHTML === "undefined"){
		days_date33[0].style.display ="none";
		}
if (days_date44[0].innerHTML === "undefined"){
				days_date44[0].style.display ="none";
	 }
if (hours_date22[0].innerHTML === "undefined"){
				hours_date22[0].style.display ="none";
	 }
if (hours_date33[0].innerHTML === "undefined"){
				hours_date33[0].style.display ="none";
	 }
if (hours_date33[0].innerHTML === ("9")){
				hours_date33[0].style.display ="block";
	 }	 
if (minutes_date22[0].innerHTML === "undefined"){
				minutes_date22[0].style.display ="none";
	 }
if (minutes_date33[0].innerHTML === "undefined"){
				minutes_date33[0].style.display ="none";
	 }
if (minutes_date33[0].innerHTML === ("9")){
				minutes_date33[0].style.display ="block";
	 }
if (seconds_date22[0].innerHTML === "undefined"){
				seconds_date22[0].style.display ="none";
	 }
if (seconds_date33[0].innerHTML === "undefined"){
				seconds_date33[0].style.display ="none";
	 }
if (seconds_date33[0].innerHTML === ("9")){
				seconds_date33[0].style.display ="block";
	 }


/* THIS STATEMENT IS FOR WHEN THAT FUTURE DATE  NOW BECOMES THE PRESENT DATE */

/* HERE I TELL THE "setInterval" TO STOP WORKING BY USING "clearInterval" */

if (diff < 0){
clearInterval(myfunc);

/* THIS IS ALSO EXECUTED WHEN THE SUPPOSED TIME REACHES */

document.getElementById('expire').innerHTML =" This timer has reached the set date and as thus stopped.";		

		}		
			
}

/* I CALLED THE FUNCTION "myfunc" HERE OR ELSE THOSE THE JAVASCRIPT CODE WON'T RUN AT ALL UNTIL EXACTLY "1 second" BECAUSE OF THE "setInterval" */

myfunc()

/* THIS CALLS THE FUNCTION MYFUNC AFTER EVERY 1000 MILLISECONDS */

setInterval(myfunc,1000)


// JS CODES END.
