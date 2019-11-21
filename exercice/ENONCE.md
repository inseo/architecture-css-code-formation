# Exercice 2 : Ajouter un soupçon de responsive

<!--
SI TU UTILISES UN ÉDITEUR CAPABLE DE PRÉVISUALISER MARKDOWN,
FAIS-LE.  PAR EXEMPLE, DANS VS CODE, CMD/CTRL+SHIFT+V AFFICHE LA PRÉVISUALISATION.
-->

La page n'est pas vraiment responsive… On va donc faire une petite mise à jour en commençant par mettre en place un premier *breakpoint* à 992px.

Pour cela, on aura recours aux _media queries_.

## Résultat attendu

[La maquette](./RESULTAT_ATTENDU.png) est là.

## Tâches de cet exercice

Sous ce _breakpoint_ :

1. La largeur maximale de l'objet `o-wrapper` est remplacée par des marges internes ;
2. Le carrousel « Derniers exemples » est doté d'une largeur maximale ;
3. Le carrousel passe de trois à deux colonnes, ce qui nécessite de remplacer l’invocation de Glide.js en bas de `index.html` par celle fournie dans [`helpers/glide.js`](../helpers/glide.js) ;
4. La section « Ressources » passe elle aussi à deux colonnes, ce qui implique d'ajouter une marge supérieure aux éléments n'appartenant pas à la première ligne ;
5. Les images de la section « Ressources » sont centrées ;
6. La barre de décoration du pied de page s'affiche en pleine largeur.

## _Media query_ ou classe de suffixe responsive conventionnelle ?

- Pour du changement général, les _media queries_ classiques iront très bien ;
- Pour un comportement très ponctuel et spécifique, une classe de suffixe responsive sera sans doute plus pertinente.

## Astuce

- Les bonnes syntaxes de _media queries_ sont fournies dans [`helpers/breakpoint.css`](./../helpers/breakpoint.css), tu n’as plus qu’à les copier-coller aux endroits pertinents pour démarrer.
- Pense bien à échapper le `@` dans le code source de tes sélecteurs CSS pour des suffixes responsive (ex. `.o-something\@md`). Vu le _breakpoint_ qu’on retient ici, on n’est pas tellement sur du _small_ ou du _large_ mais plutôt du *medium* : on te suggère `@md` ou `@m` comme suffixe.
