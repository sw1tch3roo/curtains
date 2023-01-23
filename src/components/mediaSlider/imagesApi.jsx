/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getImages = (productId, length = 10) => {
  return fetch(`https://63c7ed555c0760f69ac121f6.mockapi.io/products/` + productId)
    .then((response) => response.json())
    .then((response) => {
      const images = [];

      // console.log(response.image);

      response.image.forEach((image) => {
        console.log(image);
        // const title = c?.title;
        const imageUrl = image;

        images.push({ imageUrl });
      });

      // for (let key in response) {
      //   const title = response?.title;
      //   const url = response?.image;
      //   images.push({ title, url });
      // }

      return images.slice(0, length); // remove the extra cats
    });
};

//  const title = response?.title;
// const url = response?.image;
