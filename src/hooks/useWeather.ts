import { computed, Ref, ref } from 'vue';

import { IResLocation, IResWeather } from '@/types/response';
import { IConsolidatedWeather } from '@/types/weather';
import { HttpClient } from '@/utils/HttpClient';

// State
const location: Ref<IResLocation | undefined> = ref(undefined);
const locations: Ref<IResLocation[] | undefined> = ref(undefined);
const consolidated: Ref<IConsolidatedWeather[] | undefined> = ref(undefined);
const weatherToday: Ref<IConsolidatedWeather | undefined> = ref(undefined);

// Mutations
const setLocation = (payload?: IResLocation) => (location.value = payload);
const setLocations = (payload?: IResLocation[]) => (locations.value = payload);
const setConsolidated = (payload?: IConsolidatedWeather[]) =>
  (consolidated.value = payload);
const setWeatherToday = (payload?: IConsolidatedWeather) =>
  (weatherToday.value = payload);

// Actions
const SearchLocations = async (
  params: URLSearchParams
): Promise<IResLocation[] | undefined> => {
  const endPoint = '/location/search';
  const data = await HttpClient<IResLocation[]>(endPoint, 'GET', params);
  setLocations(data.parsedBody);
  return data.parsedBody;
};

const GetByWoeid = async (woeid: number): Promise<IResWeather | undefined> => {
  const endPoint = `/location/${woeid}`;
  const data = await HttpClient<IResWeather>(endPoint, 'GET');
  setConsolidated(data.parsedBody?.consolidated_weather.slice(1, 6));
  setWeatherToday(data.parsedBody?.consolidated_weather[0]);
  setLocation({
    title: data.parsedBody?.title || '',
    location_type: data.parsedBody?.location_type || 'City',
    woeid: data.parsedBody?.woeid || 0,
    latt_long: data.parsedBody?.latt_long || '',
  });
  return data.parsedBody;
};

// Getters
const getLocation = computed(() => location.value);
const getLocations = computed(() => locations.value);
const getConsolidated = computed(() => consolidated.value);
const getWeatherToday = computed(() => weatherToday.value);

export {
  GetByWoeid,
  getConsolidated,
  getLocation,
  getLocations,
  getWeatherToday,
  SearchLocations,
};
