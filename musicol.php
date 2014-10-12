<!DOCTYPE html>
<html>
    <head>
        <title>Projet IHM</title>
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="projet/css/main.css">
    </head>
    <body>

        <?php
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        ?>

        <header class="header">
                <?php require "projet/html/nav.html"; ?> 
        </header>

        <div class="menu-content-container">
            <div class="menu ">
                <ul class="nav nav-pills nav-stacked">
                    <li id="menu-profil" ><a href="#profil" >Profil</a></li>
                    <li id="menu-invitation" ><a href="#invitation" >Invitation</a></li>

                    <li id="menu-lecture"><a href="#lecture">Lecture en cours</a></li>
                    <li id="menu-bibliotheque" ><a href="#bibliotheque" >Bibliotheque</a></li>
                       <li id="menu-favorites" ><a href="#favorites" >Favoris</a></li>

                    <li id="menu-logout" ><a href="#logout" >Logout</a></li>
                </ul>
                <h3 ><small><p>Pour fermer cette barre de navigation, cliquer sur 'Musicol'.</p></small></h3>
            </div>

            <div class="content" id="content">


            </div>

            <!-- Acces -->
            <?php require "projet/template/Invitation.html"; ?>    
            <?php require "projet/template/Profil.html"; ?>    
               <?php require "projet/template/Logout.html"; ?> 
            <?php require "projet/template/Load.html"; ?> 
            
           <!--Release -->
            <?php require "projet/template/Bibliotheque.html"; ?> 
            <?php require "projet/template/Release.html"; ?> 
            
          <!--Artists -->
             <?php require "projet/template/Artists.html"; ?>   
            <?php require "projet/template/Artist.html"; ?>   
            
          <!--Styles -->
             <?php require "projet/template/Styles.html"; ?>   
            <?php require "projet/template/Style.html"; ?>  
              
             <!--Labels -->
             <?php require "projet/template/Labels.html"; ?>   
            <?php require "projet/template/Label.html"; ?>  
            
            
            <?php require "projet/template/Favorites.html"; ?>   
            <?php require "projet/template/Lecture.html"; ?>   
            <?php require "projet/template/Playlists.html"; ?> 

        </div>




        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="lib/jQuery/jquery-1.10.2.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="lib/backbone/underscore-min.js"></script>
        <script type="text/javascript" src="lib/backbone/backbone-min.js"></script>

     
        <script type="text/javascript" src="projet/js/app.js"></script>

        <!-- Modules (Order doesn't matter) -->
        <script type="text/javascript" src="projet/js/views.js"></script>
        <script type="text/javascript" src="projet/js/routers.js"></script>

        <script type="text/javascript" src="projet/js/models/Artist.js"></script>
        <script type="text/javascript" src="projet/js/models/Artists.js"></script>

        <script type="text/javascript" src="projet/js/models/Playlist.js"></script>
        <script type="text/javascript" src="projet/js/models/Playlists.js"></script>

        <script type="text/javascript" src="projet/js/models/Release.js"></script>
        <script type="text/javascript" src="projet/js/models/Releases.js"></script>
        
          <script type="text/javascript" src="projet/js/models/Label.js"></script>
        <script type="text/javascript" src="projet/js/models/Labels.js"></script>
        
        <script type="text/javascript" src="projet/js/models/Style.js"></script>
        <script type="text/javascript" src="projet/js/models/Styles.js"></script>

         <script type="text/javascript" src="projet/js/models/Favorites.js"></script>
       

        <footer class="player">
            <?php require "projet/html/mp3.html"; ?> 
        </footer>


    </body>
</html>