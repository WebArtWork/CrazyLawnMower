import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router}     from '/game/js/router.ts';

bootstrap(Router, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);
