import { useParams } from 'react-router-dom';

/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getImages = (length = 10) => {
  // return fetch(`https://63c7ed555c0760f69ac121f6.mockapi.io/products/` + productId)
  return fetch(`https://63c7ed555c0760f69ac121f6.mockapi.io/images`)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.title;
        const url = c?.image;

        images.push({ title, url });
      });
      return images.slice(0, length); // remove the extra cats
    });
};

//  const title = response?.title;
// const url = response?.image;
