# Alcool Tracker

_Repo GitHub protégé par la licence CC-BY-NC-SA-4.0 (Attribution-NonCommercial-ShareAlike 4.0 International)._

Side-project qui a pour but de calculer son taux d'alcoolémie en direct selon sa consommation d'alcool.

> Application bloqué en version desktop, il suffit juste de réduire sa fenêtre à 768px de large.

Utilisation de Tailwind, React et la librairie d'icon [Iconoir](https://iconoir.com) pour créer une application simple et une interface travaillée.

**Déployé sur Netlify ici : https://lb-alcool-tracker.netlify.app**

[![Netlify Status](https://api.netlify.com/api/v1/badges/5deb4854-2804-493a-9e5f-86110887be52/deploy-status)](https://app.netlify.com/sites/lb-alcool-tracker/deploys)

## Développement

J'ai utilisé [CRA](https://github.com/facebook/create-react-app) pour créer mon projet, la commande pour lancer le projet reste `npm start`.

Et pour le build : `npm run build`.

## Ressources

### Calcul

> Une partie du calcul prend en compte la modification d'Eicker pour la différenciation de la métabolisation de l'alcool entre les hommes et le femmes.

Utilisation de la formule de Widmark pour calculer l'élimination de l'alcool par le corps humain. [Plus d'informations sur sa page Wikipédia](https://fr.wikipedia.org/wiki/Erik_Widmark).

Retrouvez encore plus d'informations sur ces études universitaires, projets GitHub et autres :

- https://github.com/tonibois/Cogorza/tree/main
- https://boozelib.readthedocs.io/en/latest/index.html
- https://en.wikipedia.org/wiki/Blood_alcohol_content
- https://www.biorxiv.org/content/10.1101/2021.07.25.452934v1.full
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4361698/

### Sources pour les conseils et faits divers

- Conseils trouvés sur l'article [Comment réduire les risques de la consommation d’alcool ?](https://www.santepubliquefrance.fr/determinants-de-sante/alcool/articles/comment-reduire-les-risques-de-la-consommation-d-alcool#:~:text=Ces%20mêmes%20experts%20recommandent%20d,et%20les%20activités%20à%20risque) de _Santé publique France_
- Informations trouvés sur l'article [Alcool : comment consommer ?](https://www.studyrama.com/vie-etudiante/sante-se-proteger/drogues-et-dependances/alcool-comment-consommer-74087#:~:text=D'autre%20part%2C%20il%20est,avec%20des%20boissons%20non%20alcoolisées.) de _Studyrama_

### Alternatives

Il existe de nombreux autres calculateurs de taux d'alcool dans le sang, je trouve celui proposé par [Éduc'alcool](https://www.educalcool.qc.ca), un organisme canadien indépendant, très intéressant.
[Vous pouvez retrouver **_Calcoolateur_** ici](https://www.educalcool.qc.ca/outils/calcoolateur/)

Je vous recommande aussi [celui-ci](https://dasinternetz.com/alccalc.html) qui donne beaucoup de données selon les différentes formules.
Ils proposent par ailleurs des résultats différents aux calculs de mon application.
