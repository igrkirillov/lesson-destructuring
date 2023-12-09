export default function getAttacks(character) {
  const attacks = character && character["special"];
  const result = [];
  if (attacks) {
    for (const attack of attacks) {
      const {id, name, icon, description = "Описание недоступно"} = attack;
      result.push({id, name, icon, description});
    }
  }
  return result;
}