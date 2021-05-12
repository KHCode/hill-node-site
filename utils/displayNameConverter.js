const displayNameConverter = (displayName) => {
    const regex = /[-_]/g;
    const nameList = displayName.split(regex);
    const capNameList = nameList.map( el => {
        return  el.charAt(0).toUpperCase() + el.slice(1); //capitalize first letter of el // concat the letter back onto the front of the word // return the word
    })
    let capName = capNameList.join(' ');//put the words in capNameList into a string
    switch(capName) {
        case 'Hill Node Site':
            capName = 'Portfolio Site';
            break;
        case 'Dog App':
            capName = 'DogPix';
            break;
        case 'Hillkri Project':
            capName = 'Fantasy Cabinet API';
            break;
        case 'Comics Js':
            capName = 'ComicsJS';
            break;
    }
    return capName;// return string
}

module.exports.displayNameConverter = displayNameConverter;