const TodoServices = require('../services/todo.services');
const UserService = require('../services/user.services');

exports.createTodo = async (req, res, next) => {
    try {
        const { userId, title, description } = req.body;
        let todo = await TodoServices.createTodo(userId, title, description);

        res.json({ status: true, success: todo })
    } catch (error) {
        throw error;
    }
}

exports.getTodo = async (req, res, next) => {
    try {
        const { userId } = req.body;
        let todo = await TodoServices.getTodo(userId);

        res.json({ status: true, success: todo })
    } catch (error) {
        throw error;
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.body;
        let deleted = await TodoServices.deleteTodo(id);

        res.json({ status: true, success: deleted })
    } catch (error) {
        throw error;
    }
}

exports.updateTodo = async (req, res, next) => {
    try {
        const { id, title, description } = req.body;
        console.log(req.body)
        let todo = await TodoServices.updateTodo(id, title, description);

        res.json({ status: true, success: todo })
    } catch (error) {
        console.log('got error in update');

        res.status(500).json({message:error.message})
    }
}