import Controller from '@ember/controller';

export default Controller.extend({
  alertMessage: null,
  alertType: null,
  isAlertShowing: false,
  actions: {
    removeAlert() {
      this.set('alertMessage', "");
      this.set('alertType', "success");
      this.set('isAlertShowing', false);
    }
  }
});
