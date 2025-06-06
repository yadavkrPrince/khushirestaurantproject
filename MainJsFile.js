const today_date = new Date();


    
// Format the date (you can format it however you like)
const formattedDate = today_date.toDateString(); // Example: "Mon Apr 28 2025"

// Display the date inside the paragraph
document.getElementById('date').innerText = formattedDate;


//time displaying function
let hours;
    function updateClock() {
      const now = new Date();
       hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;
      document.getElementById('time').textContent = timeString;


    }

    //greet id

    greet =document.getElementById("greet")

    if(hours > 6 && hours < 12){
      greet.textContent="Good Morning.."
    }
    else if(hours  > 12 && hours < 6){
      greet.textContent="Good Afternoon.."
    }
    else{
      greet.textContent="Good Evening.."

    }

    // Update the clock immediately
    updateClock();
    // Then update it every second
    setInterval(updateClock, 1000);



    
