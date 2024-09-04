import { getNuggets } from '$/lib/server/nuggets/services/get-nuggets';

export const load = async () => {
  const nuggets = await getNuggets();
  return { nuggets };
};
