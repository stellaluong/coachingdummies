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
            birthday: ['11 april 1988'],
            email: ['Andreas.rigoll@celsanordic.com'],
            genders: ['male'],
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
            birthday: ['13 april 1911'],
            email: ['Jordbærland@blåblærlia.com'],
            genders: ['female'],
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
            module: "Module 1" 
        },
      
    ],
    session: {
        user: null,
        loginError: null,
        // screen: 'main'
        currentUserID: null,
    },
    admin: {
        tasks: [
                { name: "a", description: ' ', isDone: true, dato: '2020-01-31' },
                { name: 'b', comment: "", description: ' ', isDone: true },
                { name: 'c', description: ' ', isDone: false },
                { name: 'd', description: ' ', isDone: false },
            ]

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
