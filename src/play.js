module.exports = function play(weapon) {    
    const weapons = ['rock', 'paper', 'scissors']
    const weaponNumber = weapons.indexOf(weapon)
    const randomNumber = Math.floor(Math.random() * 3)
    const difference = weaponNumber - randomNumber
    const computerWeapon = weapons[randomNumber]
    if (difference === 0) {
        return `You threw ${weapon}, computer threw ${computerWeapon}. Draw!` 
    } else if (difference === 1 || difference === -2) {
        return `You threw ${weapon}, computer threw ${computerWeapon}. You win!` 
    } else {
        return `You threw ${weapon}, computer threw ${computerWeapon}. Computer wins!` 
    }
}
