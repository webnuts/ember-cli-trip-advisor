import Ember from 'ember';

export default Ember.Component.extend({
  uniq: undefined,
  locationId: undefined,
  color: 'green',
  size: 'rect',
  lang: 'da',
  displayVersion: 2,

  didInsertElement: function() {
    var self = this;

    Ember.assert("You need to specify 'uniq' for trip-advisor component. It's used to reference this specific icon.", this.get('uniq'));
    
    if (!window.taValidate) {
      $.getScript('//www.tripadvisor.dk/WidgetEmbed-socialButtonReviews?uniq=' + this.get('uniq') + '&locationId=' + this.get('locationId') + '&color=' + this.get('color') + '&size=' + this.get('size') + '&lang=' + this.get('lang') + '&display_version=' + this.get('displayVersion')).then(function() {
        self.initializeTripAdvisor();
      });
    }
    else {
      self.initializeTripAdvisor();
    }
  },

  initializeTripAdvisor: function() {
    window.taValidate();
  }
});