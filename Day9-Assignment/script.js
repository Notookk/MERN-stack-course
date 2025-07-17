
const profileData = {
    profile1: {
        name: "Professor",
        about: "The brilliant strategist behind every plan, calculating every move with precision and genius.",
        image: "./assets/profile1.jpg"
    },
    profile2: {
        name: "Tokyo",
        about: "Fearless and impulsive, Tokyo is the heart of the heist team with unmatched courage and determination.",
        image: "./assets/profile2.jpg"
    },
    profile3: {
        name: "Denver",
        about: "The loyal son with a distinctive laugh, bringing both humor and fierce dedication to the team.",
        image: "./assets/profile3.jpg"
    },
    profile4: {
        name: "Berlin",
        about: "The elegant mastermind with sophisticated tactics and unwavering leadership in critical situations.",
        image: "./assets/profile4.jpg"
    }
};


const colorData = {
    color1: {
        gradient: "linear-gradient(135deg, #ff6b6b, #ff2288)",
        name: "Red Heist"
    },
    color2: {
        gradient: "linear-gradient(135deg, #4ecdc4, #387ef0)",
        name: "Ocean Blue"
    },
    color3: {
        gradient: "linear-gradient(135deg, #45b7d1, #ff2288)",
        name: "Sky Pink"
    },
    color4: {
        gradient: "linear-gradient(135deg, #96ceb4, #387ef0)",
        name: "Mint Blue"
    }
};


const defaultProfile = {
    name: "Money Heist",
    about: "A web series about a group of robbers who carry out heists.",
    image: null
};


const defaultColor = {
    gradient: "linear-gradient(135deg, #ff2288, #387ef0)",
    name: "Default"
};


const profileElements = document.querySelectorAll('.profile1, .profile2, .profile3, .profile4');
const colorElements = document.querySelectorAll('.color1, .color2, .color3, .color4');
const cardProfilePic = document.querySelector('.card .profile-pic');
const cardName = document.querySelector('.card .bottom .content .name');
const cardAbout = document.querySelector('.card .bottom .content .about-me');
const cardBottom = document.querySelector('.card .bottom');
const clearButton = document.querySelector('.card .bottom .bottom-bottom .button');


profileElements.forEach(profile => {
    profile.addEventListener('click', function() {

        profileElements.forEach(p => p.classList.remove('active'));

        this.classList.add('active');

        const profileClass = Array.from(this.classList).find(cls => cls.startsWith('profile'));

        const data = profileData[profileClass];
        
        if (data) {
            updateCard(data);
        }
    });
});


colorElements.forEach(color => {
    color.addEventListener('click', function() {

        colorElements.forEach(c => c.classList.remove('active'));

        this.classList.add('active');

        const colorClass = Array.from(this.classList).find(cls => cls.startsWith('color'));

        const data = colorData[colorClass];
        
        if (data) {

            updateCardColor(data);
        }
    });
});


clearButton.addEventListener('click', function() {
    profileElements.forEach(p => p.classList.remove('active'));
    colorElements.forEach(c => c.classList.remove('active'));
    

    updateCard(defaultProfile);
    updateCardColor(defaultColor);

    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});

function updateCard(data) {
    cardName.textContent = data.name;
    cardAbout.textContent = data.about;
    if (data.image) {
        const existingImg = cardProfilePic.querySelector('img');
        if (existingImg) {
            existingImg.remove();
        }
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.name;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        img.style.background = 'transparent';
        cardProfilePic.appendChild(img);
    } else {
        const existingImg = cardProfilePic.querySelector('img');
        if (existingImg) {
            existingImg.remove();
        }
    }
}   

function updateCardColor(data) {
    cardBottom.style.background = data.gradient;
}
profileElements.forEach(profile => {
    profile.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'scale(1.15)';
            this.style.boxShadow = '0 0 25px rgba(255, 34, 136, 0.8)';
            this.style.border = '3px solid #ff2288';
        }
    });
    
    profile.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.border = '3px solid transparent';
        }
    });
});

colorElements.forEach(color => {
    color.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'scale(1.3)';
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
            this.style.border = '2px solid white';
        }
    });
    
    color.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.border = '2px solid transparent';
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .choose-box .content .profile1.active,
    .choose-box .content .profile2.active,
    .choose-box .content .profile3.active,
    .choose-box .content .profile4.active {
        transform: scale(1.15);
        box-shadow: 0 0 30px rgba(255, 34, 136, 1);
        border: 3px solid #ffffff !important;
        animation: pulse 2s infinite;
    }
    
    .choose-box .content .color1.active,
    .choose-box .content .color2.active,
    .choose-box .content .color3.active,
    .choose-box .content .color4.active {
        transform: scale(1.3);
        box-shadow: 0 0 25px rgba(255, 255, 255, 1);
        border: 2px solid #ffffff !important;
        animation: colorPulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { box-shadow: 0 0 30px rgba(255, 34, 136, 1); }
        50% { box-shadow: 0 0 40px rgba(255, 34, 136, 0.8); }
        100% { box-shadow: 0 0 30px rgba(255, 34, 136, 1); }
    }
    
    @keyframes colorPulse {
        0% { box-shadow: 0 0 25px rgba(255, 255, 255, 1); }
        50% { box-shadow: 0 0 35px rgba(255, 255, 255, 0.8); }
        100% { box-shadow: 0 0 25px rgba(255, 255, 255, 1); }
    }
`;
document.head.appendChild(style);
updateCard(defaultProfile);
updateCardColor(defaultColor);
