const model = {
    screen: {
        current: "loginScreen",
    },
    
    registeredUsers: [
        {   id: 0,
            firstname: ['test'],
            lastname: ['terje'],
            username: ['terjekongen'],
            password: [''],
            company: [''],
            email: [''],
            genders: "female" || "male",
            contactno: [''],
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
        //  Uses = [
        //     {
        //         modul: "modul1",
        //         modul1: "1",
        //         isDone: true,
        //         names: ["gunnar",
        //         ]
        //     },
        //     {
        //         modul: "modul2",
        //         modul2: "2",
        //         isDone: true,
        //         names: ["simon"]
        //     },
        //     {
        //         modul: "modul3",
        //         modul3: "3",
        //         isDone: true,
        //         names: ["fillip"]
        //     },
        // ]
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