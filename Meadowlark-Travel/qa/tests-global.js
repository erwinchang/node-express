suite('Global Tests',function(){
	test('page has a vail title',function(){
		assert(document.title && document.title.match(/\s/) &&
			document.title.toUpperCase() !== 'TODO');
	});
});