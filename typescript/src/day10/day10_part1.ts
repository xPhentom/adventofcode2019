export const calculateAmountOfVisibleAsteroids = (input: string): number => {
    let asteroids = input.split('').map(x => x === '#')

    return Math.max(...asteroids.map((asteroid: boolean, index: number) => {
        if (asteroid) {
            return checkHowManyAsteroidsICanSee(index, asteroids)
        }
        return 0
    }))
}
export const checkHowManyAsteroidsICanSee = (index: number, map: boolean[]): number => {
    let countAsteroids = 0

    if (map.slice(0, index).filter(x => x).length > 1) {
        countAsteroids++
    }
    if (map.slice(index, map.length).filter(x => x).length > 1) {
        countAsteroids++
    }
    return countAsteroids
}