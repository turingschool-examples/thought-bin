//= require sort
//= require support/link_helpers

describe('sortAlphabetically', function () {
  var links = createLinks();
  var bLink = createLink("Box Turtle", 1);
  var aLink = createLink("Aardvark", 2);
  var zLink = createLink("Zebra", 3);
  links.appendChild(bLink);
  links.appendChild(aLink);
  links.appendChild(zLink);

  it('sorts link elements alphabetically', function () {
    var sortedLinks = sortAlphabetically(links);
    assert.equal($(sortedLinks[0]).find('a').text(), 'Aardvark');
    assert.equal($(sortedLinks[1]).find('a').text(), 'Box Turtle');
    assert.equal($(sortedLinks[2]).find('a').text(), 'Zebra');
  });
});
