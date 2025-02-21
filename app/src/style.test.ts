import { expect, test } from 'vitest'
import style from "./style.ts"

test("Style imports", () => {
  expect(style.lemon_lime_border).toBe(" border-lemon-lime-500 border-3 rounded-md")
})
