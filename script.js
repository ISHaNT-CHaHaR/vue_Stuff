// let app = new Vue({
//    el: '#root',
//    data: {
//       message: 'Malayalam naman Nitin',
//    },
//    methods: {
//       reverseMessage: function () {
//          this.message = this.message.split(' ').reverse().join(' ');
//       },
//    },
// });

// let app = new Vue({
//    el: '#root',
//    data: {
//       message: 'Malayalam naman Nitin',
//    },
//    // methods: {
//    //    reverseMessage: function () {
//    //       this.message = this.message.split(' ').reverse().join(' ');
//    //    },
//    // },
// });

// Vue.component('todo-item', {
//    props: ['todo'],
//    template: '<li>{{todo.text}}</li>',
// });

// let app = new Vue({
//    el: '#root',
//    data: {
//       groceryList: [
//          {
//             id: 0,
//             text: 'Vegetables',
//          },
//          {
//             id: 1,
//             text: 'Cheese',
//          },
//          {
//             id: '2',
//             text: 'Milk',
//          },
//       ],
//    },
// });

// let app = new Vue({
//    el: '#vue-app',
//    data: {
//       name: 'ishant',
//       job: 'researcher',
//    },
//    methods: {
//       greet: function () {
//          return 'Hann bhai?';
//       },
//    },
// });

// var id = new Vue({
//    el: '#app',
//    data: {
//       product: 'Socks',
//       image: './DlDaGxnW4AAZozn.jpg',
//    },
// });
var app = new Vue({
   el: '#app',
   data: {
      product: 'Graphic',
      image: './vmSocks-green-onWhite.jpg',
      inStock: true,
      cart: 0,
      details: ['80% Cotton', '20% polyester', 'Gender Neutral'],

      variants: [
         {
            variantId: 2234,
            variantColor: 'green',
            variantImage: './vmSocks-green-onWhite.jpg',
         },
         {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: './vmSocks-blue-onWhite.jpg',
         },
      ],
   },
   methods: {
      addToCar() {
         this.cart += 1;
      },
   },
});
