import { Ref } from 'vue';

interface ICoordinates {
  latitude: number;
  longitude: number;
}

interface IGeolocation {
  coords: Ref<ICoordinates>;
  isSupported: string;
}

export { ICoordinates, IGeolocation };
