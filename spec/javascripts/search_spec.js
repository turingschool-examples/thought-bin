//= require search
//= require support/link_helpers

describe('search', function () {
  var links = createLinks();
  var bLink = createLink("Box Turtle", 1);
  var aLink = createLink("Aardvark", 2);
  var zLink = createLink("Zebra", 3);
  links.appendChild(bLink);
  links.appendChild(aLink);
  links.appendChild(zLink);

  it('show matching link elements', function () {
    search(links, 'Aa');
    var hidden = $(links).children().filter(function() { return $(this).css("display") == "none" });
    var shown = $(links).children().filter(function() { return $(this).css("display") == "block" });
    assert.equal(shown.length, 1);
    assert.equal($(shown[0]).find('a').text(), 'Aardvark');
  });

  it('show all elements if empty string used', function () {
    search(links, '');
    var hidden = $(links).children().filter(function() { return $(this).css("display") == "none" });
    var shown = $(links).children().filter(function() { return $(this).css("display") == "block" });
    assert.equal(shown.length, 3);
    assert.equal(hidden.length, 0);
  });

  it('is case insensitive', function () {
    search(links, 'box');
    var hidden = $(links).children().filter(function() { return $(this).css("display") == "none" });
    var shown = $(links).children().filter(function() { return $(this).css("display") == "block" });
    assert.equal(shown.length, 1);
    assert.equal($(shown[0]).find('a').text(), 'Box Turtle');
  });
});
