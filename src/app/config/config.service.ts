import { Injectable } from '@angular/core';
import { Config } from './config'
import { ConfigData } from './config.mock';

@Injectable()
export class ConfigService {
    getConfig(environment: string): Promise<Config> {
        return Promise.resolve(ConfigData.find(x => x.environment === environment));
    }
}
