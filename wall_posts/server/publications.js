Meteor.publish('wall_posts', function (count) {
  // Post: {_id: string, text: string, time: int}
  return Posts.find({}, {limit: count});
});
