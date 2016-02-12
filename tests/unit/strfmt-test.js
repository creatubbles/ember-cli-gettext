import { module, test } from 'qunit';
import { strfmt } from 'ember-cli-gettext/utils/strfmt';

module('Unit | strfmt');

test('works without params', function(assert) {
  assert.equal(strfmt('test'), 'test');
});

test('adds space at start', function(assert) {
  assert.equal(strfmt('test', {'space': 's'}), ' test');
});

test('adds space at end', function(assert) {
  assert.equal(strfmt('test', {'space': 'e'}), 'test ');
});

test('adds space at start and end', function(assert) {
  assert.equal(strfmt('test', {'space': 'es'}), ' test ');
});

test('replaces texts', function(assert) {
  assert.equal(strfmt('test {{subme}}!', {'subme': 'me'}), 'test me!');
});

test('replaces texts, adds space', function(assert) {
  assert.equal(strfmt('test {{subme}}!', {'subme': 'me', 'space': 'se'}), ' test me! ');
});
