export const getCards = function(chunkIndex) {
  return fetch(`/api/cards/${chunkIndex}`);
};
