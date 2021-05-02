import { Ref, ref } from 'vue';

import { ICoordinates, IGeolocation } from '@/types/geolocation';

// State
const isCelsius: Ref<boolean> = ref(true);
const isLoading: Ref<boolean> = ref(false);
const isSidebarSearch: Ref<boolean> = ref(false);

// Actions
const getCoords = () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getGeolocation = async (): Promise<IGeolocation> => {
  const coords: Ref<ICoordinates> = ref({ latitude: 0, longitude: 0 });
  const isSupported = 'navigator' in window && 'geolocation' in navigator;

  if (isSupported) {
    try {
      const pos: GeolocationPosition = await getCoords();
      coords.value = pos.coords;
    } catch (err) {
      return { coords, isSupported };
    }
  }
  return { coords, isSupported };
};

export { getGeolocation, isCelsius, isLoading, isSidebarSearch };
