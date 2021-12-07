const fetch = require('node-fetch');
const Project = require('../../models/project');

module.exports = {
    create,
    getAll,
};

async function getAll(req, res) {
    const projects = await Project.find({})
    res.json(projects);
}

async function create(req, res) {
    console.log(req.body);
    const project = await Project({...req.body, user: req.user});
    project.save();
    res.json(project);
}