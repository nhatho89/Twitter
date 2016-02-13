var FollowToggle = require('./follow_toggle.js');

$( document ).ready(function() {
    $('button.follow-toggle').each(function(index, el) {
      new FollowToggle(el);
    });
});
