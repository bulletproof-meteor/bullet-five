Meteor.startup(function () {
  var hipsum = Meteor.npmRequire('lorem-hipsum');
  Notifications.remove({/* everything */});
  var hipsumParams = {count: 1, units: 'sentences', format: 'plain'};
  for(var i=20; i-->0;) {
    Notifications.insert({text: hipsum(hipsumParams)});
  }
});
