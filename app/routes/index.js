import Ember from 'ember';
import fetch from 'ember-fetch/ajax';

export default Ember.Route.extend({
 model(){
     return Ember.$.ajax('https://dashboard-staging.hrofficelabs.com');
    //  return fetch('https://dashboard-staging.hrofficelabs.com')
    //     .then (function(response){
    //         return response;
    //     });
 }
});
