//= require filter
//= require support/link_helpers

describe('filter', function () {
  var links = createLinks();
  var unreadLink = createLink("unRead", 1, 'unread');
  var readLink1 = createLink("Read1", 2, 'read');
  var readLink2 = createLink("Read2", 3, 'read');
  links.appendChild(unreadLink);
  links.appendChild(readLink1);
  links.appendChild(readLink2);

  it('can remove all unread links', function () {
    var filteredLinks = filterLinks(links, 'read');
    assert.equal($(filteredLinks).find('.unread').length, 0);
    assert.equal($(filteredLinks).find('.read').length, 1);
  });

  it('can remove all read links', function () {
    var filteredLinks = filterLinks(links, 'unread');
    assert.equal($(filteredLinks).find('.unread').length, 2);
    assert.equal($(filteredLinks).find('.read').length, 0);
  });
});
