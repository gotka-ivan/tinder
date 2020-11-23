export const getCards = function(chunkIndex) {
  return fetch(`/api/cards/${chunkIndex}`).then(data => data.json());
};
