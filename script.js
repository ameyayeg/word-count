const count = document.getElementById('text')
const countWord = document.getElementById('countword')
const countChar = document.getElementById('countchar')
const longWord = document.getElementById('longword')

count.addEventListener('input', check)

function check() {
    const input  = count.value
    const newArray = input.split(' ')
    countWord.textContent = input.match(/\S+/g).length 

    const char = newArray.join('')
    countChar.innerText = char.length
    
    const longestWord = newArray.reduce(function(longest, currentWord) {
        if(currentWord.length > longest.length) {
            return currentWord.replaceAll(/\W/g, '')
        } else {
            return longest.replaceAll(/\W/g, '')
        }
    })
    longWord.textContent = longestWord

}