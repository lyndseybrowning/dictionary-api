import { expect } from 'chai';
import dictionary from '../src/dictionary';

describe('Dictionary', () => {
  let words;

  beforeEach((done) => {
    words = dictionary.init();
    done();
  });

	describe('init()', () => {
  	it('should return an array');
    it('should not return an empty array');
  });

  describe('get()', () => {
    it('should create an instance of the dictionary if it is empty');
    it('should return an instance of the dictionary created by init()');
  });

  describe('filterByLength()', () => {
    it('should not modify the global dictionary array');
    it('should accept a parameter of type Number');
    it('should return an array of words filtered by length');
  });

  describe('filterByPrefix()', () => {
    it('should not modify the global dictionary array');
    it('should accept a parameter of type String');
    it('should return an array of words that start with the requested prefix');
  });

  describe('filterBySuffix()', () => {
    it('should not modify the global dictionary array');
    it('should accept a parameter of type String');
    it('should return an array of words that end with the requested suffix');
  });
});
