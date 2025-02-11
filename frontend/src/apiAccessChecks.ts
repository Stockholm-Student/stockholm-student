import axios from 'axios';

export const checkAccessByGlobalRole = (
  token: string,
  endpoint: string,
) => {
  axios
    .get(endpoint, {
      headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
      }, 
      data: {}
    }).then(() => {}).catch((err) => console.log(err));
}


export const checkAccessByCommunityRole = (
  token: string,
  endpoint: string,
) => {}


export const checkAccessByUserId = (
  token: string,
  endpoint: string,
) => {}

