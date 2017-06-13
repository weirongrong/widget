import Ember from 'ember';


export default Ember.Route.extend({
    fastboot: Ember.inject.service(),
 model(){
    
    // let headers = this.get('https://dashboard-staging.hrofficelabs.com/');
    // let xRequestHeader = headers.get('token');
    // console.log(xRequestHeader);
 }
});
