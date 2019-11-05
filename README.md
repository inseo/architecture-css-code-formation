# Formation Architecture CSS

- Formatrice : [Corinne Durrmeyer](https://twitter.com/schillinger) ([Inseo](https://inseo.fr/))
- Organisme de formation : [Delicious Insights](https://delicious-insights.com/)
- [Tous les détails et les dates des prochaines sessions](https://delicious-insights.com/fr/formations/architecture-css/)

## Pitch

> Architecturer correctement le code CSS pour qu’il soit cohérent, performant et qu’il puisse être facilement pris en main par les différents intervenants n’est pas chose aisée. La formation Architecture CSS comble ce besoin en faisant découvrir aux apprenant·e·s une méthode d’architecture permettant d’organiser le code CSS afin qu’il soit fonctionnel, maintenable et évolutif.
>
> Développée en 2015 par Harry Roberts, cette méthode (ITCSS pour Inverted Triangle CSS) est **parfaitement éprouvée** et **applicable à tous les projets** : elle peut être employée sur tous les types de site, et ce quels que soient leur trafic, leur historique ou la taille de leur équipe de développement. Cerise sur le gâteau, elle est **utilisable avec n’importe quelle convention de nommage** (et s’accorde particulièrement bien avec BEM).

## Comment démarrer ?

```bash
git clone https://github.com/inseo/architecture-css-code-formation.git
cd architecture-css-code-formation
npm install
npm start
```

## Comment changer d’exercice ?

Depuis un terminal / une invite de commandes, quelque part dans le dossier du dépôt, vous pouvez passer à l’exercice suivant :

```bash
npm run next
```

Ou au précédent :

```bash
npm run prev # Ou npm run previous si vous préférez…
```

L’exercice en cours sera automatiquement sauvegardé dans un dossier `.mon-exercice-XX`, ou `XX` est le numéro de l’exercice courant. Le dossier `exercice` reprend alors le code de départ de l’exercice visé, dénué de toute altération que vous auriez pu lui apporter localement.

## Branches `formation` vs. `master`

La branche `formation` est la branche par défaut du dépôt, sur laquelle vous vous trouvez donc après le clone. Elle démarre sur le début de l’exercice 1, premier commit disponible.

La branche `master`, consultable par exemple sur GitHub ou simplement via les commandes Git usuelles, arrive jusqu’en fin de formation, après tous les exercices (on trouve un commit par exercice).

## Licence

Ce dépôt est fourni sous licence [No License](./license.md) et © 2019-2021 Inseo.
