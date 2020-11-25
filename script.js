"use strict";

var article=function(titre, date, genre) {
    this.titre=titre;
    this.date=date;
    this.genre=genre;
};
var article1=new article("Mortal Kombat 11", "22/11/2020", "Baston");
var article2=new article("Among Us", "23/11/2020", "Action");
var article3=new article("Planet Coaster","21/11/2020", "Gestion");

var array=[article1, article2, article3];

console.log(array);