const suitSigns = {
    spadesBig:`<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4946 22.7216C16.3283 24.7749 18.7912 26 20.9419 26C24.6159 26 28.841 23.9312 29.0247 17.7248C28.8538 11.601 22.1644 6.45377 15.7603 1.52608C15.2805 1.15693 14.8024 0.789017 14.3287 0.422017C14.3287 0.422038 14.3287 0.422057 14.3286 0.422078C14.3286 0.422059 14.3286 0.42204 14.3286 0.422021C14.0942 0.603615 13.8591 0.785433 13.6238 0.967515C7.03343 6.06558 0.177371 11.3692 6.49169e-06 17.7248C0.183705 23.9312 4.77619 26 8.45018 26C10.6009 26 12.8557 24.7749 14.4946 22.7216Z" fill="black"/>
    </svg>`,
    spadesLittle:`<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45195 0.00704593C3.56266 0.0907628 3.67437 0.174685 3.78644 0.25888C5.32512 1.41482 6.93233 2.62226 6.97339 4.05879C6.92925 5.5147 5.91412 6 5.03139 6C4.51469 6 3.923 5.71266 3.48245 5.23106C3.08867 5.71266 2.54697 6 2.03027 6C1.14754 6 0.0441366 5.5147 1.80544e-07 4.05879C0.0426148 2.56789 1.68988 1.32376 3.27329 0.127852C3.32665 0.0875546 3.37993 0.0473129 3.43307 0.00711793C3.4362 0.00469894 3.43933 0.002289 3.44249 -0.000111393C3.44251 -9.32734e-05 3.44253 -7.46767e-05 3.44256 -5.65569e-05C3.44258 -7.46767e-05 3.44261 -9.27965e-05 3.44263 -0.000110916C3.44575 0.00226564 3.44886 0.00465126 3.45195 0.00704593Z" fill="black"/>
    </svg>`,
    heartsBig:`<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 3.27849C12.6964 1.22519 10.2335 0.000124665 8.08277 0.000124664C4.40879 0.000124663 0.183699 2.06893 -8.96305e-08 8.27535C0.170897 14.3992 6.86026 19.5464 13.2644 24.474C13.7441 24.8432 14.2223 25.2111 14.696 25.5781C14.696 25.5781 14.696 25.5781 14.696 25.578C14.6961 25.5781 14.6961 25.5781 14.6961 25.5781C14.9305 25.3965 15.1655 25.2147 15.4009 25.0326C21.9912 19.9345 28.8473 14.6309 29.0247 8.27535C28.841 2.06893 24.2485 0.00012207 20.5745 0.00012207C18.4238 0.00012207 16.169 1.22519 14.53 3.27849Z" fill="#FF4545"/>
    </svg>`,
    heartsLittle:`<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52144 5.99283C3.41073 5.90911 3.29902 5.82519 3.18695 5.741C1.64827 4.58505 0.0410603 3.37762 -2.10256e-08 1.94109C0.0441363 0.485181 1.05927 -0.00012207 1.942 -0.00012207C2.4587 -0.00012207 3.05039 0.287214 3.49094 0.768815C3.88472 0.287214 4.42642 -0.00012207 4.94312 -0.00012207C5.82585 -0.00012207 6.92925 0.48518 6.97339 1.94109C6.93077 3.43199 5.28351 4.67612 3.7001 5.87203C3.64674 5.91232 3.59346 5.95256 3.54031 5.99276C3.53719 5.99518 3.53405 5.99759 3.5309 5.99999C3.53088 5.99997 3.53085 5.99995 3.53083 5.99993C3.53081 5.99995 3.53078 5.99997 3.53076 5.99999C3.52764 5.99761 3.52453 5.99523 3.52144 5.99283Z" fill="#FF4545"/>
    </svg>`,
    diamondsBig:`<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 0.000244141L21.2705 12.7817L11 25.4994L0.729503 12.7817L11 0.000244141Z" fill="#FF4545"/>
    </svg>`,
    diamondsLittle:`<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.37476 0L6.09331 3.3832L3.37476 6.74951L0.656203 3.3832L3.37476 0Z" fill="#FF4545"/>
    </svg>`,
    clubsBig:`<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3189 11.7767C14.4121 10.2172 16.118 6.88009 16.118 4.5052C16.118 1.85652 14.6708 0 12.5657 0C10.1976 0 8.88194 1.88928 8.88194 4.5052C8.88194 6.4076 10.5171 9.84721 11.6115 11.5821C10.0078 10.4322 6.59985 8.62089 4.77574 8.62089C2.336 8.62089 0.573975 10.0315 0.573975 12.5707C0.573975 14.8278 2.30545 16.3795 4.77574 16.3795C7.10192 16.3795 10.4924 14.3165 11.8711 13.1414L8.61407 24.9999C11.7182 23.8205 13.6891 23.7977 16.6541 24.9999L13.1494 13.1312C14.4342 14.2714 17.8464 16.3795 20.2243 16.3795C22.6946 16.3795 24.4261 14.8278 24.4261 12.5707C24.4261 10.0315 22.6641 8.62089 20.2243 8.62089C18.3302 8.62089 14.8022 10.619 13.3189 11.7767Z" fill="black"/>
    </svg>`,
    clubsLittle:`<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.05901 2.82608C3.32139 2.45163 3.73053 1.65105 3.73053 1.08126C3.73053 0.445569 3.3832 0 2.87799 0C2.30963 0 1.99387 0.453431 1.99387 1.08126C1.99387 1.53767 2.38603 2.36275 2.64869 2.77927C2.26365 2.50327 1.44609 2.06883 1.00843 2.06883C0.422891 2.06883 0 2.40738 0 3.01679C0 3.55849 0.415559 3.9309 1.00843 3.9309C1.56683 3.9309 2.38076 3.4356 2.71152 3.15358L1.92974 6.00001C2.67474 5.71695 3.14775 5.71148 3.85936 6.00001L3.01819 3.15137C3.32658 3.42502 4.14546 3.9309 4.71612 3.9309C5.309 3.9309 5.72456 3.55849 5.72456 3.01679C5.72456 2.40738 5.30167 2.06883 4.71612 2.06883C4.26162 2.06883 3.41511 2.54819 3.05901 2.82608Z" fill="black"/>
    </svg>`
}

const backOfACard = `
<div class="item">
    <img src="image/back-of-a-card.jpg" alt="рубашка">
</div>
`

export const cards = [
    {
        name: 'Туз пик',
        suit: 'Spades',
        rank: 'A',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    }, 
    {
        name: 'Король пик',
        suit: 'Spades',
        rank: 'K',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Дама пик',
        suit: 'Spades',
        rank: 'D',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Валет пик',
        suit: 'Spades',
        rank: 'J',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Десятка пик',
        suit: 'Spades',
        rank: '10',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Девятка пик',
        suit: 'Spades',
        rank: '9',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Восьмерка пик',
        suit: 'Spades',
        rank: '8',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Семерка пик',
        suit: 'Spades',
        rank: '7',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },
    {
        name: 'Шестерка пик',
        suit: 'Spades',
        rank: '6',
        isClicked: false,
        suitImgBig: suitSigns.spadesBig,
        suitImgLittle: suitSigns.spadesLittle,
        backImg: backOfACard,
    },

    {
        name: 'Туз червей',
        suit: 'Hearts',
        rank: 'A',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    }, 
    {
        name: 'Король червей',
        suit: 'Hearts',
        rank: 'K',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Дама червей',
        suit: 'Hearts',
        rank: 'D',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Валет червей',
        suit: 'Hearts',
        rank: 'J',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Десятка червей',
        suit: 'Hearts',
        rank: '10',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Девятка червей',
        suit: 'Hearts',
        rank: '9',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Восьмерка червей',
        suit: 'Hearts',
        rank: '8',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Семерка червей',
        suit: 'Hearts',
        rank: '7',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Шестерка червей',
        suit: 'Hearts',
        rank: '6',
        isClicked: false,
        suitImgBig: suitSigns.heartsBig,
        suitImgLittle: suitSigns.heartsLittle,
        backImg: backOfACard,
    },

    {
        name: 'Туз бубнов',
        suit: 'Diamonds',
        rank: 'A',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    }, 
    {
        name: 'Король бубнов',
        suit: 'Diamonds',
        rank: 'K',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Дама бубнов',
        suit: 'Diamonds',
        rank: 'D',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Валет бубнов',
        suit: 'Diamonds',
        rank: 'J',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Десятка бубнов',
        suit: 'Diamonds',
        rank: '10',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Девятка бубнов',
        suit: 'Diamonds',
        rank: '9',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Восьмерка бубнов',
        suit: 'Diamonds',
        rank: '8',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Семерка бубнов',
        suit: 'Diamonds',
        rank: '7',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Шестерка бубнов',
        suit: 'Diamonds',
        rank: '6',
        isClicked: false,
        suitImgBig: suitSigns.diamondsBig,
        suitImgLittle: suitSigns.diamondsLittle,
        backImg: backOfACard,
    },

    {
        name: 'Туз крестов',
        suit: 'Clubs',
        rank: 'A',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    }, 
    {
        name: 'Король крестов',
        suit: 'Clubs',
        rank: 'K',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Дама крестов',
        suit: 'Clubs',
        rank: 'D',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Валет крестов',
        suit: 'Clubs',
        rank: 'J',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Десятка крестов',
        suit: 'Clubs',
        rank: '10',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Девятка крестов',
        suit: 'Clubs',
        rank: '9',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Восьмерка крестов',
        suit: 'Clubs',
        rank: '8',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Семерка крестов',
        suit: 'Clubs',
        rank: '7',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },
    {
        name: 'Шестерка крестов',
        suit: 'Clubs',
        rank: '6',
        isClicked: false,
        suitImgBig: suitSigns.clubsBig,
        suitImgLittle: suitSigns.clubsLittle,
        backImg: backOfACard,
    },

]