if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

// This example is via `service-configuration`
ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "f4a04c5281f6464ca93766340927c808",
      "secret": "60049efa9b7444f79b6f465d15bf4dfe"
    }
  },
  { upsert: true }
);
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
