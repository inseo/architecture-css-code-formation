# Exercice 5 : Corriger un bug sur Edge

<!--
SI TU UTILISES UN ÉDITEUR CAPABLE DE PRÉVISUALISER MARKDOWN,
FAIS-LE.  PAR EXEMPLE, DANS VS CODE, CMD/CTRL+SHIFT+V AFFICHE LA PRÉVISUALISATION.
-->

Les choix d’intégration que nous avons fait pour le filet décoratif du pied de page, qui utilisent notamment une translation horizontale, entraînent un bug répertorié sur Edge et IE. Il se traduit par l'apparition d'un ascenseur horizontal en bas de la fenêtre.

Les commentaires conditionnels n’étant plus exploitables sur IE depuis IE 10, nous ne pouvons pas juste inclure une CSS conditionnellement, et devons recourir à un hack.

## Résultat attendu

[La maquette](./RESULTAT_ATTENDU.png) est là.

## Tâches de cet exercice

1. Ajoute une classe `_c-footer` (préfixe conventionnel `_` de hack) dans le HTML sur l’élément approprié ;
2. Dans `_components.footer.scss` :
   - Crée une nouvelle règle ciblant le sélecteur `_c-footer` ;
   - Ajoute le correctif (un simple `overflow-x: hidden`).
   - Renseigner la nature du correctif via le commentaire suivant :
  ```
  /**
    * Avoid unwanted horizontal scrollbar on Edge and IE11
    * @see [Parent container size calculated incorrectly if child element uses position: absolute in combination with transform: translate](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/107210/)
  */
  ```
