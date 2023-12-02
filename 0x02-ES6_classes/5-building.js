export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const properties = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!properties.find((name) => name === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if ((typeof sqft !== 'number') && (sqft instanceof Number)) {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
