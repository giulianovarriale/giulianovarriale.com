// Inspired by this article
// https://www.laroberto.com/publishing-in-netlify-via-travisci/

const axios = require('axios');
const { NETLIFY_SITE_ID, NETLIFY_ACCESS_TOKEN } = process.env;

const BASE_URL = `https://api.netlify.com/api/v1`;
const SITE_DEPLOYS_URL = `${BASE_URL}/sites/${NETLIFY_SITE_ID}/deploys`;

axios.defaults.headers.common['Authorization'] = `Bearer ${NETLIFY_ACCESS_TOKEN}`;

axios.get(`${SITE_DEPLOYS_URL}`)
  .then(({ data }) => data[0].id)
  .then((id) => new Promise((resolve, reject) => {
    axios.post(`${SITE_DEPLOYS_URL}/${id}/restore`)
      .then(() => resolve(id))
      .catch((err) => reject(err));
  }))
  .then((id) => axios.post(`${BASE_URL}/deploys/${id}/lock`))
  .then(() => console.log('Deploy published successfully'))
  .catch((e) => console.log('Error: ', e.response));
