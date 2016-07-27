function sortAlphabetically(links) {
  var sortedLinks = $(links).children().sort(function(a,b){
    return $(a).find("a").text() > $(b).find("a").text();
  });
  return sortedLinks;
}
