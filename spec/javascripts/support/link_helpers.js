function createLinks(){
  var links = document.createElement('div');
  links.className = 'links';
  return links;
}

function createPopulatedLinks(){
  var links = createLinks();
  for(var i = 1; i < 5; i++) {
    var name = 'New Link' + i;
    var link = createLink(name, i);
    links.appendChild(link);
  }
  return links;
}

function createLink(name, id, readStatus){
  var link = document.createElement('div');
  link.id = id;
  link.className = readStatus || 'unread';
  var a = document.createElement('a');
  var linkText = document.createTextNode(name);
  a.appendChild(linkText);
  a.title = name;
  a.href = "http://example.com";
  link.appendChild(a);
  return link;
}
