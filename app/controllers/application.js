import Controller from '@ember/controller';

export default Controller.extend({
  alertMessage: null,
  alertType: null,
  isAlertShowing: false,
  showLinkCryptids : true,
  actions: {
    removeAlert() {
      this.set('alertMessage', "");
      this.set('alertType', "success");
      this.set('isAlertShowing', false);
    }
  }
});
