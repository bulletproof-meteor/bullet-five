Meteor.publish('messages', function () {
  return Messages.find({$where: 'function () { return this.isValid }'});
});
