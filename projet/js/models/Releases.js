/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.collections.releases = Backbone.Collection.extend({
   url: app.url+"/releases",
   idPage:1,
   model: app.models.release,
   parse: function(response){
       return response.data;
   },
    nextFetch: function() {
        this.idPage += 1;

        var releaseTmp = new app.collections.releases();
        releaseTmp.fetch({headers: {'Authorization': app.authorizateId}, data: {page: this.idPage},
            success: function() {
                releaseTmp.forEach(function(release) {
                    app.datas.releases.add(release);
                });
            }
        });
    },
   getByID :function(releaseId){
       var finalRelease;
        this.forEach(function(release){
           if(release.id == releaseId)
           {
               finalRelease = release;
           }
       });
       return finalRelease;
   }
});

