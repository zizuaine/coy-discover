export interface Profile {
    id: string;
    name: string;
    age: number;
    photoUrl: string;
    bio: string;
    location: string;
    interests: string[];
}

export const CURRENT_USER_ID = 'user_0';

export const SEED_PROFILES: Profile[] = [
    { id: 'user_1', name: 'Aanya', age: 21, photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600', bio: 'Design student who judges cafes by their cold brew.', location: 'IIT Delhi', interests: ['Typography', 'Cold Brew', 'Indie Films'] },
    { id: 'user_2', name: 'Rhea', age: 22, photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600', bio: 'Weekend runner, weekday debugger. Always down for momos.', location: 'Bengaluru', interests: ['Running', 'Specialty Coffee', 'Board Games'] },
    { id: 'user_3', name: 'Kabir', age: 23, photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600', bio: 'Building side projects at 2 AM and sleeping through 9 AM lectures.', location: 'BITS Pilani', interests: ['Hackathons', 'Football', 'Sci-Fi'] },
    { id: 'user_4', name: 'Meera', age: 20, photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', bio: 'Amateur ceramicist and full-time overthinker.', location: 'Mumbai', interests: ['Pottery', 'Jazz', 'Thrifting'] },
    { id: 'user_5', name: 'Tara', age: 22, photoUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600', bio: 'Looking for someone to split oversized desserts with.', location: 'Ashoka University', interests: ['Baking', 'Photography', 'Books'] },
    { id: 'user_6', name: 'Arjun', age: 24, photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600', bio: 'Product designer by day, mediocre guitarist by night.', location: 'Bengaluru', interests: ['Guitar', 'UI/UX', 'Bouldering'] },
    { id: 'user_7', name: 'Diya', age: 21, photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600', bio: 'Will rate your playlist within 30 seconds of meeting.', location: 'DU North Campus', interests: ['Concerts', 'Vinyl', 'Street Food'] },
    { id: 'user_8', name: 'Zoya', age: 23, photoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600', bio: 'Half golden retriever, half exhausted grad student.', location: 'Pune', interests: ['Dogs', 'Hiking', 'Documentaries'] },
    { id: 'user_9', name: 'Rohan', age: 22, photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', bio: 'Trying to visit every independent bookstore in the city.', location: 'Kolkata', interests: ['Literature', 'Chess', 'Tea'] },
    { id: 'user_10', name: 'Naina', age: 21, photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600', bio: 'If you know good ramen spots, swipe right immediately.', location: 'Hyderabad', interests: ['Ramen', 'Anime', 'Sketching'] },
    { id: 'user_11', name: 'Ananya', age: 22, photoUrl: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600', bio: 'Sucker for sunset walks and terrible puns.', location: 'Manipal', interests: ['Beaches', 'Badminton', 'Comedy'] },
    { id: 'user_12', name: 'Dev', age: 23, photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600', bio: 'F1 Sundays are non-negotiable.', location: 'Chennai', interests: ['Formula 1', 'Cooking', 'Cycling'] },
    { id: 'user_13', name: 'Sana', age: 20, photoUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=600', bio: 'Collecting boarding passes and blurry film photos.', location: 'Christ University', interests: ['Film Photography', 'Travel', 'Museums'] },
    { id: 'user_14', name: 'Ishaan', age: 24, photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600', bio: 'Can cook a solid pasta from scratch. That is my entire pitch.', location: 'New Delhi', interests: ['Italian Food', 'Tennis', 'Podcasts'] },
    { id: 'user_15', name: 'Kiara', age: 21, photoUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600', bio: 'Plant mom to 14 succulents and counting.', location: 'Jaipur', interests: ['Gardening', 'Yoga', 'Watercolor'] },
    { id: 'user_16', name: 'Aarav', age: 22, photoUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600', bio: 'Always down for spontaneous late-night drives.', location: 'Chandigarh', interests: ['Road Trips', 'Cricket', 'Hip-Hop'] },
    { id: 'user_17', name: 'Kavya', age: 23, photoUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=600', bio: 'Over-caffeinated and under-slept.', location: 'IIT Bombay', interests: ['Robotics', 'Espresso', 'Table Tennis'] },
    { id: 'user_18', name: 'Nikhil', age: 25, photoUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600', bio: 'Looking for a gym partner who will not let me skip leg day.', location: 'Gurugram', interests: ['Strength Training', 'Nutrition', 'Marvel'] },
    { id: 'user_19', name: 'Myra', age: 21, photoUrl: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600', bio: 'Chronically online, trying to touch more grass.', location: 'SRM Chennai', interests: ['Memes', 'Badminton', 'K-Dramas'] },
    { id: 'user_20', name: 'Siddharth', age: 23, photoUrl: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600', bio: 'Trivia nerd. Ask me anything about 90s cinema.', location: 'Bengaluru', interests: ['Movies', 'Pub Quizzes', 'Craft Beer'] },
    { id: 'user_21', name: 'Alisha', age: 22, photoUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600', bio: 'Dancer, foodie, and professional procrastinator.', location: 'Mumbai', interests: ['Contemporary Dance', 'Sushi', 'Fashion'] },
    { id: 'user_22', name: 'Vihaan', age: 21, photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600', bio: 'Building things with code and breaking things in the kitchen.', location: 'IIIT Hyderabad', interests: ['Open Source', 'Chess', 'Badminton'] },
    { id: 'user_23', name: 'Ira', age: 20, photoUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600', bio: 'Poetry slams and rainy afternoons.', location: 'Kolkata', interests: ['Poetry', 'Theatre', 'Chai'] },
    { id: 'user_24', name: 'Karan', age: 24, photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600', bio: 'Dog dad. My golden retriever has veto power.', location: 'Noida', interests: ['Pets', 'Basketball', 'Sneakers'] },
    { id: 'user_25', name: 'Nandini', age: 22, photoUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600', bio: 'Let’s debate whether pineapple belongs on pizza.', location: 'Symbiosis Pune', interests: ['Debate', 'Pizza', 'True Crime'] },
    { id: 'user_26', name: 'Aditya', age: 23, photoUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600', bio: 'Weekend trekker looking for the next summit.', location: 'Guwahati', interests: ['Trekking', 'Camping', 'Photography'] },
    { id: 'user_27', name: 'Pari', age: 21, photoUrl: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=600', bio: 'Art gallery dates > fancy dinners.', location: 'New Delhi', interests: ['Modern Art', 'Matcha', 'Pilates'] },
    { id: 'user_28', name: 'Yash', age: 22, photoUrl: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=600', bio: 'Still haven’t finished the book I started in January.', location: 'VIT Vellore', interests: ['Gaming', 'Sci-Fi', 'Swimming'] },
    { id: 'user_29', name: 'Simran', age: 23, photoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600', bio: 'Spontaneous plans are always the best plans.', location: 'Amritsar', interests: ['Street Food', 'Bhangra', 'Travel'] },
    { id: 'user_30', name: 'Om', age: 24, photoUrl: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600', bio: 'Minimalist wardrobe, maximalist Spotify playlists.', location: 'Bengaluru', interests: ['Electronic Music', 'Running', 'Design'] },
    { id: 'user_31', name: 'Tanya', age: 21, photoUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600', bio: 'Teach me how to skateboard and I’ll buy the tacos.', location: 'Goa', interests: ['Surfing', 'Tacos', 'Sunsets'] },
    { id: 'user_32', name: 'Harsh', age: 22, photoUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600', bio: 'CS major who actually showers.', location: 'NIT Trichy', interests: ['Competitive Coding', 'Table Tennis', 'Stand-up Comedy'] },
];

//these users have already liked user_0
export const SEED_ADMIRER_IDS = [
    'user_1',
    'user_2',
    'user_4',
    'user_5',
    'user_7',
    'user_10',
    'user_13',
    'user_17',
    'user_21',
    'user_27',
];