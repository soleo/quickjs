"use strict";

import Vue from "./vendor/vue_module.js";
import renderVueComponentToString from "./vendor/vue-server-renderer/basic_module.js";


(function() {
    // Hello example
    var vmHello = new Vue({
      template: `<div>{{ msg }}</div>`,
      data: {
        msg: 'hello'
      }
    })
    // exposed by `vue-server-renderer/basic.js`
    renderVueComponentToString(vmHello, (err, res) => {
      print(res)
    })

    // vFor example
    var vmForLoop =  new Vue({
      template: `
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
`,
      data: {
         items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    })
    renderVueComponentToString(vmForLoop, (err, res) => {
      print(res)
    })

    // ToDo Item Example
    Vue.component('todo-item', {
      template: '\
        <li>\
          {{ title }}\
          <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
      ',
      props: ['title']
    })
     var vmToDo =  new Vue({
      template: `
 <div id="todo-list-example">
 <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
 </div>
`,
      data: {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes',
          },
          {
            id: 2,
            title: 'Take out the trash',
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      },
      methods: {
        addNewTodo: function () {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          })
          this.newTodoText = ''
        }
      }
    })
    renderVueComponentToString(vmToDo, (err, res) => {
      print(res)
    })
})();




