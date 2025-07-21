const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  
  it("Books names should handle descending order", () => {
    const input = ["Волшебник изумрудного города", "Властелин Колец", "Гарри Поттер"];
    const result = sorting.sortByName([...input]);
    expect(result).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names should handle equal names", () => {
    const input = ["Гарри Поттер", "гарри поттер"];
    const result = sorting.sortByName([...input]);
    expect(result).toEqual(["Гарри Поттер", "гарри поттер"]);
  });
});
  