import { ApiMockService, ApiMockDataCallback, ApiMockRootRoute } from '@ng-stack/api-mock';

import { Hero } from './hero';

export class SimpleService implements ApiMockService {
  /**
   * Here, as example, returned array contains two routes:
   * - first route without `dataCallback`
   * - the second route with `dataCallback`
   */
  getRoutes(): ApiMockRootRoute[] {
    return [
      {
        path: 'api/login',
        responseCallback: () => ({ message: 'OK' })
      },
      {
        path: 'api/heroes/:id',
        dataCallback: this.getDataCallback(),
      },
    ];
  }

  /**
   * The callback called when URL is like `api/heroes` or `api/heroes/3`.
   */
  private getDataCallback(): ApiMockDataCallback<Hero[]> {
    return ({ httpMethod, items }) => {
      if (httpMethod == 'GET') {
        return [
          { id: 1, name: 'Windstorm' },
          { id: 2, name: 'Bombasto' },
          { id: 3, name: 'Magneta' },
          { id: 4, name: 'Tornado' },
        ];
      } else {
        return items;
      }
    };
  }
}
