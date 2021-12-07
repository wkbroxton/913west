import sendRequest from './send-request';

const BASE_URL = '/api/projects';

export function create(project) {
    return sendRequest(`${BASE_URL}`, 'POST', project);
}

export function getAll() {
    return sendRequest(`${BASE_URL}`);
  }