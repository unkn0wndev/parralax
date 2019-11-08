const verwerkScrollEvent = () => {
    let scrollWaarde = this.pageYOffset;
    console.log(scrollWaarde);
    pasDeel2Aan(scrollWaarde);
    pasDeel4Aan(scrollWaarde);
    pasDeel6Aan(scrollWaarde);
};

window.addEventListener("scroll", verwerkScrollEvent);

const pasDeel2Aan = (getal) => {
    document.getElementsByClassName('deel--2')[0].style.backgroundPositionY = - getal/4 + 'px';

    if(getal>500){
        let tussenruimte = getal-500;
        document.getElementsByClassName('deel__span--links')[0].style.marginLeft = -tussenruimte/2 + 'px';
        document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = tussenruimte*2 + 'px';
    }

    if(getal>1600){
        let tussenruimte = getal-1600;
        document.getElementsByClassName('deel__span--rechts2')[0].style.marginLeft = tussenruimte/2 + 'px';
    }

    if(getal>2900){
        let tussenruimte = getal-2900;


    }
};

const pasDeel4Aan = (getal) => {
    document.getElementsByClassName('deel--4')[0].style.backgroundPositionY = - getal/4 + 'px';
};

const pasDeel6Aan = (getal) => {
    document.getElementsByClassName('deel--6')[0].style.backgroundPositionY = - getal/4 + 'px';
};