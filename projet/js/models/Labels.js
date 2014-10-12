/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.collections.labels = Backbone.Collection.extend({
   url: app.url+"/labels",
   model: app.models.label,
    idPage:1,
   parse: function(response){
       return response.data;
   },
    nextFetch: function() {
        this.idPage += 1;

        var labelTmp = new app.collections.labels();
        labelTmp.fetch({headers: {'Authorization': app.authorizateId}, data: {page: this.idPage},
            success: function() {
                
                
                
                
                
                
              labelTmp.forEach(function(label) {
                    app.datas.labels.add(label);
                });
                
                
            }
        });
    },
   getByID :function(id){
       var finalLabel;
        this.forEach(function(label){
           if(label.id == id)
           {
               finalLabel = label;
           }
       });
       return finalLabel;
   }
});
