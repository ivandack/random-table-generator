import { DiceRoll } from "@dice-roller/rpg-dice-roller";

/**
 * Rolls a dice to choose a value between 1 and "options" with equal chances
 * for each value.
 * @param {number} options number of options to choose from.
 * @returns random value between 1 and "options".
 */
export function rollDice(options: number): number {
  const roll = new DiceRoll(`1d${options}`);
  return roll.total;
}
