/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.collections.styles = Backbone.Collection.extend({
   url: app.url+"/styles",
   model: app.models.style,
    idPage:1,
   parse: function(response){
       return response.data;
   },
   getByID :function(id){
       var finalStyle;
        this.forEach(function(style){
           if(style.id == id)
           {
               finalStyle = style;
           }
       });
       return finalStyle;
   }
});

