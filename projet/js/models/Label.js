/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.models.label = Backbone.Model.extend({
   initialize: function(id) {
         this.url = app.url+"/labels/"+id
    },
    resetUrl: function(id) {
         this.url = app.url+"/labels/"+id
    }
 
});
