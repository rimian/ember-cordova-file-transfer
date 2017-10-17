import Ember from 'ember';
import Component from '@ember/component';

// eslint-disable-next-line no-unused-vars
const { error, warn } = Ember.Logger;

export default Component.extend({
  openCamera() {
    // eslint-disable-next-line no-undef
    let options = this._setOptions(Camera.PictureSourceType.CAMERA);

    // navigator.camera.getPicture(imageUri => {
    //   warn('image', imageUri);
    // },
    // error => {
    //   error('Unable to obtain picture: ' + error);
    // }, options);

  },

  actions: {
    clickOpenCamera() {
      warn('open camera');
      this.openCamera();
    }
  },

  _setOptions(srcType) {
    return {
      sourceType: srcType,
      quality: 50,
      allowEdit: true,
      correctOrientation: true,  //Corrects Android orientation quirks
      /*eslint-disable no-undef */
      destinationType: Camera.DestinationType.FILE_URI,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      /*eslint-enable no-undef */
    };
  },
});
