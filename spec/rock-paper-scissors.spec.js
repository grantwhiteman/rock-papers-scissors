const play = require('../src/play.js')
describe('rock-paper-scissors', () => {
    it('shows draw rock v rock', () => {
        global.Math.random = () => 0
        expect(play('rock')).toEqual('You threw rock, computer threw rock. Draw!')
    })
    it('shows player win rock v scissors', () => {
        global.Math.random = () => 0.9
        expect(play('rock')).toEqual('You threw rock, computer threw scissors. You win!')
    })
    it('shows computer win rock v scissors', () => {
        global.Math.random = () => 0.6
        expect(play('rock')).toEqual('You threw rock, computer threw paper. Computer wins!')
    })
})