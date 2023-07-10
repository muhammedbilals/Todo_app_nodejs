const TodoModel = require('../model/todo.model');

class TodoServices {
    static async createTodo(userId, title, description) {
        const createTodo = new TodoModel({ userId, title, description })
        return await createTodo.save()
    }
    static async getTodo(userId) {
        const Todo = TodoModel.find({userId});
        return Todo;
    }
    static async deleteTodo(id) { 
        const deleted = TodoModel.findOneAndDelete(id)
        return deleted;
    }
    static async updateTodo(id,title,description) {
        // console.log(id,title,description)
        const todo = TodoModel.findOneAndUpdate({ _id: id }, { title, description }, { new: true });
        return todo;
    }
};

module.exports = TodoServices;