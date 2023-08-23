const sorting = require('../../app');

describe('Books names test suit', () => {
  it('Books names should be sorted in ascending order', () => {
    const input = [
      'Гарри Поттер',
      'Властелин Колец',
      'Волшебник изумрудного города',
    ];
    const expected = [
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  test('Book names should not be sorted', () => {
    const input = [
      'Три товарища',
      'Гордость и предубеждение',
      'Гордость и предубеждение',
    ];
    const expected = [
      'Гордость и предубеждение',
      'Гордость и предубеждение',
      'Три товарища',
    ];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });
});
