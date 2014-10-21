Meteor.startup(function () {
  var hipsum = Meteor.npmRequire('lorem-hipsum');
  Messages.remove({/* everything */});
  var hipsumParams = {count: 1, units: 'sentences', format: 'plain'};
  for(var i=20; i-->0;) {
    Messages.insert({
      text: hipsum(hipsumParams),
      isValid: (Math.random() < 0.25)
    });
  }
});
