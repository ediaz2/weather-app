export type LocationType =
  | 'City'
  | 'Region'
  | 'State'
  | 'Province'
  | 'Country'
  | 'Continent';

type WeatherStateAbbreviation =
  | 'sn'
  | 'sl'
  | 'h'
  | 't'
  | 'hr'
  | 'lr'
  | 's'
  | 'hc'
  | 'lc'
  | 'c';

type WindDirectionCompass =
  | 'N'
  | 'NbE'
  | 'BBE'
  | 'NEbN'
  | 'NE'
  | 'NEbE'
  | 'ENE'
  | 'EbN'
  | 'E'
  | 'EbS'
  | 'ESE'
  | 'SEbE'
  | 'SE'
  | 'SEbS'
  | 'SSE'
  | 'SbE'
  | 'S'
  | 'SbW'
  | 'SSW'
  | 'SWbS'
  | 'SW'
  | 'SWbW'
  | 'WSW'
  | 'WbS'
  | 'W'
  | 'WbN'
  | 'WNW'
  | 'NWbW'
  | 'NW'
  | 'NWbN'
  | 'NbW'
  | 'N';

export type WeatherStateName =
  | 'Snow'
  | 'Sleet'
  | 'Hail'
  | 'Thunderstorm'
  | 'Heavy Rain'
  | 'Light Rain'
  | 'Showers'
  | 'Heavy Cloud'
  | 'Light Cloud'
  | 'Clear';

export interface ILocation {
  title: string;
  location_type: LocationType;
  woeid: number;
  latt_long: string;
}

export interface ISource {
  title: string;
  url: string;
  slug: string;
  crawl_rate: number;
}

export interface IConsolidatedWeather {
  id: number;
  weather_state_name: WeatherStateName;
  weather_state_abbr: WeatherStateAbbreviation;
  wind_direction_compass: WindDirectionCompass;
  created: Date;
  applicable_date: Date;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}
