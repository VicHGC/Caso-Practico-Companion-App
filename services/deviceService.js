import { MOCK_EQUIPMENTS } from '../mocks/equipments';

export const getDevices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_EQUIPMENTS);
    }, 800);
  });
};