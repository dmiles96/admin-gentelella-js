import * as Base from './base';
import * as Shell from './shell';
import * as Dependencies from './dependencies';

const injectRenderEverything = Dependencies.Inject.configure("render_everything");
const renderEverything = injectRenderEverything({"base": Base, "shell": Shell});

renderEverything();
