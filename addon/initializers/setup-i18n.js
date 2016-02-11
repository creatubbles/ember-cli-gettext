import Ember from 'ember';
import gettext from 'ember-cli-gettext/gettext';

export function initialize(container, application) {
  var config = application.gettext;
  if (Ember.isPresent(config)) {
    var translations = config.translations;
    if (Ember.isPresent(translations)) {
      Object.keys(translations).forEach(function(locale) {
        gettext.loadJSON(translations[locale]);
      });
    }
    if (Ember.isPresent(config.defaultLocale)) {
      gettext.setLocale(config.defaultLocale);
    }
  }

  application.register('service:gettext', gettext, { instantiate: false });

  window._t = gettext._t;
  window._ = gettext._t;
  window._n = gettext._n;
}

export default {
  name: 'gettext',
  initialize
};
