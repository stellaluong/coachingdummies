const model = {
    screen: {
        current: "loginScreen",
    },
    modules: [
        'Module 1',
        'Module 2',
        'Module 3',
    ],
    registeredUsers: [{   
            id: 0,
            showCustomer: false,
            firstname: ['Andreas'],
            lastname: ['Rigoll'],
            username: ['admin'],
            password: ['admin'],
            company: ['Celsa Nordic'],
            email: ['Andreas.rigoll@celsanordic.com'],
            contactno: ['0046 732529604'],
            answerLog: { 
                week1: [
                { rating: '', commentText: '' },
                { rating: '', commentText: '' },
            ],  
                week2: [
                { rating: '', commentText: '' }, ]
            },
            conversationLog: [
                {
                    date: '13.01.2020',
                    text: `potetene smakte godt med krem og mel`,
                },
                {
                    date: '08.02.2020',
                    text: `hei`,
                }
            ],
            module: "Module 1" 
        },
        {
            id: 1,
            showCustomer: false,
            firstname: ['Blue'],
            lastname: ['berry'],
            username: ['user'],
            password: ['user'],
            company: ['Blåbær'],
            email: ['Jordbærland@blåblærlia.com'],
            contactno: ['0046 732529604'],
            answerLog: { 
                week1: [
                { rating: 5, commentText: 'Good!' },
                { rating: 5, commentText: 'asdasd' },
            ],  
                week2: [
                { rating: 3, commentText: 'fsfd' }, ]
            },
            conversationLog: [
                {
                    date: '13.01.2020',
                    text: `jeg spiste jordbær`,
                },
                {
                    date: '08.02.2020',
                    text: `jeg spiste blåbær`,
                }
            ],
            module: "Module 2" 
        },
        {
            id: 3,
            showCustomer: false,
            firstname: ['Strawyberry'],
            lastname: ['Juice'],
            username: ['straw'],
            password: ['berry'],
            company: ['FruitLand'],
            email: ['Jordbærland@blåblærlia.com'],
            contactno: ['0046 732529604'],
            answerLog: { 
                week1: [
                { rating: 5, commentText: 'Good!' },
                { rating: 5, commentText: 'asdasd' },
            ],  
                week2: [
                { rating: 3, commentText: 'fsfd' }, ]
            },
            conversationLog: [
                {
                    date: '13.01.2020',
                    text: `jeg spiste jordbær, meg selv`,
                },
                {
                    date: '08.02.2020',
                    text: `jeg spiste blåbær`,
                }
            ],
            module: "Module 3" 
        },
      
    ],
    session: {
        user: null,
        loginError: null,
        // screen: 'main'
        currentUserID: null,
        isAdmin: 'none',

    },
    newDocument: {
        newQuestion: [''],
    },
    question: {
        count: 0,
        moodRating: 0,
        commentText: 0,
        ratingOptions: ['', 'angry', 'frown', 'meh', 'smile', 'laugh'],
        questions: ['How Was Your Mood today?', 'How was your Meal?', 'Did you like these questions?', 'Feel empty?', 'Do you like milk?', ],
        answers: [],
        comment: [''],
    },
    
};
