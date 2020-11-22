export const EVENTS = {
  LIKE: 'like',
  SUPERLIKE: 'super-like',
  DESLIKE: 'deslike'
};

export const InteractEventBus = {
  draggedRight: EVENTS.LIKE,
  draggedLeft: EVENTS.DESLIKE,
  draggedUp: EVENTS.SUPERLIKE
};
