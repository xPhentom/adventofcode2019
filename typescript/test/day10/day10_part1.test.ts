import { calculateAmountOfVisibleAsteroids } from "../../src/day10/day10_part1"

fdescribe('Decide where we place the monitoring system', () => {
    it('Should detect .#', () => {
        expect(calculateAmountOfVisibleAsteroids('.#')).toBe(0)
    })
    it('Should detect ##', () => {
        expect(calculateAmountOfVisibleAsteroids('##')).toBe(1)
    })
    it('Should detect ..#', () => {
        expect(calculateAmountOfVisibleAsteroids('..#')).toBe(0)
    })
    it('Should detect ###', () => {
        expect(calculateAmountOfVisibleAsteroids('###')).toBe(2)
    })
    it('Should detect ####', () => {
        expect(calculateAmountOfVisibleAsteroids('####')).toBe(2)
    })
    it('Should detect #..#', () => {
        expect(calculateAmountOfVisibleAsteroids('#..#')).toBe(1)
    })
})