import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}     from '/game/js/router.ts';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);