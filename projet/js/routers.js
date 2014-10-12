/**
 * Created with JetBrains WebStorm.
 * User: benjamin
 * Date: 02/10/13
 * Time: 09:58
 * To change this template use File | Settings | File Templates.
 */

  app.routers.lecture = Backbone.Router.extend({
      initialize : function(){
          
          this.el = $('#content');

          this.lectureView = new app.views.lecture({ el : this.el});
          this.releasesView = new app.views.releases({ el : this.el});
         
              this.artistsView = new app.views.artists({ el : this.el});
              this.stylesView = new app.views.styles({ el : this.el});
              this.labelsView = new app.views.labels({ el : this.el});
          
          
          
          
          this.favoritesView = new app.views.favorites({ el : this.el});

          this.logoutView = new app.views.logout({ el : this.el});
          this.profilView = new app.views.profil({ el : this.el});
          this.invitationView = new app.views.invitation({ el : this.el});
          this.playlistsView = new app.views.playlists({ el : this.el});
          this.releaseView = new app.views.release({ el : this.el});
            this.artistView = new app.views.artist({ el : this.el});
             this.styleView = new app.views.style({ el : this.el});
              this.labelView = new app.views.label({ el : this.el});
           
              


      },
      routes: {
          '': 'viewReleases',
          'lecture': 'viewLecture',
          'bibliotheque': 'viewReleases',
           'bibliotheque/releases': 'viewReleases',
           'bibliotheque/artists': 'viewArtists',
            'bibliotheque/styles': 'viewStyles',
              'bibliotheque/labels': 'viewLabels',
          'favorites': 'viewFavorites',
          'logout': 'viewLogout',
          'profil':'viewProfil',
          'playlists':'viewPlaylists',
          'invitation':'viewInvitation',
           'bibliotheque/releases/:id':'viewRelease',
            'bibliotheque/artists/:id':'viewArtist',
             'bibliotheque/styles/:id':'viewStyle',
              'bibliotheque/labels/:id':'viewLabel',
               

      },

      viewProfil: function () {
          this.removeMenu();
          this.profilView.render();
      },



      viewInvitation: function () {
          this.removeMenu();
          this.invitationView.render();
      },



      viewPlaylists: function () {
          this.removeMenu();
          this.playlistsView.render();
      },


        
         viewReleases: function () {
          this.removeMenu();
          this.addNavbar();
          this.releasesView.render();
        },
        
         viewStyles: function () {
          this.removeMenu();
           this.addNavbar()
          this.stylesView.render();
        },
        
         viewArtists: function () {
          this.removeMenu();
           this.addNavbar()
          this.artistsView.render();
        },
        
         viewLabels: function () {
          this.removeMenu();
           this.addNavbar()
          this.labelsView.render();
        },
        
       viewFavorites: function () {
          this.removeMenu();
          this.favoritesView.render();
      } ,
      
     viewRelease: function (id) {
          this.removeMenu();
          this.releaseView.render(id);
        },
        
          viewStyle: function (id) {
          this.removeMenu();
          this.styleView.render(id);
        },
        
         viewArtist: function (id) {
          this.removeMenu();
          this.artistView.render(id);
        },
        
         viewLabel: function (id) {
          this.removeMenu();
          this.labelView.render(id);
        },
        
        

      viewLecture: function () {
          this.removeMenu();
          this.lectureView.render();
      },

      viewLogout: function () {
          this.removeMenu();
          this.logoutView.render();
      } ,

      removeMenu : function(){
          $('.active').removeClass('active');
          
          
          $('.navbar').find("button").hide();
          $('.navbar').find(".collapse ").find(".nav").hide()

      }
      ,  addNavbar : function(){
         if($(document).width()<750)
          {
               $('.navbar').find("button").show()
          }        
        
            $('.navbar').find(".collapse ").find(".nav").show()
        
      }

}) ;