const model = {
    screen: {
        current: "loginScreen",
    },
    
    registeredUsers: [
        {   id: 0,
            firstname: ['Andreas'],
            lastname: ['Rigoll'],
            username: ['123'],
            password: ['123'],
            company: ['Celsa Nordic'],
            birthday: ['11 april 1988'],
            email: ['Andreas.rigoll@celsanordic.com'],
            genders: ['male'],
            contactno: ['0046 732529604'],
        },
        {
            id: 1,
            firstname: ['test'],
            lastname: ['geir'],
            username: ['geirdronning'],
            password: [''],
            company: [''],
            email: [''],
            genders: "female" || "male",
            contactno: [''],
        },

      
    ],
    session: {
        user: null,
        loginError: null,
        // screen: 'main'
    },
    admin: {
        tasks: [
                { name: "a", description: ' ', isDone: true, dato: '2020-01-31' },
                { name: 'b', comment: "", description: ' ', isDone: true },
                { name: 'c', description: ' ', isDone: false },
                { name: 'd', description: ' ', isDone: false },
            ]
    },
    answers: {
        week1: [
            { rating: 5, comment: 'Good!' },
            { rating: 5, comment: '' },
        ],
        week2: [
            { rating: '', comment: '' },
        ]
    },
    question: {
        count: 0,
        moodRating: 0,
        commentText: 0,
        comment: [''],
        ratingOptions: ['', 'angry', 'frown', 'meh', 'smile', 'laugh'],
        questions: ['How Was Your Mood today?', 'How was your Meal?', 'Did you like these questions?', 'Feel empty?', 'Do you like milk?', ],
        answers: [],
    },
    
};