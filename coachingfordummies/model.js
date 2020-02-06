const mainModel = {
    answers: {
        week1: [
            { rating: 5, comment: 'Good!' },
            { rating: 5, comment: '' },
        ],
        week2: [
            { rating: '', comment: '' },
        ],
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
        admin: {
            tasks: [
                { name: "", description: '  ', isDone: true },
                { comment: "", description: '  ', isDone: true },
                { description: ' ', isDone: false },
                { description: ' ', isDone: false },
            ]
        }
    }
};