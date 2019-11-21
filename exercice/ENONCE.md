# Exercice 6 : Ajouter le support IE 11

<!--
SI TU UTILISES UN ÉDITEUR CAPABLE DE PRÉVISUALISER MARKDOWN,
FAIS-LE.  PAR EXEMPLE, DANS VS CODE, CMD/CTRL+SHIFT+V AFFICHE LA PRÉVISUALISATION.
-->

IE ne prend pas en charge les _CSS Custom Properties_, du coup en dépit de la classe `t_christmas` sur `<body>`, le thème n’est pas appliqué. Il va donc falloir se retrousser les manches et ajouter les règles nécessaires à l'obtention du rendu attendu sur IE 11.

Pour cet exercice, on va se limiter à la navigation de l’en-tête. L’exercice suivant inclura l’ensemble des déclinaisons nécessaires.

## Résultat attendu

[La maquette](./RESULTAT_ATTENDU.png) est là.

## Tâches de cet exercice

1. Crée un dossier `assets/styles/themes`.
2. Ajoute ce dossier dans la feuille de styles globale (`assets/styles/styles.scss`) avec un `@import` approprié (décline ceux en place), entre l'import des composants et des utilitaires.
3. Dans le dossier `themes`, crée une feuille `_themes.christmas.scss` et commence par y copier la _media query_ de [`helpers/internet-explorer.css`](./../helpers/internet-explorer.css). C’est à l’intérieur de cette dernière que tu vas pouvoir décliner les styles spécifiques à IE 11.
4. Il ne reste plus qu’à reprendre les styles qui utilisaient des _custom properties_ pour les couleurs, et les y copier en remplaçant en dur par la valeur de la _custom property_…
   - Pour cet exercice, concentre-toi sur les couleurs de navigation qu’on trouve dans `components/_component.nav.scss` : les cinq règles `.c-nav__item--xxx` en pratique.

## Comment tester ?

Si tu n’a pas IE sur ta machine, tu peux toujours vérifier que tu n'as pas fait d'erreur en procédant de la manière suivante :

1. Commente l’ouverture et la fermeture de la _media query_ « spéciale IE » ;
2. Ouvre la page dans ton navigateur habituel ;
3. Inspecte un des éléments du menu ;
4. Vérifie que la valeur de couleur n’est pas une _custom property_ mais bien une couleur en dur, et que son origine est bien ton thème, et non le `_settings.color-christmas` basé sur les _custom properties_.
