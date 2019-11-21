# Exercice 7 : Finaliser le thème alternatif

<!--
SI TU UTILISES UN ÉDITEUR CAPABLE DE PRÉVISUALISER MARKDOWN,
FAIS-LE.  PAR EXEMPLE, DANS VS CODE, CMD/CTRL+SHIFT+V AFFICHE LA PRÉVISUALISATION.
-->

Toi aussi tu n’aimes pas laisser un truc en plan ? Lorsqu’on a décliné le thème de Noël, on n’a traité qu'une partie de la page : seuls certains éléments, la navigation et l’icône Twitter ont été mis à jour.

Il reste beaucoup de choses à faire pour obtenir un rendu homogène (tout en conservant la compatibilité IE 11).

## Résultat attendu

[La maquette](./RESULTAT_ATTENDU.png) est là.

## Tâches de cet exercice

1. Pour chaque feuille de style composant qui n’est pas déjà « thémée » (ex. `button`, `example`, `glide-theme`, `image`, `section`, `testimony`) :
   - Recense les codes couleurs qui doivent être thémés, et pour chacun :
     - Recherche dans `_settings.color.scss` si la couleur existe, sinon ajoute-la ;
     - Au même endroit, recherche si l’alias « sémantique » de couleur existe, sinon ajoute-le ;
     - Remplace la couleur en dur par une référence à la custom property ainsi définie ;
     - Procède de la même façon pour régler les couleurs du thème de Noël.
2. Retranscris ces modifications (en utilisant les couleurs en dur) dans `themes/_theme.christmas.scss` pour assurer le bon fonctionnement du thème sur IE 11.
3. Pour chaque icône au-delà de celle de Twitter (ex. `back-to-top`, `comment`, `maintenance`, `operational`, `responsive`, `scalable`, `testimonies`) :
   - Modifie sa source (dans `assets/svg`) pour utiliser un `fill="currentColor"` ;
   - Si elle était utilisée en image de fond : retire ça de la CSS et injecte l'icône dans le code HTML avec les bonnes classes (généralement `c-section__img` ou `o-media__img`…) ;
   - Si elle était utilisée comme image de contenu via une balise `<img />`, remplace-la par un `<svg>` en ligne avec les mêmes classes et un `<use xlink:href="#…"></use>` approprié à l’intérieur.
     - Et si un `alt=` était présent sur l’`<img>`, il convient d'ajouter un `<title id="xxx">…</title>` dans le `<svg>` en ligne, référencé depuis l’attribut `aria-labelledby="xxx"` de ce `<svg>`.
