var accomodationCost = 0;
var numP = 0;
var flightCost = 0;
var totalActCost = 0;
var totalGetCost = 0;
var discount = 0;
//function to show participating hotels		
			function showParticipatingHotel(){
				var loc1 = document.getElementById("loc1");
				var loc2 = document.getElementById("loc2");
				var loc3 = document.getElementById("loc3");
				var loc4 = document.getElementById("loc4");
				var loc5 = document.getElementById("loc5");
				var loc6 = document.getElementById("loc6");
				
				loc1.onclick = function(){
					alert("The participating hotel for this destination is Melia Nassau Beach Resort. Its daily rate is $395.");
				}
				loc2.onclick = function(){
					alert("The participating hotel for this destination is Paradisus Cancun Resort and Spa. Its daily rate is $325.");
				}
				loc3.onclick = function(){
					alert("The participating hotel for this destination is Dreams Palm Beach Punta Cana. Its daily rate is $280.");
				}
				loc4.onclick = function(){
					alert("The participating hotel for this destination is Round Hill Hotel and Villas Resort. Its daily rate is $265.");
				}
				loc5.onclick = function(){
					alert("The participating hotel for this destination is Hilton Hawaiian Village. Its daily rate is $275.");
				}
				loc6.onclick = function(){
					alert("The participating hotel for this destination is Grand Wailea Resort Hotel & Spa. Its daily rate is $350.");
				}
			}
			function getNames()
			{
				var names = document.getElementById("names").value.split(",");
				numP = names.length; 
				return names;
			}
			function getLocation()
			{
				var destinations = document.getElementsByName("getAwayDestination");
				for(var i=0;i<destinations.length; i++)
				{
					if(destinations[i].checked == true)
					{
						if(i == 0)
						{
							accomodationCost += 395;
							flightCost = numP*600;
						}
						
						else if(i == 1)
						{
							accomodationCost += 325;
							flightCost = numP*500;
						}
						
						else if(i == 2)
						{
							accomodationCost +=280;
							flightCost = numP*675;
						}
						
						else if(i == 3)
						{
							accomodationCost +=265;
							flightCost = numP*610;
						}
						
						else if(i == 4)
						{
							accomodationCost +=275;
							flightCost = numP*425;
						}
						
						else if(i == 5)
						{
							accomodationCost +=350;
							flightCost = numP*450;
						}
						
						return destinations[i].value;
					}
					
				}
			}
			function getParticipatingHotel()
			{
				var loc1 = document.getElementById("loc1");
				var loc2 = document.getElementById("loc2");
				var loc3 = document.getElementById("loc3");
				var loc4 = document.getElementById("loc4");
				var loc5 = document.getElementById("loc5");
				var loc6 = document.getElementById("loc6");
				
				var hotel;
				if(loc1.checked)
				hotel = "Melia Nassau Beach Resort";
				else if(loc2.checked)
				hotel = "Paradisus Cancun Resort and Spa";
				else if(loc3.checked)
				hotel = "Dreams Palm Beach Punta Cana";
				else if(loc4.checked)
				hotel = "Round Hill Hotel and Villas Resort";
				else if(loc5.checked)
				hotel = "Hilton Hawaiian Village";
				else if(loc6.checked)
				hotel = "Grand Wailea Resort Hotel & Spa";
				
				return hotel;
			}
			function getDuration()
			{
				var dur = document.getElementById("duration");
				var selectedVal = dur.options[dur.selectedIndex].value;
				if(selectedVal.substring(0,1) == "3")
				discount = accomodationCost*0.05;
				else if(selectedVal.substring(0,1) == "5")
				discount = accomodationCost*0.075;
				else if(selectedVal.substring(0,1) == "7")
				discount = accomodationCost*0.10;
				return selectedVal;
			}
			function getRoomType()
			{
				var roomT = document.getElementById("roomType");
				var selectedVal = roomT.options[roomT.selectedIndex].value;
				if(roomT.selectedIndex == 1)
				accomodationCost += 0;
				else if(roomT.selectedIndex == 2)
				accomodationCost += 20;
				else if(roomT.selectedIndex == 3)
				accomodationCost += 40;
				
				return selectedVal;
			}
			function getRoomLoc()
			{
				var roomL = document.getElementById("roomLoc");
				if(roomL.selectedIndex == 1)
				accomodationCost += 0;
				else if(roomL.selectedIndex == 2)
				accomodationCost += 25;
				else if(roomL.selectedIndex == 3)
				accomodationCost += 50;
				
				return roomL.options[roomL.selectedIndex].value;
			}
			function getAccCost()
			{
				return "$"+(accomodationCost - discount);
			}
			function getFlightCost()
			{
				return "$"+flightCost;
			}
			function getActivities()
			{
				var actNames="";
				var acts = document.getElementsByName("activity");
				for(var i = 0;i<acts.length;i++)
				{
					if(acts[i].checked)
					{
						if(i == 0)
						{
							actNames += "Airport Pick-up/Drop-off"+",";	
							totalActCost += 125;
						}
						if(i == 1)
						{
							actNames += "Romantic Dinner for two"+",";
							totalActCost += 150;
						}
						if(i == 2)
						{
							actNames += "Professional Photo Session"+",";
							totalActCost += 550;
						}
					}
				}
				actNames = actNames.substr(0,actNames.length-1);
				return actNames.trim();
			}
			function getActCost(s)
			{
				var cost = 0;
				if(s == "Airport Pick-up/Drop-off")
				cost = 125;
				else if(s == "Romantic Dinner for two")
				cost = 150;
				else if(s == "Professional Photo Session")
				cost = 550;
				return "$"+cost;
			}
			//function to process booking Summary
			function processBooking()
			{
				var flag = true;
				if(getNames() == "" )
				{
					alert("Please enter the names");
					flag = false;
				}
				if(getLocation() == "")
				{
					alert("Please select a destination");
					flag = false;
				}
				if(getDuration() == "")
				{
					alert("Please select a duration");
					flag = false;
				}
				if(getRoomType() == "")
				{
					alert("Please select a room type");
					flag = false;
				}
				if(getRoomLoc() == "")
				{
					alert("Please select a room location");
					flag = false;
				}
				if(flag)
				{
					accomodationCost = 0;
					discount = 0;
					numP = 0;
					flightCost = 0;
					totalActCost = 0;
					totalGetCost = 0;
				
					var table = document.getElementById("bookingSummary");
					table.innerHTML = "";
					
					var row = table.insertRow(0);
					var cell1 = row.insertCell();
					cell1.innerHTML = "The couple's names: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getNames();
					
					var row = table.insertRow(1);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Selected Destination: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getLocation();
					
					var row = table.insertRow(2);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Participating hotel/ Resort: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getParticipatingHotel();
					
					var row = table.insertRow(3);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Room type: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getRoomType();
					
					var row = table.insertRow(4);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Room location: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getRoomLoc();
					
					var row = table.insertRow(5);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Duration of stay: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getDuration();
					
					var row = table.insertRow(6);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Accommodation cost: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getAccCost();
					
					var row = table.insertRow(7);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Flight cost: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = getFlightCost();
					
					var row = table.insertRow(8);
					var cell1 = row.insertCell();
					cell1.innerHTML = "Activities selected: ";
					var cell2 = row.insertCell();
					var activities = getActivities();
					if(activities == "")
					cell2.innerHTML = "None";
					else
					{
						cell2.innerHTML = activities;
						activities = activities.split(",");
						for(var i  =0;i<activities.length;i++)
						{
							var row = table.insertRow(8+(i+1));
							var cell1 = row.insertCell();
							cell1.innerHTML = "Activity "+(i+1);
							var cell2 = row.insertCell();
							cell2.innerHTML = getActCost(activities[i]);
						}
					}
					
					var row = table.insertRow();
					var cell1 = row.insertCell();
					cell1.innerHTML = "Total Activities Cost: ";
					var cell2 = row.insertCell();
					cell2.innerHTML = "$"+ totalActCost;
					
					var row = table.insertRow();
					var cell1 = row.insertCell();
					cell1.innerHTML = "<b>Total Getaway Cost: </b>";
					var cell2 = row.insertCell();
					totalGetCost = (accomodationCost-discount) + flightCost + totalActCost;
					cell2.innerHTML = "<b>$"+totalGetCost+"</b>";
					
				}
				
			}
			function ToggleFormDisplay()
			{
				var vacationForm = document.getElementById("form1");
				vacationForm.style.display = "none";
				var disp = document.getElementById("dispForm");
				disp.onclick = function(){
						vacationForm.style.display = "block";
				};
			}
			//call/invoke the function
			showParticipatingHotel();
			document.getElementById("btnSubmit").onclick = function(){
				ToggleFormDisplay();
				processBooking();
			};