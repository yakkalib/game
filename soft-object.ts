import { getRandomArbitrary, getBinomial, gaussianRand } from './random'

export class SoftObject {
  vit: number
  str: number
  def: number
  dex: number
  agi: number

  constructor(vit: number, str: number, def: number, dex: number, agi: number) {
    this.vit = vit
    this.str = str
    this.def = def
    this.dex = dex
    this.agi = agi
  }

  attack(target: SoftObject) {
    const precisionCoef = gaussianRand() * Math.min((this.dex / target.dex), 1)
    target.vit -= Math.max(Math.floor(precisionCoef * (this.str - target.def)), 0)
  }
 
}
