import httpClient from '@/api/httpClient';

const END_POINT = "generate-entry";

const setEntry = (data) => httpClient.post('generate-entry', data);

export { setEntry };
