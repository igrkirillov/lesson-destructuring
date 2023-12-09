import getAttacks from "../destructuring";

describe("destructuring module", () => {
  test ("default case", () => {
    const character = {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: "Двойной выстрел",
          icon: "http://...",
          description: "Двойной выстрел наносит двойной урон"
        },
        {
          id: 9,
          name: "Нокаутирующий удар",
          icon: "http://..."
        }
      ]
    };
    expect(getAttacks(character)).toEqual([
      { id: 8, name: "Двойной выстрел", icon: "http://...", description: "Двойной выстрел наносит двойной урон" },
      { id: 9, name: "Нокаутирующий удар", icon: "http://...", description: "Описание недоступно" }
    ]);
  });
  test ("empty attacks", () => {
    const character = {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: []
    };
    expect(getAttacks(character)).toEqual([]);
  });
  test ("not existed attacks", () => {
    const character = {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 3,
      attack: 40,
      defence: 10
    };
    expect(getAttacks(character)).toEqual([]);
  });
  test ("null character", () => {
    expect(getAttacks(null)).toEqual([]);
  });
});