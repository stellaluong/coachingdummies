const model = {
    session: {
        user: null,
        loginError: null,
        // screen: 'main'
    },
    admin: {
        tasks: [
            { name: "a", description: '  ', isDone: true, dato: '2020-01-31' },
            { name: 'b', comment: "", description: '  ', isDone: true },
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
        questionStart: 0,
        questionNextNumber: 0,
        ratingMap: {
            ratingOptions: ['', 'angry', 'frown', 'meh', 'smile', 'laugh'],
            questions: ['How Was Your Mood today?', 'How was your Meal?', 'Did you like these questions?', 'Feel empty?', 'Do you like milk?', ],
            answers: [],
        },
    },
};