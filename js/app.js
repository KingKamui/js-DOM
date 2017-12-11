/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

document.getElementById("name1").innerHTML ="'Tay-Tay'";


/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/

document.getElementById("position2").innerHTML = "Project Manager";
document.getElementById("position2").styles.color = "red";


/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/
document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").styles.fontSize = "40px";


/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/

document.getElementsByClassName("profile")[0].innerHTML = "Come on over to my neighborhood";
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif";


/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/

document.getElementByClassName("profile")[1].className = "Adapt what is useful, reject what is useless, and add what is specifically your own.";


/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/

document.getElementByClassName("alias")[2].className = "Nick Fury, Richmond Valentine";


/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
//What I did in Comment Code
 /*
 document.createElement("div");
 document.createElement("id="name7"");
 document.getElementById("name7").innerHTML = "Peter Griffin";
 */

var insert = document.createElement("div");
insert.id = "name7";
insert.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(insert);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
//What I did in Comment Code
/*
 document.createElement("div");
 document.createElement("id="alias8"");
 document.getElementById("alias8").innerHTML = "Old Man Riverwalk";
 document.appendChild("id="alias8"");
 */

var insert2 = document.createElement("div");
insert2.id = "alias8";
insert2.innerHTML = "Old Man RiverWalk";
document.getElementById("aliasParent").appendChild(insert2);


//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

var insert3 = document.createElement("div");
insert3.id = "TITLE";
insert3.innerHTML = "King Kamui";
document.getElementById("nameParent").appendChild(insert3);

var insert4 = document.createElement("div");
insert4.id = "Status";
insert4.innerHTML = "Dragon King Of The Invisisble Kingdom";
document.getElementById("statusParent").appendChild(insert4);

var insert5 = document.createElement("div");
insert5.id = "self-bio";
insert5.innerHTML = "...";
document.getElementById("bioParent").appendChild(insert5);