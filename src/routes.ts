export default [
	{
		path: '/',
		outlet: 'home',
		defaultRoute: true
	},
	{
		path: 'blog',
		outlet: 'blog',
		children: [
			{
				path: '{path}',
				outlet: 'blog-post'
			}
		]
	}
];
