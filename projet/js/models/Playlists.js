/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.collections.playlists = Backbone.Collection.extend({
   url: app.url+"/playlists",
   model: app.models.playlist,
   parse: function(response){
       return response.data;
   }
});

