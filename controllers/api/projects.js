const fetch = require('node-fetch');
const Project = require('../../models/project');

module.exports = {
    create,
    getAll,
    findOneAndDelete
};

async function getAll(req, res) {
    const projects = await Project.find({});
    res.json(projects);
}

async function create(req, res) {
    console.log(req.body);
    const project = await Project({...req.body, user: req.user});
    project.save();
    res.json(project);
}

async function findOneAndDelete(req, res) {
    await Project.findByIdAndDelete(req.params.id);
    console.log("controller");
    const projects = await Project.find({});
    res.json(projects);
}