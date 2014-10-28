import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  example: DS.attr(),
  leftContent: DS.attr(),
  rightContent: DS.attr(),
  pageNumber: DS.attr('number'),
});