/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   

app.models.release = Backbone.Model.extend({
   // url: app.url+"/releases/"+this.id,
   page:1,
    initialize: function(id) {
         this.url = app.url+"/releases/"+id
    },
    resetUrl: function(id) {
         this.url = app.url+"/releases/"+id
    }
});

