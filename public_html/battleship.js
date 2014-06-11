/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var view = {displayMessage: function(msg){
           var messageArea = document.getElementById("messageArea");
           messageArea.innerHTML = msg;
        },
            displayMiss: function(location){
                var cell = document.getElementById(location);
                cell.setAttribute("class", "miss");
            },
            displayHit: function(location){
                var cell = document.getElementById(location);
                cell.setAttribute("class", "hit");
            }
    };

var controller = {};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{locations: ["06","16","26"], hits: ["","",""]},
    {locations: ["24","34","44"], hits: ["","",""]},
    {locations: ["10","11","12"], hits: ["","",""]}],
    fire: function(guess){
        
        for(var i = 0; i < this.numShips; i++)
        {
            var ship = this.ships[i];
            var index = ships.locations.indexOf(guess);
            if (index >= 0){
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship))
                {
                    this.shipsSunk++;
                    view.displayMessage("You sank my Battleship!");
                }
                return true;
            }            
              
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function (ship) 
        {
            for (var i = 0; i<this.shipLength; i++)
            {
                if (ship.hits[i] !== "hit") 
                {
                    return false;
                }
            }
           return true;
        }       
    };


