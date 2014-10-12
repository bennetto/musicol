/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.models.artist = Backbone.Model.extend({
  initialize: function(id) {
         this.url = app.url+"/artists/"+id
    },
    resetUrl: function(id) {
         this.url = app.url+"/artists/"+id
    }

});
