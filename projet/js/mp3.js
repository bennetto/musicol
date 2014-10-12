

var Mp3Player = Backbone.Model.extend({
    
        _this :null,
        playButton : null,
        barProgress : null,
        pauseButton : null,
        backButton : null,
        forwardButton : null,
        playlist:null,
        changeMusicEvent : new Event('changeMusicEvent'),
        
    initAudioPlayer: function() {
       console.log('test1');
        Mp3Player._this = this;
        

  
        audio5js = new Audio5js({
            throw_errors: true,
            format_time: true

        });
    },
     
      
        
    setPlaylist :function(splaylist){
    this.playlist = splaylist;

    //playlist.currentPosition          position actuel
    //playlist.tracks          List des tracks de la playlist
    //playlist.tracks[position].img     pour recuop l'image
    },
    
    playlistChanged :function(position){ // si position undifined commencer la lecture par le debut sinon commencer par la position
   //  specifie que la playlist a changer
  
   
   if(position == undefined)
   {
    position = 0;
   }
      if(this.playlist != null && this.playlist.tracks[position].source !== "http://demo.wikimic.org//mp3/.mp3")
        {
         audio5js.pause();
         audio5js=new Audio5js({
          throw_errors: true,
          format_time: true,
          
          });
            audio5js.load(this.playlist.tracks[position].source);
         

            audio5js.on('timeupdate', function(position, duration) {
                
                $(document).width
                var progress = $('.progress');
                    clearInterval(progress);
                    $('.progress').removeClass('active');
                    
                   
                    //Conversion de la durée de la musique en un Int en secondes
                    
                    var section_dur=duration.split(':');
                    var section1_dur=section_dur[0];
                    var section2_dur=section_dur[1];
                    var section3_dur = parseInt(section1_dur);
                    var section4_dur = parseInt(section2_dur);
                    
                    var duree_sec_dur=(section3_dur*60)+section4_dur;
                    //console.log(duree_sec_dur);
                    
                    //Conversion de la position en un Int en secondes
 
                    var section_pos=position.split(':');
                    var section1_pos=section_pos[0];
                    var section2_pos=section_pos[1];
                    var section3_pos = parseInt(section1_pos);
                    var section4_pos = parseInt(section2_pos);
                    
                    var duree_sec_pos=(section3_pos*60)+section4_pos;
                    //console.log(duree_sec_pos);
                    
                    var larg = (document.body.clientWidth);
                    //console.log(larg);
                    
                    var progression= (larg*duree_sec_pos)/duree_sec_dur;
                    
                    
                    //Mp3Player._this.barProgress.width((($(document).width)*position)/duration);
                    Mp3Player._this.barProgress.width(progression);
                   
            }, audio5js);
            
            audio5js.on('ended', function () {
           
             mp3.forward();
             console.log('ended');
            }, audio5js);

            audio5js.play();
            //document.write(track.name);
            document.getElementById("titre").innerHTML = "<p style='text-align: center;'>"+this.playlist.tracks[position].name+"</p>";
            // app.datas.releases.getById
            //document.getElementById("artiste").innerHTML = this.playlist.track[position].name;
         document.getElementById("img_musique").src = this.playlist.tracks[position].img;
         playButton.style.display = 'none';
         pauseButton.style.display = 'inline-block';
         
          document.dispatchEvent(this.changeMusicEvent);
        }
        
        
    },
     playlistRemoved :function(){
   //  specifie que la playlist a ete supprimer
   
   
    },
    
    playlistTrackAdded :function(idTrack){ // si idTrack speficie juste qu'il y a eu des tracks ajouter si valeur continuer la lecteur a partir de ce track
   //  specifie quun track a ete ajouter a la playlist
   
   
    },
    playlistTrackRemoved :function(position){
   //  specifie quun track a ete supprimer de la playlistr
   
   
    },
    
            
   /* changeSource : function(track){
    
        if(track.source !== "http://demo.wikimic.org//mp3/.mp3")
        {
         audio5js.pause();
         audio5js=new Audio5js({
          throw_errors: true,
          format_time: true,
          });
         audio5js.load(track.source);
         audio5js.play();
         //document.write(track.name);
         document.getElementById("titre").innerHTML = track.name;
         playButton.style.display = 'none';
         pauseButton.style.display = 'inline-block';
        }
     }, */
    
    setBarProgress : function(barProgress){
    this.barProgress=barProgress;
    },
            
       
    
    
    setPlayButton : function(buttonPlay){
        this.playButton = buttonPlay;
        
        playButton.addEventListener("click", function () {
            
        audio5js.play();
        console.log("click Play");
        
         playButton.style.display = 'none';
         pauseButton.style.display = 'inline-block';
         
        
     }, 
     false);
     
    },
           
       
    setPauseButton : function(buttonPause){
        this.pauseButton = buttonPause;
        pauseButton.addEventListener("click", function () {
        audio5js.pause();
        console.log("click Pause");
        
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline-block';
        
     }, 
     false);
    },
            
        
    setBackButton : function(buttonBack){
        this.backButton = buttonBack;
        backButton.addEventListener("click", function () {
            
        if(Mp3Player._this.playlist.currentPosition>0)
            {
            // barre progression this.playlist.tracks[position].length;
            Mp3Player._this.playlist.currentPosition=Mp3Player._this.playlist.currentPosition-1;
            console.log(Mp3Player._this.playlist.currentPosition);
            mp3.playlistChanged(Mp3Player._this.playlist.currentPosition);
            console.log("click Back");
            }
     }, 
     false);
    },
               
        
    setForwardButton : function(buttonForward){
        this.forwardButton = buttonForward;
        forwardButton.addEventListener("click", function () {
            mp3.forward();
          
     }, 
     false);
     },
     
     forward: function()
     {
          var longueur=Mp3Player._this.playlist.tracks.length;
           if(Mp3Player._this.playlist.currentPosition<longueur-1)
               {
            Mp3Player._this.playlist.currentPosition=parseInt(Mp3Player._this.playlist.currentPosition)+1;
            console.log(Mp3Player._this.playlist.currentPosition);
            mp3.playlistChanged(Mp3Player._this.playlist.currentPosition);
            
               }
        console.log("click Forward");
     }
      
      
      
           // test du remplissage de la progress bar sans lien avec la musique pour l'instant
      

  



    
});


         
     