# Exercice 3 : Ajouter un thème alternatif

<!--
SI TU UTILISES UN ÉDITEUR CAPABLE DE PRÉVISUALISER MARKDOWN,
FAIS-LE.  PAR EXEMPLE, DANS VS CODE, CMD/CTRL+SHIFT+V AFFICHE LA PRÉVISUALISATION.
-->

Et si on mettait en place un thème de Noël, en se reposant sur le mécanisme des [propriétés personnalisées CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties) ?

## Résultat attendu

[La maquette](./RESULTAT_ATTENDU.png) est là.

## Tâches de cet exercice

1. Récupère le fichier [`helpers/_settings.color.scss`](../helpers/_settings.color.scss) et copie-le dans `exercice/assets/styles/settings` (sous-dossier à créer).
2. Pense à ajouter son import Sass au tout début de la feuille de styles globale `exercice/assets/styles/styles.scss` (afin que les variables qui y sont définies soient accessibles de tous les autres styles).
3. On va se focaliser sur l’en-tête et le pied de page, donc remplace les codes couleurs « en dur » dans les feuilles de style associées par des références aux variables du fichier de _settings_.
   - Remarque qu’on a déclaré dans un premier temps les variables de couleurs (ex. `--amaranth`), et dans un second temps des variables plus sémantiques, à titre « d’alias » (ex. `--nav__item--benefit`). Utilise plutôt la seconde forme. L’idée est de centraliser dans le fichier de _settings_ les réutilisations / harmonisations de couleur à travers le thème, plutôt que d’en laisser le soin aux différentes feuilles de styles.
4. Duplique le fichier de couleurs dans le même dossier, sous le nom `_settings.color-christmas.scss`, et utilise la classe `.t-christmas` (note le préfixe conventionnel de thème `.t-`) au lieu de la portée de variable CSS par défaut `:root`.
5. Ajoute la classe `t-christmas` sur la balise `<body>` du HTML.
6. Crée les nouvelles variables de couleurs (cf. Astuce plus bas) pour les nouveaux codes figurant sur [la maquette](./RESULT_ATTENDU.png).
7. Altère les aliases appropriés pour qu’ils utilisent les bonnes variables de couleur, et vois ton thème prendre vie !

## Astuce

Pour donner des noms valables à tes couleurs, fais comme Corinne : utilise le super outil [Name that Color](http://chir.ag/projects/name-that-color/) !

## Bonus

- As-tu bien pensé à utiliser des variables sémantiques de couleur **pour les pointes de survol de navigation aussi** ?
- Essaie de placer la classe de thème sur un périmètre moins global que `<body>` : et voilà ton thème périmétré à une seule partie (ex. le pied de page) ! Voilà la puissance des variables CSS, qui utilisent la cascade, par rapport à une simple interpolation globale de variable Sass !
