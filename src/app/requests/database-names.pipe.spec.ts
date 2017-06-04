import { DatabaseNamesPipe } from './database-names.pipe';

describe('DatabaseNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new DatabaseNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
