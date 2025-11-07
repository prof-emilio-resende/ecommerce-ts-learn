import { describe, it, expect } from '@jest/globals';
import { hello } from '../index';

describe('test index', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it('should call hello', () => {
        expect(hello()).toBe('hello');
    });
});