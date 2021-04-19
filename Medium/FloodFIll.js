/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor, oldColor = null) {
  if (oldColor === null) {
      oldColor = image[sr][sc];
  }

  if (oldColor === newColor) {
      return image;
  }

  let location = image[sr] === undefined ? undefined : image[sr][sc];

  if (location === undefined) {
      return;
  }

  if (location !== oldColor) {
      return;
  }

  image[sr][sc] = newColor;
  let neighbors = [[sr - 1, sc],[sr, sc + 1],[sr + 1, sc],[sr, sc - 1]];

  neighbors.forEach((tile) => {
      floodFill(image, tile[0], tile[1], newColor, oldColor);
  });

  return image;
};