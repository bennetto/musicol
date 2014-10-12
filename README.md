Musicol : projet IHM
===========

Auteurs :
-------
* Benjamin BONNETTO
* Aurelien NEVEUX

Comptenu
-------
Dans ce dépot git il y à les codes sources du projet et la documentation,rapport et image dans le dossier Doc.



Utilité : 
-------
Implémentation d'une interface graphique responsive design, pour la lecture en ligne de musique. 

La liste de fonctionnalités implémentés est décrite sous forme des user stories suivantes :

*  En tant qu’utilisateur, je veux pouvoir m’authenifier sur le système à l’aide de mon adresse
mail et de mon mot de passe.
* En tant qu’utilisateur, je veux pouvoir consulter en un seul coup d’oeil les dernière sorties.
* En tant qu’utilisateur, je veux pouvoir consulter les métadonnées d’une production.
* En tant qu’utilisateur, je veux que le système me recommande des morceaux similaires.
* En tant qu’utilisateur, je veux pouvoir mettre des morceaux en favoris pour les retrouver
plus facilement plus tard.
* En tant qu’utilisateur, je veux pouvoir consulter la liste des artistes du systèmes, et pour
chacun la liste des productions réalisées.
* En tant qu’utilisateur, je veux pouvoir écouter un morceau.
* En tant qu’utilisateur, je veux pouvoir inviter des amis sur la palteforme.

Demo
-------
Vous pouvez voir et tester le site à l'adresse suivante : nas.bonnetto.fr/musicol



Installation :
-------
Pour installer le site, (MUsicol) il faut : 
* Télécharger les codes sources
* Le mettre sur votre serveur php
* Et enfin lancer le site 


Library :
-------

### Backbone

Backbone est un framework javascript dédié à la création de Webapps en mode "Single Page Application". Il implémente le pattern MVC (l'acronyme signifie : Model View Controller / Modèle Vue Contrôleur) mais côté client, plus précisément au sein de votre navigateur.

Nous avons donc utilisé Backbone pour trois raisons :
* Pour récuperer de facon simple les données REST de l'api,Music Kiosk API.
* Pour faire la gestion de template pour notre site 'single page'. Cela nous a permis de changer le contenu du centre de l'application en fonction de l'URL.
* De structurer notre site en MVC.

### Boostrap

Boostrap est une library javascript qui permet de faire un site responsive design très facilement. De plus il comporte des composants très utiles pour faire un site plus joli et fonctionnel.

### Audio5js

Audio5js est une library javascript qui permet de lire de la musique sur tous les navigateurs. Si le site est lancé sur un navigateur compatible avec la balise audio d'HTML5, il en crée une, sinon il lance un composant flash.





