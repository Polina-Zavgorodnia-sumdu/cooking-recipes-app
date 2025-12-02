import { ShortenDescriptionPipe } from './shorten-description-pipe';

describe('ShortenDescriptionPipe', () => {
  const pipe = new ShortenDescriptionPipe();

  it('повертає той самий текст, якщо він коротший за ліміт', () => {
    expect(pipe.transform('Привіт', 10)).toBe('Привіт');
  });

  it('обрізає текст та додає …', () => {
    expect(pipe.transform('Дуже довгий опис', 5)).toBe('Дуже …');
  });
});
