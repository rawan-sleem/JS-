function randomText() {
  var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“A room without books is like a body without a soul.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  ];
  var quoteName = [
    "--Oscar Wilde",
    "--Marilyn Monroe",
    "--Marcus  Cicero",
    "--Dr. Seuss",
  ];
  var num = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML =
        quotes[num];
  document.getElementById("quote2").innerHTML =
        quoteName[num];
    
}
