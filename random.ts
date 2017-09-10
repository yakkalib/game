export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function getBinomial(n: number): boolean {
  return !!n && Math.random() <= n
}

export function gaussianRandom(start:number , end: number) {
  return Math.floor(start + gaussianRand() * (end - start + 1))
}

export function gaussianRand() {
  let rand = 0

  for (let i = 0; i < 6; i += 1) {
    rand += Math.random()
  }

  return rand / 6
}
