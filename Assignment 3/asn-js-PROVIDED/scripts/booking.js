/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var number_of_days = 0;
var cost = 0;
var Monday = document.getElementById("monday");
var Tuesday = document.getElementById("tuesday");
var Wednesday = document.getElementById("wednesday");
var Thursday = document.getElementById("thursday");
var Friday = document.getElementById("friday");
var Calculated_Cost = document.getElementById("calculated-cost");
var Full_Day = document.getElementById("full");
var Half_Day = document.getElementById("half");
var Cleared = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function color_change(day){ 
  if (day.classList.contains("clicked")== true){
      number_of_days-=1;
  }
  day.classList.add("clicked");
  if (day.classList.contains("clicked")== true){
          number_of_days +=1;
      if (Half_Day.classList.contains("clicked")==true) {
          half_day_payment();
      }else if (Full_Day.classList.contains("clicked")==true){
          full_day_payment();
      }
  }
}

Monday.onclick=function(){color_change(Monday);};

Tuesday.onclick=function(){color_change(Tuesday);};

Wednesday.onclick=function(){color_change(Wednesday);};

Thursday.onclick=function(){color_change(Thursday);};

Friday.onclick=function(){color_change(Friday);};




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
Cleared.onclick = function(){clear_days();};

function clear_days(){
    if (1==1){
        Monday.classList.remove("clicked");
        Tuesday.classList.remove("clicked");
        Wednesday.classList.remove("clicked");
        Thursday.classList.remove("clicked");
        Friday.classList.remove("clicked");
        Calculated_Cost.innerHTML="0";
        number_of_days = 0;
    }
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
Half_Day.onclick=function(){half_day_payment();};

function half_day_payment(){
    let rate = 20;
    Half_Day.classList.add("clicked");
    Full_Day.classList.remove("clicked");
    cost = rate*number_of_days;
    calculation(cost);
}




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
Full_Day.onclick=function(){full_day_payment();};
function full_day_payment(){
    let rate = 35;
    Full_Day.classList.add("clicked");
    Half_Day.classList.remove("clicked");
    cost = rate*number_of_days;
    calculation(cost);
}





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation(cost){
  Calculated_Cost.innerHTML=cost;
}

