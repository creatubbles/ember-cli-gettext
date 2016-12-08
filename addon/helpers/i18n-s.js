import Ember from 'ember';
import gettext from 'ember-cli-gettext/gettext';

export function getText(params, hash) {
  for (var key in hash) {
    if (!(hash[key] instanceof Ember.Handlebars.SafeString)) {
      hash[key] = Ember.Handlebars.Utils.escapeExpression(hash[key]);
    }
  }
  return new Ember.Handlebars.SafeString(gettext._s(...params, hash));
}

export default Ember.Helper.helper(getText);
