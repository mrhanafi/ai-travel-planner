export const SelectTravelList = [
    {
            id:1,
        title: 'Just Me',
            desc:'A sole traveler in exploration',
        icon: '✈️',
            people:'1 People'
    },
    {
            id:2,
        title: 'A Couple',
            desc:'Two travelers in tandem',
        icon: '👩‍❤️‍👨',
            people:'2 Peoples'
    },
    {
            id:3,
        title: 'Family',
            desc:'A group of fun loving adventurers',
        icon: '👨‍👩‍👧‍👧',
            people:'3 to 5 Peoples'
    },
    {
            id:4,
        title: 'Friends',
            desc:'A bunch of thrill-seekers',
        icon: '🧳',
            people:'5 to 10 Peoples'
    },
]

export const SelectBudgetOptions = [
    {
         id:1,
        title: 'Cheap',
            desc:'Stay conscious of costs',
        icon: '💵',
    },
    {
         id:2,
        title: 'Moderate',
            desc:'Keep cost on the average',
        icon: '💰',
    },
    {
         id:3,
        title: 'Luxury',
            desc:'My superpower is rich',
        icon: '💳',
    },
]

export const AI_PROMPT = 'Generate Travel Plan for location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels option list with Hotel Name, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image URL, Geo Coordinates, ticket pricing, Time t travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in  and only give answer in JSON format'