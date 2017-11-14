const express = require('express');
const axios = require('axios');

var _ = require('underscore');

const router = express.Router();

router.get('/movies', (req, res) => {
  axios.get(`http://localhost:3000/api/ExternalDummryEndPoint`) 
    .then((posts) => {
      var movies = posts.data;

      var flatten = [];
      movies.forEach((movie) => {
        var name = movie.name || 'Name Not Found';
        var roles = movie.roles;
        roles.forEach((role) => {
          role.movie = name;
          flatten.push(role);
        })
      });
      res.status(200).json(flatten);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});


router.get('/ExternalDummryEndPoint', (req, res) => {
 
  var list = [  
    {  
       "name":"Beverly Hills Cop",
       "roles":[  
          {  
             "name":"Axel Foley",
             "actor":"Eddie Murphy"
          },
          {  
             "name":"Billy Rosewood",
             "actor":"Judge Reinhold"
          },
          {  
             "name":"Sgt. Taggart",
             "actor":"John Ashton"
          },
          {  
             "name":"Jenny Summers",
             "actor":"Lisa Eilbacher"
          },
          {  
             "name":"Mikey Tandino",
             "actor":""
          },
          {  
            "name":"Test Name",
            "actor":"Test Actor"
         }
       ]
    },
    {  
      "name":"Stand By Me",
      "roles":[  
         {  
            "name":"Gorgie Lachance",
            "actor":"Wil Wheaton"
         },
         {  
            "name":"Chris Chambers",
            "actor":"River Phoenix"
         },
         {  
            "name":"Teddy Duchamp",
            "actor":"Corey Feldman"
         },
         {  
            "name":"Ace Merrill",
            "actor":"Keifer Sutherland"
         },
         {  
            "name":"The Writer",
            "actor":"Richard Dreyfuss"
         }
      ]
   },
   {  
      "name":"Star Trek",
      "roles":[  
         {  
            "name":"Romulan",
            "actor":"Wil Wheaton"
         },
         {  
            "name":"Kirk",
            "actor":"Chris Pine"
         },
         {  
            "name":"Nero",
            "actor":"Eric Bana"
         },
         {  
            "name":"Spock",
            "actor":"Leonard Nimoy"
         },
         {  
            "name":"Scotty",
            "actor":"Simon Pegg"
         },
         {  
            "name":"Amanda Grayson",
            "actor":"Winona Ryder"
         }
      ]
   }];   
    res.status(200).json(list);
});

module.exports = router;