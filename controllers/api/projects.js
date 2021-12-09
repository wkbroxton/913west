const fetch = require('node-fetch');
const Project = require('../../models/project');

module.exports = {
    create,
    getAll,
    findOneAndDelete,
    updateProject
};

async function getAll(req, res) {
    const projects = await Project.find({user: req.user._id });
    res.json(projects);
}

async function create(req, res) {
    const project = await Project({...req.body, user: req.user._id});
    project.save();
    res.json(project);
}

async function findOneAndDelete(req, res) {
    await Project.findByIdAndDelete(req.params.id);
    const projects = await Project.find({});
    res.json(projects);
}

async function updateProject(req, res) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(project);
}