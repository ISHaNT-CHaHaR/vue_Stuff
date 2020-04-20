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

Vue.component('todo-item', {
   props: ['todo'],
   template: '<li>{{todo.text}}</li>',
});

let app = new Vue({
   el: '#root',
   data: {
      groceryList: [
         {
            id: 0,
            text: 'Vegetables',
         },
         {
            id: 1,
            text: 'Cheese',
         },
         {
            id: '2',
            text: 'Milk',
         },
      ],
   },
});
