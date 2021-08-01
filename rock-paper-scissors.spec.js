const play = require('../src/play.js')
describe('rock-paper-scissors', () => {
    it('displays winner', () => {
        global.Math.random = () => 0
        expect(play('rock')).toEqual('You threw rock, computer threw rock. Draw!')
    })
})