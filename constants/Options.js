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

export const AI_PROMPT = 'Generate Travel Plan for location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budgett.Return me results with parameter as Flight details as parent, and child as fligtPrice with Booking url, Hotels option list with Hotel Name, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with parameter as itinerary as parent, and child as placeName, placeDetails, real website placeImageURL (not example.com), geoCoordinates, ticketpricing, timeToTravel each of the location for {totalDays} days and {totalNight} night for each day plan with best time to visit in. return me a result with JSON format: [{flighDetails,hotelOptions,itinerary}]'