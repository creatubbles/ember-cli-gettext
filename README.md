# Ember-cli-gettext

This README outlines the details of collaborating on this Ember addon.

This addon depends on gettext.js (https://github.com/guillaumepotier/gettext.js).

## Installation

`ember install ember-cli-gettext`

## Configuration

To load all translations at build time, use the following code in your `environment.js`:

```javascript
var translations = {}
for (var locale of ['en', 'ja']) {
  translations[locale] = JSON.parse(fs.readFileSync('locale/'+locale+'.json', { encoding: 'utf8' }));
}
ENV['gettext'] = { defaultLocale: 'ja', translations: translations }
```

and to your `app.js` should contain something like:

```javascript
App = Ember.Application.extend({
  gettext: config.gettext
});
```

This would setup your project to default to Japanese locale, and load English and Japanese translations from `locale/{{locale}}.json`.
The JSON files should be follow the [format documented in gettext.js readme](https://github.com/guillaumepotier/gettext.js#required-json-format).

## Using

In your templates you can use the following two helpers:

* i18n-t - see [gettext(str)](https://github.com/guillaumepotier/gettext.js#gettextmsgid)
* i18n-n - see [ngettext(msgid, msgid_plural, n)](https://github.com/guillaumepotier/gettext.js#ngettextmsgid-msgid_plural-n)

All helpers take an additional hash used to interpolate the given string.
