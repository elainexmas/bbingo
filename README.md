bbingo
======

a rare events bingo game

adapted from: http://threadbarecanvas.azurewebsites.net/jquery/bingo-card-javascript-and-jquery/

# Installation

1. Clone the repo.
2. Create a "data.txt" file and place it in the same directory as index.html (See below for instructions)
3. In the same directory as index.html, run a simple HTTP server by issuing the command
`python -m SimpleHTTPServer`
4. Navigate to 127.0.0.1:8000 in your browser and play!

---
## Notes:

You can mess with the weights and items in data.txt.  The weighting is:
1 = rare event
2 = neither rare nor common
3 = common event

Try not to exceed 3,... javascript multiplies all the weights together before it does the sampling.  If the product gets too big.. yea... not good.  Alternatively, make sure the product is at least 25 so there are enough options to fill all the squares.

# Data.txt format:

event,weight

-no headers!
