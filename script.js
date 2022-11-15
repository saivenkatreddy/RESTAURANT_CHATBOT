function talk() {
    var x = {
      "Hi": "Hi there!, SVR Restaurants here. How may I help you?",
      "Is the restaurant open?": "The timings are 7am to 11pm",
      "Are you accepting the orders now?": "Yes, we are accepting the orders",
      "Can I book a table?": "You can reserve a table by going to our website",
      "What kinds of food is available?": "We have continental and local foods. You can have a view of our Menu here [ MENU LINK ]",
      "What is the location of the restaurant?": "It's in the city center, opp to Primark. The postal code is NR1 2PZ",
      "Thanks for your help": "Always Welcome !!!",
      "Bye": "Bye Bye! Will meet you soon..."
    };
    var y = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = y + "<br>";
    if (y in x) {
      document.getElementById('chatLog').innerHTML = x[y] + "<br>";
    }
    else {
      document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }
  }
  