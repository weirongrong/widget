import Ember from 'ember';


export default Ember.Route.extend({
    fastboot: Ember.inject.service(),
 model(){
    
    let headers = this.get('https://obscure-brushlands-65803.herokuapp.com/');
    let xRequestHeader = headers.get('X-Request');
    //  return Ember.$.ajax('https://dashboard-staging.hrofficelabs.com');
    //  return fetch('https://dashboard-staging.hrofficelabs.com')
    //     .then (function(response){
    //         return response;
    //     });
 }
});
