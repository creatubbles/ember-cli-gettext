export function strfmt(string, hash) {
  if (typeof hash === 'undefined') {
    return string;
  }
  if (typeof hash['space'] !== "undefined" && hash['space'] !== null) {
    var spacing = hash['space'];
    if (spacing.indexOf('s') > -1) { string = ' ' + string; }
    if (spacing.indexOf('e') > -1) { string = string + ' '; }
  }
  return string.replace(/\{\{\s*([a-zA-Z]+)\s*\}\}/g, function (i, match) {
    return typeof hash[match] !== 'undefined' ? hash[match] : '{{' + match + '}}';
  });
}

export default strfmt;
