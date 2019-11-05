# Exercice 1 : Finaliser la maquette

<!--
SI TU UTILISES UN ÉDITEUR CAPABLE DE PRÉVISUALISER MARKDOWN,
FAIS-LE.  PAR EXEMPLE, DANS VS CODE, CMD/CTRL+SHIFT+V AFFICHE LA PRÉVISUALISATION.
-->

Ton collègue n’est plus là et il n’a pas fini d’intégrer la [maquette](./RESULTAT_ATTENDU.png)… En particulier :

- La 3<sup>e</sup> section (« Principaux avantages ») n’est qu’ébauchée ;
- La 5<sup>e</sup> section (« Ressources ») n’a pratiquement aucune mise en forme ;
- Le pied de page est brut de fonderie.

## Démarrage

Si ce n’est pas déjà fait :

1. Ouvre un terminal et place-toi dans le dossier racine (au-dessus de `exercice`) ;
2. Installe l’outillage avec `npm install` ;
3. Lance le serveur de développement avec `npm start` ;
4. Ouvre la page dans un navigateur : [`http://localhost:3000`](http://localhost:3000/)
5. Ouvre [la maquette](./RESULTAT_ATTENDU.png) dans ton visualiseur d’image préféré (ou pourquoi pas directement dans ton EDI / éditeur ?).

## Contenu du dossier de travail

- `exercice` contient le code de base pour le projet :
  - `assets` fournit les images brutes (dans `images` et `svg` suivant le format), les scripts clients (`scripts`) et les CSS (`styles`) ;
  - `content` contient le HTML ;
  - `build` est le résultat de la compilation, tu n’interviens jamais directement dessus.
- À la racine se trouvent quelques fichiers d’outillage (tu n’y toucheras jamais) :
  - `package.json` et `package-lock.json` définissent tes dépendances sur npm et fournissent la commande à exécuter pour `npm start` (à savoir Gulp) ;
  - `gulpfile.js` et `gulpConfig.js` configurent Gulp, justement (fonctionnement du *bundling*, serveur de développement, etc.) ;
  - `.gitignore` évite de versionner connement des trucs superflus ;
  - `license.md` te donne à peu près tous les droits de triturage sur tout ça.

## Les feuilles de styles

Le dossier `exercice/assets/styles` contient un point d’entrée `styles.scss` en Sass, qui va chercher les différentes parties de l’arborescence ITCSS vue dans les slides (`generics`, `elements`, `objects`, `components`, etc.).

D’un exercice à l’autre, tu auras besoin de compléter certains fichiers voire d’en créer de nouveaux.

## Tâches de cet exercice

1. Reproduis la maquette pour la 3<sup>e</sup> section, « Principaux avantages » :
    - Certaines classes existantes d’objets et autres t’aideront déjà pas mal, à toi de voir lesquelles.
    - Tu auras sans doute besoin de créer de nouvelles classes de motifs structurels (« objets », préfixe conventionnel `.o-`), soit dans des fichiers existants soit dans de nouveaux fichiers.
    - Tu auras sans doute besoin de créer de nouvelles classes esthétiques (« composants », préfixe conventionnel `.c-`), soit dans des fichiers existants soit dans de nouveaux fichiers.
2. Même chose pour la 5<sup>e</sup> section, « Ressources » ;
3. Même chose pour le footer.

## Objet ou composant ?

La frontière est parfois ténue.  Si tu n’arrives pas à arrêter ton choix, la formatrice est là pour t’aider à y voir plus clair !

## Astuce

- Des fonctions de conversion permettant de transformer des `px` en `(r)em` se trouvent dans le fichier [`_tools.font.scss`](./assets/styles/tools/_tools.font.scss).
- La syntaxe du dégradé est fourni dans le fichier [`helpers/linear-gradient.css`](./../helpers/linear-gradient.css), tu n’as plus qu’à la copier-coller et à l'adapter à tes besoins.
- Souviens-toi qu’un même élément DOM peut parfaitement être qualifié par plusieurs classes à la fois, pas nécessairement du même « type ITCSS ». Une balise peut parfaitement être porteuse de classes d’objet (`.o-…`) multiples, en sus de classes de composant (`.c-…`).
