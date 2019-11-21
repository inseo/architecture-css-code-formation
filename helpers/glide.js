/*
 * Affiche :
 * - 1 élément par vue jusqu’à 719px
 * - 2 éléments par vue de 720px à 991px
 * - 3 éléments par vue à partir de 992px
 *
 * @see https://glidejs.com/docs/options/#perview
 */
new Glide('.js-glide--arrow', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 30,
  breakpoints: {
    991: {
      perView: 2,
    },
    719: {
      perView: 1,
    },
  },
}).mount()
