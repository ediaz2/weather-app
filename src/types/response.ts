/* eslint-disable camelcase */
import { IConsolidatedWeather, ILocation, ISource } from '@/types/weather';

type IResLocation = ILocation;

interface IResWeather extends ILocation {
  consolidated_weather: IConsolidatedWeather[];
  time: Date;
  sun_rise: Date;
  sun_set: Date;
  timezone_name: string;
  parent: {
    title: string;
    location_type: number;
    woeid: number;
    latt_long: string;
  };
  sources: ISource[];
  timezone: string;
}

export { IResLocation, IResWeather };
