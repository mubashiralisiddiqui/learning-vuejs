


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