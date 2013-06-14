function addBlankTargetForLinks () {
  $('article a').each(function() {
    $(this).attr('target', '_blank');
  });
}
$(document).bind('DOMNodeInserted', function(event) {
  addBlankTargetForLinks();
});
