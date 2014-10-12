/**
 * Created with JetBrains WebStorm.
 * User: benjamin
 * Date: 02/10/13
 * Time: 10:22
 * To change this template use File | Settings | File Templates.
 */




var hideCollapse = function()
{
    if($("#bs-example-navbar-collapse-1").height() >0)
    {
    /*for (var i = 0; i < $("#bs-example-navbar-collapse-1")[0].classList.length; i++)
    {
        if ($("#bs-example-navbar-collapse-1")[0].classList.item(i) == "in") {*/
            $("#bs-example-navbar-collapse-1").collapse('hide');
       // }
    }
}

app.views.profil = Backbone.View.extend({
    render: function() {
        app.el.html(_.template($('#template_profil').html(), {}));

        $('#menu-profil').attr('class', 'active');
    }
})




app.views.invitation = Backbone.View.extend({
    render: function() {
        app.el.html(_.template($('#template_invitation').html(), {}));

        $('#menu-invitation').attr('class', 'active');
    }
})

app.views.playlists = Backbone.View.extend({
    render: function() {
        app.el.html(_.template($('#template_playlists').html(), {}));

        $('#menu-playlists').attr('class', 'active');
    }
})

app.views.lecture = Backbone.View.extend({
    render: function() {
        app.el.html(_.template($('#template_lecture').html(), {}));

        $('#menu-lecture').attr('class', 'active');
        if( $(".playlistCurrent").find('td')[app.currentPlaylist.currentPosition] != undefined)
        {
         $(".playlistCurrent").find('td')[app.currentPlaylist.currentPosition].classList.add("info");
     }
        
    }

})


app.views.releases = Backbone.View.extend({
    initialize: function() {
        
            app.datas.releases = new app.collections.releases();
            
        this.template = _.template($("#template_bibliotheque").html());
        _.bindAll(this, 'render');
        app.datas.releases.bind('reset', this.render);
        //app.datas.releases.bind('change', this.render);
        app.datas.releases.bind('add', this.render);
        app.datas.releases.bind('remove', this.render);
    },
    render: function() {
   hideCollapse();
        if(app.datas.releases.models == 0) // si pas de donne on va les chercher
        {
            app.datas.releases.fetch({headers:{'Authorization' :app.authorizateId}});
               var loadTemplate = _.template($("#template_load").html());
                    var renderedContent = loadTemplate({});
                    app.el.html(renderedContent);
            
        }
else
{
    

        var renderedContent = this.template({
            releases: app.datas.releases
        });
        app.el.html(renderedContent);

        $('#menu-bibliotheque').attr('class', 'active');
        }
        
  if($("#bs-example-navbar-collapse-1").height() >0)
    {
            $("#bs-example-navbar-collapse-1").collapse('hide');
    }
    }
    

});


app.views.styles = Backbone.View.extend({
    initialize: function() {
        
          app.datas.styles = new app.collections.styles();

            
        this.template = _.template($("#template_styles").html());
        _.bindAll(this, 'render');
        app.datas.styles.bind('reset', this.render);
       // app.datas.styles.bind('change', this.render);
        app.datas.styles.bind('add', this.render);
        app.datas.styles.bind('remove', this.render);
    },
    render: function() {
   hideCollapse();
        if(app.datas.styles.models == 0) // si pas de donnÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©e on va les chercher
        {
            app.datas.styles.fetch({headers:{'Authorization' :app.authorizateId}});
               var loadTemplate = _.template($("#template_load").html());
                    var renderedContent = loadTemplate({});
                    app.el.html(renderedContent);
        }else{

        var renderedContent = this.template({
            styles: app.datas.styles
        });
        app.el.html(renderedContent);

        $('#menu-bibliotheque').attr('class', 'active');
        
    }
      if($("#bs-example-navbar-collapse-1").height() >0)
    {
            $("#bs-example-navbar-collapse-1").collapse('hide');
    }
}

});





app.views.artists = Backbone.View.extend({
    initialize: function() {
        
        app.datas.artists = new app.collections.artists();
        
        this.template = _.template($("#template_artists").html());
        _.bindAll(this, 'render');
        app.datas.artists.bind('reset', this.render);
       // app.datas.artists.bind('change', this.render);
        app.datas.artists.bind('add', this.render);
        app.datas.artists.bind('remove', this.render);
    },
    render: function() {
   hideCollapse();
        if(app.datas.artists.models == 0) // si pas de donnÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©e on va les chercher
        {
            app.datas.artists.fetch({headers:{'Authorization' :app.authorizateId}});
            
               var loadTemplate = _.template($("#template_load").html());
                    var renderedContent = loadTemplate({});
                    app.el.html(renderedContent);
        }
else
{
        var renderedContent = this.template({
            artists: app.datas.artists
        });
        app.el.html(renderedContent);

        $('#menu-bibliotheque').attr('class', 'active');
        }
          if($("#bs-example-navbar-collapse-1").height() >0)
    {
            $("#bs-example-navbar-collapse-1").collapse('hide');
    }
    }

});




app.views.labels = Backbone.View.extend({
    initialize: function() {
     
    app.datas.labels = new app.collections.labels();


        this.template = _.template($("#template_labels").html());
        _.bindAll(this, 'render');
        app.datas.labels.bind('reset', this.render);
        //app.datas.labels.bind('change', this.render);
        app.datas.labels.bind('add', this.render);
        app.datas.labels.bind('remove', this.render);
    },
    render: function() {

   hideCollapse();

        if (app.datas.labels.models == 0) // si pas de donnÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©e on va les chercher
        {
            app.datas.labels.fetch({headers: {'Authorization': app.authorizateId}});
            var loadTemplate = _.template($("#template_load").html());
            var renderedContent = loadTemplate({});
            app.el.html(renderedContent);
        }
        else {
            var renderedContent = this.template({
                labels: app.datas.labels
            });
            app.el.html(renderedContent);

            $('#menu-bibliotheque').attr('class', 'active');
        }
          if($("#bs-example-navbar-collapse-1").height() >0)
    {
            $("#bs-example-navbar-collapse-1").collapse('hide');
    }
    }

});







app.views.favorites = Backbone.View.extend({
    initialize: function() {
      app.views.favorites._this = this;
     app.datas.favorites = new app.collections.favorites();


        this.template = _.template($("#template_favorites").html());


        _.bindAll(this, 'render');
       // app.datas.favorites.bind('reset', this.render);
      //  app.datas.favorites.bind('change', this.render);
       // app.datas.favorites.bind('add', this.render);
       // app.datas.favorites.bind('remove', this.render);

    },
    render: function() {

   
        /*if(app.datas.favorites.models == 0) // si pas de donnÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©e on va les chercher
         {*/
        app.datas.favorites.fetch({headers: {'Authorization': app.authorizateId},
            success: function() {
                  var renderedContent = app.views.favorites._this.template({
                    favorites: app.datas.favorites
                });

                app.el.html(renderedContent);
                $('#menu-favorites').attr('class', 'active');
            }});

        /*}
         else
         {*/
        
        var loadTemplate = _.template($("#template_load").html());
                var renderedContent = loadTemplate({});
                app.el.html(renderedContent);
                
      
        // }
 
    
}

});








app.views.release = Backbone.View.extend({
    initialize: function() {
        app.views.release._this = this;
        this.template = _.template($("#template_release").html());
        _.bindAll(this, 'render');
    },
    printRender: function() {

        var renderedContent = this.template({
            release: this.release
        });
        app.el.html(renderedContent);
        $('#menu-bibliotheque').attr('class', 'active');
    },
    loadData: function() {

        this.release.fetch({headers: {'Authorization': app.authorizateId},
            success: function() {
                
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    crossDomain: true,
                    url: app.views.release._this.release.url+ "/similars",
                    headers: {'Authorization': app.authorizateId}

                }).done(function(response) {
                   
                app.views.release._this.release.similars = response.data
                app.views.release._this.release.complete = true;
                app.views.release._this.printRender();
                app.views.release._this.release.bind('change', this.render);
                })
                
               
            }
        });
               var loadTemplate = _.template($("#template_load").html());
        var renderedContent = loadTemplate({});
        app.el.html(renderedContent);
    },
    render: function(data) {
        if (data.id != undefined) // si refresh
        {
            app.views.release._this.printRender();
        }
        else // sinon la data est un id
        {
            var id = data;
            this.release = app.datas.releases.getByID(id)
            if (this.release == undefined) {
                this.release = new app.models.release(id);
                this.loadData();
            }
            else if (this.release.complete != true) {
                this.release.resetUrl(id);
                this.loadData();
            }
            else {
                this.printRender()
                this.release.bind('change', this.render);
            }
        }
    }
})


app.views.artist = Backbone.View.extend({
    initialize: function() {
        app.views.artist._this = this;
        this.template = _.template($("#template_artist").html());
        _.bindAll(this, 'render');
    },
    printRender: function() {
        var renderedContent = this.template({
            artist: this.artist
        });
        app.el.html(renderedContent);
        $('#menu-bibliotheque').attr('class', 'active');
    },
    loadData: function() {

        this.artist.fetch({headers: {'Authorization': app.authorizateId},
            success: function() {
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    crossDomain: true,
                    url: app.views.artist._this.artist.url+ "/releases",
                    headers: {'Authorization': app.authorizateId}

                }).done(function(response) {
                   
                app.views.artist._this.artist.releases = response.data
                app.views.artist._this.artist.complete = true;
                app.views.artist._this.printRender();
                app.views.artist._this.artist.bind('change', this.render);
                })
            }
        });
        
        var loadTemplate = _.template($("#template_load").html());
        var renderedContent = loadTemplate({});
        app.el.html(renderedContent);
        
    },
    render: function(data) {
        if (data.id != undefined) // si refresh
        {
            app.views.artist._this.printRender();
        }
        else // sinon la data est un id
        {
            var id = data;
            this.artist = app.datas.artists.getByID(id)
            if (this.artist == undefined) {
                this.artist = new app.models.artist(id);
                this.loadData();
            }
            else if (this.artist.complete != true) {
                this.artist.resetUrl(id);
                this.loadData();
            }
            else {
                this.printRender()
                this.artist.bind('change', this.render);
            }
        }
    }
})

app.views.style = Backbone.View.extend({
    initialize: function() {
        app.views.style._this = this;
        this.template = _.template($("#template_style").html());
        _.bindAll(this, 'render');
    },
    printRender: function() {

        var renderedContent = this.template({
            style: this.style
        });
        app.el.html(renderedContent);
        $('#menu-bibliotheque').attr('class', 'active');
    },
    loadData: function() {

        this.style.fetch({headers: {'Authorization': app.authorizateId},
            success: function() {
                app.views.style._this.style.complete = true;
                app.views.style._this.printRender();
                app.views.style._this.style.bind('change', this.render);
            }
        });
               var loadTemplate = _.template($("#template_load").html());
        var renderedContent = loadTemplate({});
        app.el.html(renderedContent);
    },
    render: function(data) {
        if (data.id != undefined) // si refresh
        {
            app.views.style._this.printRender();
        }
        else // sinon la data est un id
        {
            var id = data;
            this.style = app.datas.styles.getByID(id)
            if (this.style == undefined) {
                this.style = new app.models.style(id);
                this.loadData();
            }
            else if (this.style.complete != true) {
                this.style.resetUrl(id);
                this.loadData();
            }
            else {
                this.printRender()
                this.style.bind('change', this.render);
            }
        }
    }
})


app.views.label = Backbone.View.extend({
    initialize: function() {
        app.views.label._this = this;
        this.template = _.template($("#template_label").html());
        _.bindAll(this, 'render');
    },
    printRender: function() {

        var renderedContent = this.template({
            label: this.label
        });
        app.el.html(renderedContent);
        $('#menu-bibliotheque').attr('class', 'active');
    },
    loadData: function() {

        this.label.fetch({headers: {'Authorization': app.authorizateId},
            success: function() {
                
                 $.ajax({
                    type: "GET",
                    dataType: "json",
                    crossDomain: true,
                    url: app.views.label._this.label.url+ "/artists",
                    headers: {'Authorization': app.authorizateId}

                }).done(function(response) {
                   
                app.views.label._this.label.artists = response.data
                app.views.label._this.label.complete = true;
                app.views.label._this.printRender();
                app.views.label._this.label.bind('change', this.render);
                })

            }
        });
               var loadTemplate = _.template($("#template_load").html());
        var renderedContent = loadTemplate({});
        app.el.html(renderedContent);
    },
    render: function(data) {
        if (data.id != undefined) // si refresh
        {
            app.views.label._this.printRender();
        }
        else // sinon la data est un id
        {
            var id = data;
            this.label = app.datas.labels.getByID(id)
            if (this.label == undefined) {
                this.label = new app.models.label(id);
                this.loadData();
            }
            else if (this.label.complete != true) {
                this.label.resetUrl(id);
                this.loadData();
            }
            else {
                this.printRender()
                this.label.bind('change', this.render);
            }
        }
    }
})








app.views.logout = Backbone.View.extend({
    render: function() {
        app.el.html(_.template($('#template_logout').html(), {}));

        $('#menu-logout').attr('class', 'active');
    }
})