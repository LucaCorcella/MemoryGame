export default () => {

    let cards = [
        {
            id : 0,
            rel : 1,
            flipped : false,
            url : `https://qph.fs.quoracdn.net/main-qimg-3879c19f1047fbbe32fa0f8c835a1b3b-c`,
            name:'massive attack cover',
            discovered : false
        },
        {
            id : 1,
            rel : 0,
            flipped : false,
            url : `https://qph.fs.quoracdn.net/main-qimg-3879c19f1047fbbe32fa0f8c835a1b3b-c`,
            name:'massive attack cover',
            discovered : false
        },
        {
            id : 2,
            rel : 3,
            flipped : false,
            url : `http://canzonietraduzioni.altervista.org/wp-content/uploads/2017/03/discobase-depeche-mode-cover.jpg`,
            name:'depeche mode cover',
            discovered : false
        },
        {
            id : 3,
            rel : 2,
            flipped : false,
            url : `http://canzonietraduzioni.altervista.org/wp-content/uploads/2017/03/discobase-depeche-mode-cover.jpg`,
            name:'depeche mode cover',
            discovered : false
        },
        {
            id : 4,
            rel : 5,
            flipped : false,
            url : `https://upload.wikimedia.org/wikipedia/sco/9/95/With_the_Beatles_Australia.png`,
            name:'beatles cover',
            discovered : false
        },
        {
            id : 5,
            rel : 4,
            flipped : false,
            url : `https://upload.wikimedia.org/wikipedia/sco/9/95/With_the_Beatles_Australia.png`,
            name:'beatles cover',
            discovered : false
        },
        {
            id : 6,
            rel : 7,
            flipped : false,
            url : `https://i.ebayimg.com/images/g/oWoAAOSw65FXtCVO/s-l300.jpg`,
            name:'pink floyd cover',
            discovered : false
        },
        {
            id : 7,
            rel : 6,
            flipped : false,
            url : `https://i.ebayimg.com/images/g/oWoAAOSw65FXtCVO/s-l300.jpg`,
            name:'pink floyd cover',
            discovered : false
        },
        {
            id : 8,
            rel : 9,
            flipped : false,
            url : `https://static.stereogum.com/uploads/2014/08/Portishead-Dummy-640x640.jpg`,
            name:'Portishead cover',
            discovered : false
        },
        {
            id : 9,
            rel : 8,
            flipped : false,
            url : `https://static.stereogum.com/uploads/2014/08/Portishead-Dummy-640x640.jpg`,
            name:'Portishead cover',
            discovered : false
        },
        {
            id : 10,
            rel : 11,
            flipped : false,
            url : `https://www.dustygroove.com/images/products/b/brown_james_getontheg_101b.jpg`,
            name:'james brown_ cover',
            discovered : false
        },
        {
            id : 11,
            rel : 10,
            flipped : false,
            url : `https://www.dustygroove.com/images/products/b/brown_james_getontheg_101b.jpg`,
            name:'james brown_ cover',
            discovered : false
        }
    ];
    return shuffle(cards);
}

// return random array Object
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}