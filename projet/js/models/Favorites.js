/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.collections.favorites = Backbone.Collection.extend({
   url: app.url+"/favorites",
   model: app.models.release,
   parse: function(response){
       return response.data;
   }
});

