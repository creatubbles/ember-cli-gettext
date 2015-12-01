module.exports = {
	description: 'Installs gettext.js using bower',
	normalizeEntityName: function() {},
  afterInstall: function() {
   return this.addBowerPackagesToProject([
		 {name: 'gettext.js'}
	 ]);
 }

};
