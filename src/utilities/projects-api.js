import sendRequest from './send-request';

const BASE_URL = '/api/projects';

export function create(project) {
    return sendRequest(`${BASE_URL}`, 'POST', project);
}

export function getAll() {
    return sendRequest(`${BASE_URL}/dashboard`);
}

export function findOneAndDelete(id) {
    console.log('Did you see her?!?', id);
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function updateProject(project) {
    console.log('Changes', project);
    return sendRequest(`${BASE_URL}/${project._id}`, 'PUT', project);
}