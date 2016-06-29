import Ember from 'ember';
import strfmt from 'ember-cli-gettext/utils/strfmt';

window.i18n = window.i18n || {};
var i18n = new window.i18n({
  ctxt_delimiter: '|'
});

i18n._t = function (msgid, hash) {
  return strfmt(i18n.gettext(msgid), hash);
};

i18n._n = function (msgid, msgid_plural, hash={}) {
  Ember.assert('You must pass a count attribute to translate plural forms', 'undefined' !== typeof hash.count);
  return strfmt(i18n.ngettext(msgid, msgid_plural, hash.count), hash);
};

i18n._s = function (msg, hash={}) {
  var splittedMsg = msg.split('|');
  return strfmt(i18n.pgettext(splittedMsg[0], splittedMsg[1]), hash);
};

export default i18n;
