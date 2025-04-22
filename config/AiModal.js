import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.EXPO_GEMINI_KEY });

const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    responseMimeType: 'application/json',
  };

  const model = 'gemini-2.0-flash';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for location: Kuala Lumpur, Malaysia, for 6 Days and 5 Night for A Couple with a Moderate budget with a Flight details, Flight Price with Booking url, Hotels option list with Hotel Name, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image URL, Geo Coordinates, ticket pricing, Time t travel each of the location for 6 days and 5 night with each day plan with best time to visit in JSON format`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `
\`\`\`json
{
  "tripName": "Kuala Lumpur Getaway: 6 Days, 5 Nights (Couple)",
  "travelers": "Couple",
  "budget": "Moderate",
  "location": "Kuala Lumpur, Malaysia",
  "duration": "6 Days, 5 Nights",
  "flights": {
    "departureCity": "Your Departure City",
    "arrivalCity": "Kuala Lumpur (KUL)",
    "dates": "Enter your desired travel dates",
    "estimatedPrice": {
      "min": 600,
      "max": 1200,
      "currency": "USD",
      "notes": "Price varies greatly based on departure city, airline, and booking time. Book in advance for better deals."
    },
    "exampleFlight": {
      "airline": "Malaysia Airlines",
      "flightNumber": "MH123 (Example)",
      "price": 800,
      "currency": "USD",
      "bookingURL": "https://www.google.com/flights"
    }
  },
  "hotels": [
    {
      "hotelName": "Traders Hotel Kuala Lumpur",
      "hotelAddress": "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "pricePerNight": {
        "min": 150,
        "max": 250,
        "currency": "USD"
      },
      "hotelImageURL": "https://example.com/traders_hotel_kl.jpg",
      "geoCoordinates": {
        "latitude": 3.1549,
        "longitude": 101.7041
      },
      "rating": 4.5,
      "description": "Luxury hotel with stunning Petronas Twin Towers views. Excellent amenities including a rooftop pool and bar.",
      "nearbyPlaces": [
        "Petronas Twin Towers",
        "KLCC Park",
        "Suria KLCC Shopping Mall"
      ]
    },
    {
      "hotelName": "The Face Suites",
      "hotelAddress": "1020, Jalan Sultan Ismail, Bukit Bintang, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "pricePerNight": {
        "min": 80,
        "max": 150,
        "currency": "USD"
      },
      "hotelImageURL": "https://example.com/face_suites_kl.jpg",
      "geoCoordinates": {
        "latitude": 3.1595,
        "longitude": 101.7028
      },
      "rating": 4.2,
      "description": "Modern suites with infinity pool and great city views. Good value for money.",
      "nearbyPlaces": [
        "Petronas Twin Towers",
        "KL Tower",
        "Pavilion KL"
      ]
    },
    {
      "hotelName": "Hotel Stripes Kuala Lumpur, Autograph Collection",
      "hotelAddress": "25, Jalan Kamunting, Chow Kit, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "pricePerNight": {
        "min": 70,
        "max": 140,
        "currency": "USD"
      },
      "hotelImageURL": "https://example.com/stripes_hotel_kl.jpg",
      "geoCoordinates": {
        "latitude": 3.1583,
        "longitude": 101.6981
      },
      "rating": 4.3,
      "description": "Stylish hotel in a vibrant neighborhood, with a rooftop pool and close to local markets.",
      "nearbyPlaces": [
        "Chow Kit Market",
        "LRT Station",
        "Merdeka Square"
      ]
    }
  ],
  "dailyPlan": [
    {
      "day": 1,
      "theme": "Arrival & City Center Exploration",
      "bestTimeToVisit": "Morning/Afternoon",
      "activities": [
        {
          "placeName": "Petronas Twin Towers",
          "placeDetails": "Iconic skyscrapers. Visit the Skybridge and Observation Deck for panoramic views.",
          "placeImageURL": "https://example.com/petronas_towers.jpg",
          "geoCoordinates": {
            "latitude": 3.1579,
            "longitude": 101.7117
          },
          "ticketPricing": {
            "adult": 85,
            "currency": "MYR"
          },
          "timeToTravel": "30 minutes from Airport",
          "duration": "3-4 hours"
        },
        {
          "placeName": "KLCC Park",
          "placeDetails": "Beautiful park at the base of the Petronas Towers. Great for a stroll or relaxing.",
          "placeImageURL": "https://example.com/klcc_park.jpg",
          "geoCoordinates": {
            "latitude": 3.1547,
            "longitude": 101.7121
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "5 minutes from Petronas Twin Towers",
          "duration": "1-2 hours"
        },
        {
          "placeName": "Suria KLCC",
          "placeDetails": "Shopping mall beneath the Petronas Twin Towers",
          "placeImageURL": "https://example.com/suria_klcc.jpg",
          "geoCoordinates": {
            "latitude": 3.1573,
            "longitude": 101.7123
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "5 minutes from KLCC Park",
          "duration": "2-3 hours"
        }
      ],
      "notes": "Arrive at KLIA/KLIA2, check into your hotel, and head to the city center. Book Petronas Towers tickets in advance online."
    },
    {
      "day": 2,
      "theme": "Cultural Immersion",
      "bestTimeToVisit": "Morning/Afternoon",
      "activities": [
        {
          "placeName": "Batu Caves",
          "placeDetails": "Hindu shrine with colorful stairs and cave temples.",
          "placeImageURL": "https://example.com/batu_caves.jpg",
          "geoCoordinates": {
            "latitude": 3.2368,
            "longitude": 101.6846
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR",
            "notes": "Free entry to the main caves. There is a fee for Dark Cave tour."
          },
          "timeToTravel": "30-45 minutes from KL City Center by train",
          "duration": "3-4 hours"
        },
        {
          "placeName": "Thean Hou Temple",
          "placeDetails": "Beautiful Chinese temple with intricate architecture and panoramic views.",
          "placeImageURL": "https://example.com/thean_hou_temple.jpg",
          "geoCoordinates": {
            "latitude": 3.1341,
            "longitude": 101.6716
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "20-30 minutes from Batu Caves by taxi",
          "duration": "2-3 hours"
        },
        {
          "placeName": "Little India (Brickfields)",
          "placeDetails": "Vibrant neighborhood with Indian restaurants, shops, and temples.",
          "placeImageURL": "https://example.com/little_india.jpg",
          "geoCoordinates": {
            "latitude": 3.1358,
            "longitude": 101.6868
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "10-15 minutes from Thean Hou Temple by taxi",
          "duration": "2-3 hours"
        }
      ],
      "notes": "Dress respectfully when visiting religious sites (shoulders and knees covered)."
    },
    {
      "day": 3,
      "theme": "Historical KL & Street Food",
      "bestTimeToVisit": "Morning/Afternoon/Evening",
      "activities": [
        {
          "placeName": "Merdeka Square",
          "placeDetails": "Historical square where Malaysia declared independence.",
          "placeImageURL": "https://example.com/merdeka_square.jpg",
          "geoCoordinates": {
            "latitude": 3.1496,
            "longitude": 101.6942
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "20 mins from Little India by train",
          "duration": "1-2 hours"
        },
        {
          "placeName": "Sultan Abdul Samad Building",
          "placeDetails": "Impressive colonial-era building next to Merdeka Square.",
          "placeImageURL": "https://example.com/sultan_abdul_samad.jpg",
          "geoCoordinates": {
            "latitude": 3.1476,
            "longitude": 101.6946
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "5 mins from Merdeka Square",
          "duration": "1 hour"
        },
        {
          "placeName": "Central Market (Pasar Seni)",
          "placeDetails": "Arts and crafts market housed in a historical building.",
          "placeImageURL": "https://example.com/central_market.jpg",
          "geoCoordinates": {
            "latitude": 3.1450,
            "longitude": 101.6961
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "5 mins from Sultan Abdul Samad Building",
          "duration": "2-3 hours"
        },
        {
          "placeName": "Jalan Alor",
          "placeDetails": "Famous street food haven. Enjoy a variety of local dishes.",
          "placeImageURL": "https://example.com/jalan_alor.jpg",
          "geoCoordinates": {
            "latitude": 3.1460,
            "longitude": 101.7106
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR",
            "notes": "Pay as you eat."
          },
          "timeToTravel": "15 mins from Central Market",
          "duration": "2-3 hours"
        }
      ],
      "notes": "Try local delicacies like Char Kway Teow, Hokkien Mee, and satay at Jalan Alor."
    },
    {
      "day": 4,
      "theme": "Day Trip to Genting Highlands",
      "bestTimeToVisit": "All Day",
      "activities": [
        {
          "placeName": "Genting Highlands",
          "placeDetails": "Resort on a mountain with theme parks, casinos, and shopping.",
          "placeImageURL": "https://example.com/genting_highlands.jpg",
          "geoCoordinates": {
            "latitude": 3.4200,
            "longitude": 101.7938
          },
          "ticketPricing": {
            "adult": "Varies depending on activities. Check Genting Highlands website.",
            "currency": "MYR"
          },
          "timeToTravel": "1-2 hours from KL by bus/car",
          "duration": "Full Day"
        },
        {
          "placeName": "Awana SkyWay",
          "placeDetails": "Scenic cable car ride up to Genting Highlands.",
          "placeImageURL": "https://example.com/awana_skyway.jpg",
          "geoCoordinates": {
            "latitude": 3.4200,
            "longitude": 101.7938
          },
          "ticketPricing": {
            "adult": 10,
            "currency": "MYR"
          },
          "timeToTravel": "At Genting Highlands",
          "duration": "1-2 hours"
        }
      ],
      "notes": "Take the bus from KL Sentral to Genting Highlands. Check weather conditions as it can be cooler up in the mountains."
    },
    {
      "day": 5,
      "theme": "Shopping & Relaxation",
      "bestTimeToVisit": "Afternoon/Evening",
      "activities": [
        {
          "placeName": "Bukit Bintang",
          "placeDetails": "Shopping district with various malls and street markets.",
          "placeImageURL": "https://example.com/bukit_bintang.jpg",
          "geoCoordinates": {
            "latitude": 3.1495,
            "longitude": 101.7121
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR",
            "notes": "Pay as you shop"
          },
          "timeToTravel": "20 mins from KL city center",
          "duration": "3-4 hours"
        },
        {
          "placeName": "Pavilion KL",
          "placeDetails": "Upscale shopping mall in Bukit Bintang.",
          "placeImageURL": "https://example.com/pavilion_kl.jpg",
          "geoCoordinates": {
            "latitude": 3.1493,
            "longitude": 101.7144
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR"
          },
          "timeToTravel": "5 mins from Bukit Bintang",
          "duration": "2-3 hours"
        },
        {
          "placeName": "Spa Treatment",
          "placeDetails": "Relax with a traditional Malay massage or spa treatment.",
          "placeImageURL": "https://example.com/kl_spa.jpg",
          "geoCoordinates": {
            "latitude": "Varies depending on Spa location",
            "longitude": "Varies depending on Spa location"
          },
          "ticketPricing": {
            "adult": "Varies depending on Spa Package",
            "currency": "MYR"
          },
          "timeToTravel": "Depends on Spa Location",
          "duration": "2-3 hours"
        }
      ],
      "notes": "Enjoy the vibrant atmosphere of Bukit Bintang and treat yourselves to a relaxing spa experience."
    },
    {
      "day": 6,
      "theme": "Departure",
      "bestTimeToVisit": "Morning",
      "activities": [
        {
          "placeName": "Last Minute Souvenir Shopping",
          "placeDetails": "Visit Central Market or a local shop for last-minute souvenirs.",
          "placeImageURL": "https://example.com/souvenir_shop.jpg",
          "geoCoordinates": {
            "latitude": "Varies depending on shop location",
            "longitude": "Varies depending on shop location"
          },
          "ticketPricing": {
            "adult": 0,
            "currency": "MYR",
            "notes": "Pay as you shop"
          },
          "timeToTravel": "Depends on shop location",
          "duration": "1-2 hours"
        }
      ],
      "notes": "Enjoy a final Malaysian breakfast, check out from your hotel, and head to KLIA/KLIA2 for your departure flight."
    }
  ],
  "budgetSummary": {
    "flights": {
      "min": 600,
      "max": 1200,
      "currency": "USD"
    },
    "hotel": {
      "perNight": {
        "min": 80,
        "max": 250,
        "currency": "USD"
      },
      "total": {
        "min": 400,
        "max": 1250,
        "currency": "USD",
        "nights": 5
      }
    },
    "activitiesAndFood": {
      "perDay": {
        "min": 50,
        "max": 100,
        "currency": "USD"
      },
      "total": {
        "min": 300,
        "max": 600,
        "currency": "USD",
        "days": 6
      }
    },
    "transportation": {
      "total": {
        "min": 50,
        "max": 150,
        "currency": "USD",
        "notes": "Based on using public transport and some taxis."
      }
    },
    "estimatedTotal": {
      "min": 1350,
      "max": 3200,
      "currency": "USD",
      "notes": "This is a rough estimate. Actual costs may vary."
    }
  },
  "importantNotes": [
    "Purchase a Touch 'n Go card for easy access to public transportation.",
    "Download ride-hailing apps like Grab for convenient taxi services.",
    "Be aware of scams and petty theft, especially in crowded areas.",
    "Stay hydrated and use sunscreen, as Kuala Lumpur can be hot and humid.",
    "Learn a few basic Malay phrases.",
    "Bargain respectfully when shopping at markets."
  ]
}
\`\`\`

`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
export async function generateAiSession(contents) {
 const chatSession = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: contents,
    // contents: "Explain how AI works in a few words",
  });
  return chatSession;
//   console.log(chatSession.text);
}

// main();

