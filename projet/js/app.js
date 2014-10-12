/**
 * Created with JetBrains WebStorm.
 * User: benjamin
 * Date: 02/10/13
 * Time: 10:24
 * To change this template use File | Settings | File Templates.
 */
var app = {
    url:"http://ihm-api.telecom-st-etienne.fr",
    collections: {},
    models: {},
    views: {},
    routers: {},
    modals: {},
    datas:{},
    currentPlaylist:{},
    authorizateId:{},
    init: function () {
   

     if(sessionStorage.getItem('authorizateId') == null) 
         {
           //  alert("sessionStorage null");
              window.location = "index.html"
         }
         this.authorizateId = sessionStorage.getItem('authorizateId');
         
        // Init modal !
        app.modals.supp = '#modal-supp';
        $('#suppNo').click(function () {
            $(app.modals.supp).modal('hide');
        });
        // Initialisation du route handler avec BB
        this.lectureRouter = new this.routers.lecture();
        this.el = $('#content');
        Backbone.history.start();  
    },
    
    isEnCoursTrack :  function(track) {
        if(app.currentPlaylist.tracks == undefined)
        {
            return false;
        }
        var position = app.currentPlaylist.currentPosition;
        var currentTracks = app.currentPlaylist.tracks[position];
         return (track.track_id == currentTracks.track_id)
    }
};

jQuery(function () {
    // Init app !
    app.init();
});
