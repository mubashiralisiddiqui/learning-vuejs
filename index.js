
Vue.component("first-item",{
    template:'<h2>this is my first component</h2>'
})
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })

var app = new Vue({
    el: '#app',
    data: {
        message: "hello vue ",
        bool: true,
        todos: [{ name: "react" }, { name: "vue" }, { name: "angular" }]
    },
    methods: {
        test: () => alert("hy events")
    }
})

app.todos.push({ name: "flutter" })