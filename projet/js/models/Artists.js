/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.collections.artists = Backbone.Collection.extend({
   url: app.url+"/artists",
   model: app.models.artist,
       idPage:1,
   parse: function(response){
       return response.data;
   },
    nextFetch: function() {
        this.idPage += 1;

        var artistTmp = new app.collections.artists();
        artistTmp.fetch({headers: {'Authorization': app.authorizateId}, data: {page: this.idPage},
            success: function() {
              artistTmp.forEach(function(artist) {
                    app.datas.artists.add(artist);
                });
            }
        });
    },
   getByID :function(id){
       var finalArtist;
        this.forEach(function(artist){
           if(artist.id == id)
           {
               finalArtist = artist;
           }
       });
       return finalArtist;
   }
});

//beforeSend: function (xhr) { xhr.setRequestHeader ("Authorization", "Basic xxxxxxxxxxxx"); },

//var artists = new Artists();

    /*
    artist.credentials = {
        username: '5282389ed02ea71c1d8b4573',
        password: '',
        id:'257234'
    };
    */

//artists.fetch( {headers:{'Authorization' :'Basic NTI4MjM4OWVkMDJlYTcxYzFkOGI0NTczOg==:'}});



