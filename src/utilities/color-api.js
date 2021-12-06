import sendRequest from './send-request';
const BASE_URL = './api/colors';

export function searchColors() {
    return sendRequest(BASE_URL);
  }