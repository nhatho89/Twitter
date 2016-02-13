var FollowToggle = function(el) {
  this.$el = $(el);
  this.followState = this.$el.attr("data-initial-follow-statement");
  this.userId = this.$el.attr("data-user-id");
  this.$el.on("click", this.handleClick.bind(this));
  this.render();
};

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed"){

    this.$el.html("Follow!");

  } else if ( this.followState === 'followed'){
    this.$el.html("Unfollow!");
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  var request = '';
  if (this.followState === 'unfollowed') {
    request = 'POST';
  } else {
    request = 'DELETE';
  }

  $.ajax({
    url: "/users/" + this.userId + "/follow",
    type: request,

    success: function() {
      debugger;
      this.render();
    }.bind(this)

  });
  };

module.exports = FollowToggle;
