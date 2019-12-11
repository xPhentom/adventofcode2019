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
    let distance: number = 1
    // map[index - 1] && countAsteroids++
    while (map[index + distance] === false) {
        distance++
    }
    if (map[index + distance]) {
        countAsteroids++
    }

    distance = 1
    while (map[index - distance] === false) {
        distance++
    }
    if (map[index - distance]) {
        countAsteroids++
    }
    return countAsteroids
}