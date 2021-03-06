export class App {
	configureRouter(config, router) {
		config.title = 'Aurelia';
		config.map([
			{ route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
			{ route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'GitHub Users' },
			{ route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' },
			{ route: 'test',          name: 'test',         moduleId: './test',         nav: true, title: 'A Test Page' }
		]);
		this.router = router;
	}
}
