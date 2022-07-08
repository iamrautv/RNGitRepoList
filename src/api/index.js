import axios from 'axios';

const API = (url, method, data) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      let reqObj = {
        method: method,
        url,
      };
      if (data) {
        reqObj = {
          ...reqObj,
          data,
        };
      }
      const res = await axios(reqObj);
      resolve(res);
    } catch (err) {
      reject('Error loading the data');
    }
  });
  return promise;
};

export default API;
