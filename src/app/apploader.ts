import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

export class AppLoader implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        console.log("AppCustomPreloader: ", route);
        return route.data && route.data.preload ? load() : of(null);
    }
}
