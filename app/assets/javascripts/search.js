function search(links, term){
  var allLinks = $(links).children();
  var searchTerm = $.trim(term);
  if (searchTerm === ""){
    allLinks.show();
  } else {
    allLinks.hide();
    allLinks.has("a:contains(" + searchTerm + ")").show();
  }

  return links
}
