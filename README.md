# Athletics Tournament REACT JS

- Année : **M1 WEB HITEMA**
- Matière: *InfoWeb*
- Projet : *REACT JS*

## Auteur(s)

|Nom|Prénom|
|--|--|
*EL ASSOURI* | *Mohammed*|

### Backend NodeJS - athleticsapi

Le projet athleticsapi est une API permettant de recuperer des evennements sportif et d'y participer.
Cette api offre la possibilité à des athlètes de s'inscire et de gérer leur profile.


### Frontend ReactJS - athleticsweb
  
Le projet athleticsweb est une interface react permettant la visualisation des evennements sportif et d'y participer.  
Cette interface offre la possibilité à des athlète de s'inscire et de gérer leur profile par le biais d'un formualire.
Et permet également à un administrateur de gerer l'ensemble du tournoi.

**Les données permettant de manipuler l'application se trouvent dans le dossier JSON.**
**Créer une base MONGODB athletics**


### Difficulté rencontré

Je ne maîtrise pas encore à 100 % le JS. Par moments le décalage avec les appelles
asynchrone et le rendu m'a posé problème.
Le state du react composants est également encore un peu flou pour moi.
Je ne sais toujours pas pourquoi on doit passer par this.setState().
Par moments, la mise a jour ne s'effectuait pas.
J'ai eu ce problème a multiple reprise et c'est pour cela que dans le composant Nav
J'accède directement au state dans la méthode focusLink.

Je ne maîtrise pas encore les BDD NoSql qui sont totalements differentes des bases SQL que j'ai l'habitude de manipuler.

### Manque

Je n'ai pris en compte le delete en cascade.
Notemment si l'admin supprime un user qui participe a des épreuves.

La saisie des resultat à une épreuve n'est pas possible: dans la page particiation les cases médaille et résultat devraient être éditable.  

Barre recherche dans les events.
