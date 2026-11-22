// Complete 160-question bank (1-50 Adult, 51-100 Everyday Classics, 101-125 Hypotheticals & Chaos, 126-150 Modern Life & Pet Peeves, 151-160 Christmas & Holidays)
const questionBank = [
  {
    "question": "Name a reason someone might secretly check their partner's phone.",
    "category": "Adult",
    "answers": [
      {"text": "Suspect cheating", "points": 45, "synonyms": ["cheating", "affair", "unfaithful", "infidelity", "sneaking around", "lying", "trust issues"]},
      {"text": "Curiosity/Snooping", "points": 20, "synonyms": ["curious", "snooping", "nosy", "bored", "just looking", "peeking"]},
      {"text": "Looking for a password", "points": 15, "synonyms": ["password", "login", "passcode", "wifi", "account info", "code"]},
      {"text": "Checking messages from an ex", "points": 10, "synonyms": ["ex", "old flame", "texts from ex", "dms", "messaging ex"]},
      {"text": "To find a surprise gift", "points": 5, "synonyms": ["gift", "present", "surprise", "birthday", "amazon orders", "shopping"]},
      {"text": "Checking bank/money apps", "points": 5, "synonyms": ["money", "bank", "finances", "spending", "venmo", "cashapp", "bills"]}
    ]
  },
  {
    "question": "Name something you might do if you wake up with a massive hangover.",
    "category": "Adult",
    "answers": [
      {"text": "Drink water/Gatorade", "points": 35, "synonyms": ["water", "hydrate", "gatorade", "electrolytes", "pedialyte", "liquid iv", "chug water"]},
      {"text": "Take pain meds", "points": 25, "synonyms": ["advil", "tylenol", "ibuprofen", "aspirin", "medicine", "pills", "painkillers"]},
      {"text": "Go back to sleep", "points": 20, "synonyms": ["sleep", "nap", "stay in bed", "pass out", "lay in bed", "rest"]},
      {"text": "Eat greasy food", "points": 10, "synonyms": ["eat", "fast food", "bacon", "burger", "breakfast", "mcdonalds", "pizza", "grease"]},
      {"text": "Call out sick", "points": 6, "synonyms": ["skip work", "call in sick", "cancel plans", "stay home", "miss work"]},
      {"text": "Swear off drinking", "points": 4, "synonyms": ["never drink again", "quit drinking", "stop drinking", "regret", "vow"]}
    ]
  },
  {
    "question": "Name a place you definitely don't want your boss to catch you.",
    "category": "Adult",
    "answers": [
      {"text": "At a bar/club", "points": 35, "synonyms": ["bar", "club", "pub", "nightclub", "drinking", "happy hour", "party"]},
      {"text": "In bed/Sleeping", "points": 25, "synonyms": ["bed", "sleeping", "napping", "asleep", "bedroom", "passed out"]},
      {"text": "Interviewing for another job", "points": 15, "synonyms": ["job interview", "interview", "competitor", "new job", "applying"]},
      {"text": "The bathroom", "points": 12, "synonyms": ["bathroom", "restroom", "toilet", "pooping", "stall", "hiding in bathroom"]},
      {"text": "A strip club", "points": 8, "synonyms": ["strip club", "gentlemens club", "adult club", "strippers"]},
      {"text": "Stealing office supplies", "points": 5, "synonyms": ["stealing", "supply closet", "taking supplies", "theft"]}
    ]
  },
  {
    "question": "Name something a person might fake.",
    "category": "Adult",
    "answers": [
      {"text": "An orgasm", "points": 40, "synonyms": ["orgasm", "climax", "finishing", "cumming", "pleasure", "sex"]},
      {"text": "Being sick", "points": 30, "synonyms": ["sick", "illness", "fever", "headache", "calling out", "flu", "cough"]},
      {"text": "A smile/Being happy", "points": 15, "synonyms": ["smile", "happiness", "laugh", "mood", "being okay", "joy"]},
      {"text": "Liking a gift", "points": 8, "synonyms": ["gift", "present", "liking food", "compliment", "excitement"]},
      {"text": "Listening/Interest", "points": 4, "synonyms": ["listening", "paying attention", "caring", "interest", "liking someone"]},
      {"text": "Confidence", "points": 3, "synonyms": ["confident", "bravery", "knowing what they're doing", "wealth", "rich"]}
    ]
  },
  {
    "question": "Name a reason you might pretend not to see someone you know in public.",
    "category": "Adult",
    "answers": [
      {"text": "You owe them money", "points": 35, "synonyms": ["owe money", "debt", "borrowed money", "unpaid", "cash"]},
      {"text": "They talk too much", "points": 25, "synonyms": ["annoying", "talkative", "chatty", "boring", "long conversation", "stuck talking"]},
      {"text": "You look like a mess", "points": 15, "synonyms": ["look bad", "pajamas", "no makeup", "sweatpants", "rough", "ugly", "messy"]},
      {"text": "They are an ex", "points": 12, "synonyms": ["ex", "ex girlfriend", "ex boyfriend", "old flame", "hookup", "awkward"]},
      {"text": "You're in a hurry", "points": 8, "synonyms": ["busy", "rushing", "late", "no time", "in a rush"]},
      {"text": "You just don't like them", "points": 5, "synonyms": ["hate them", "dislike", "beef", "drama", "enemy", "not friends"]}
    ]
  },
  {
    "question": "Name a place people often have sex that isn't a bed.",
    "category": "Adult",
    "answers": [
      {"text": "Couch/Sofa", "points": 35, "synonyms": ["couch", "sofa", "living room", "futon", "loveseat"]},
      {"text": "The shower/Tub", "points": 25, "synonyms": ["shower", "bathtub", "tub", "bathroom", "hot tub", "jacuzzi"]},
      {"text": "In a car", "points": 20, "synonyms": ["car", "backseat", "truck", "vehicle", "suv", "van"]},
      {"text": "On the floor", "points": 10, "synonyms": ["floor", "carpet", "rug", "ground"]},
      {"text": "Kitchen counter", "points": 7, "synonyms": ["kitchen", "counter", "table", "dining table", "island"]},
      {"text": "Hotel balcony", "points": 3, "synonyms": ["balcony", "outside", "patio", "beach", "woods", "pool"]}
    ]
  },
  {
    "question": "Name something you lie about on a first date to sound better.",
    "category": "Adult",
    "answers": [
      {"text": "Your income/Job", "points": 35, "synonyms": ["money", "salary", "job", "career", "income", "wealth", "how much you make"]},
      {"text": "Your age", "points": 25, "synonyms": ["age", "how old", "birthday", "older", "younger"]},
      {"text": "Your hobbies/Interests", "points": 15, "synonyms": ["hobbies", "interests", "working out", "gym", "reading", "travel", "music"]},
      {"text": "Body count/Past relationships", "points": 12, "synonyms": ["body count", "exes", "past", "partners", "dating history", "number of partners"]},
      {"text": "Living situation", "points": 8, "synonyms": ["where you live", "roommates", "living with parents", "house", "apartment"]},
      {"text": "Cooking skills", "points": 5, "synonyms": ["cooking", "chef", "food", "baking"]}
    ]
  },
  {
    "question": "Name an excuse people use to leave a bad date early.",
    "category": "Adult",
    "answers": [
      {"text": "Sick/Not feeling well", "points": 40, "synonyms": ["sick", "stomach ache", "nauseous", "ill", "not feeling good", "throwing up"]},
      {"text": "Fake emergency call", "points": 25, "synonyms": ["emergency", "family emergency", "fake call", "phone call", "urgent"]},
      {"text": "Early morning tomorrow", "points": 15, "synonyms": ["work early", "early morning", "wake up early", "busy tomorrow", "early flight"]},
      {"text": "Pet needs to be fed/walked", "points": 10, "synonyms": ["dog", "cat", "pet", "walk the dog", "feed my pet", "babysitter"]},
      {"text": "Friend needs help", "points": 6, "synonyms": ["friend", "roommate", "locked out", "ride", "help a friend"]},
      {"text": "Tired/Headache", "points": 4, "synonyms": ["tired", "sleepy", "exhausted", "headache", "migraine"]}
    ]
  },
  {
    "question": "Name a common regret after a wild night out.",
    "category": "Adult",
    "answers": [
      {"text": "Drinking too much/Hangover", "points": 40, "synonyms": ["drinking", "too much alcohol", "hangover", "shots", "getting wasted", "blacking out"]},
      {"text": "Spending too much money", "points": 25, "synonyms": ["money", "tab", "expensive", "broke", "bank account", "buying rounds"]},
      {"text": "Hooking up with someone", "points": 15, "synonyms": ["hookup", "one night stand", "sleeping with someone", "sex", "making out", "going home with someone"]},
      {"text": "Texting an ex", "points": 10, "synonyms": ["texting ex", "drunk texting", "calling ex", "drunk dial", "messaging"]},
      {"text": "Posting embarrassing photos", "points": 7, "synonyms": ["social media", "posting", "instagram", "snapchat", "stories", "photos", "videos"]},
      {"text": "Losing phone/wallet", "points": 3, "synonyms": ["lost phone", "lost wallet", "lost keys", "losing stuff", "missing purse"]}
    ]
  },
  {
    "question": "Name something people do when they think no one is watching.",
    "category": "Adult",
    "answers": [
      {"text": "Pick their nose", "points": 45, "synonyms": ["pick nose", "boogers", "digging for gold", "nose"]},
      {"text": "Scratch inappropriate places", "points": 25, "synonyms": ["scratch", "scratch butt", "scratch balls", "crotch", "itch", "private parts"]},
      {"text": "Adjust underwear", "points": 15, "synonyms": ["wedgie", "underwear", "bra", "adjust pants", "pull up pants", "fix clothes"]},
      {"text": "Talk to themselves", "points": 7, "synonyms": ["talk to self", "sing", "dance", "make faces", "practice"]},
      {"text": "Smell their armpits", "points": 5, "synonyms": ["smell pits", "sniff", "body odor", "smell hand", "check breath"]},
      {"text": "Fart", "points": 3, "synonyms": ["pass gas", "rip one", "burp", "toot", "gas"]}
    ]
  },
  {
    "question": "Name something you might buy at a convenience store at 2 AM.",
    "category": "Adult",
    "answers": [
      {"text": "Condoms", "points": 35, "synonyms": ["condoms", "protection", "trojans", "rubbers", "plan b", "lube"]},
      {"text": "Beer/Alcohol", "points": 25, "synonyms": ["beer", "alcohol", "booze", "liquor", "wine", "seltzer", "drinks"]},
      {"text": "Junk food/Snacks", "points": 20, "synonyms": ["snacks", "chips", "candy", "munchies", "food", "ice cream", "hot dog", "pizza"]},
      {"text": "Cigarettes/Vapes", "points": 10, "synonyms": ["cigarettes", "smokes", "vape", "lighter", "rolling papers", "blunts", "cigs"]},
      {"text": "Pain medicine", "points": 6, "synonyms": ["advil", "tylenol", "tums", "medicine", "pain reliever", "pepto"]},
      {"text": "Energy drinks", "points": 4, "synonyms": ["red bull", "monster", "coffee", "caffeine", "water", "gatorade", "soda"]}
    ]
  },
  {
    "question": "Name something that might get you kicked out of a bar.",
    "category": "Adult",
    "answers": [
      {"text": "Fighting", "points": 45, "synonyms": ["fight", "brawl", "punching", "arguing", "starting trouble", "violence"]},
      {"text": "Being too drunk", "points": 25, "synonyms": ["drunk", "wasted", "passed out", "sloppy", "falling over", "intoxicated"]},
      {"text": "Throwing up", "points": 15, "synonyms": ["puking", "vomiting", "barfing", "getting sick", "puke"]},
      {"text": "Disrespecting the bartender", "points": 8, "synonyms": ["rude", "yelling", "harassing", "groping", "annoying staff", "bouncer"]},
      {"text": "Not paying the tab", "points": 4, "synonyms": ["dine and dash", "no money", "declined card", "stealing", "skipping tab"]},
      {"text": "Underage/Fake ID", "points": 3, "synonyms": ["fake id", "underage", "no id", "drugs", "smoking inside"]}
    ]
  },
  {
    "question": "Name a sign that you're definitely getting older.",
    "category": "Adult",
    "answers": [
      {"text": "Body aches/Knee pain", "points": 35, "synonyms": ["back pain", "knee pain", "joint pain", "aches", "sore", "creaking", "groaning"]},
      {"text": "Going to bed early", "points": 25, "synonyms": ["bed early", "tired", "sleepy", "staying in", "naps", "9pm"]},
      {"text": "Gray hair", "points": 20, "synonyms": ["gray", "white hair", "balding", "hair loss", "wrinkles", "receding"]},
      {"text": "Hangovers last for days", "points": 10, "synonyms": ["hangovers", "two day hangover", "cant drink", "heartburn"]},
      {"text": "Excited about home appliances", "points": 6, "synonyms": ["vacuum", "appliances", "sponge", "furniture", "cleaning", "lawn"]},
      {"text": "Forgetting names", "points": 4, "synonyms": ["memory", "forgetful", "reading glasses", "squinting", "music too loud"]}
    ]
  },
  {
    "question": "Name a reason someone might wear sunglasses indoors.",
    "category": "Adult",
    "answers": [
      {"text": "Hungover", "points": 45, "synonyms": ["hangover", "drunk", "rough night", "migraine", "headache", "tired"]},
      {"text": "Black eye", "points": 25, "synonyms": ["bruise", "punch", "eye injury", "pink eye", "swollen eye", "crying"]},
      {"text": "They think they look cool", "points": 12, "synonyms": ["cool", "fashion", "celebrity", "douche", "style", "trying to be cool", "famous"]},
      {"text": "High/Red eyes", "points": 10, "synonyms": ["high", "stoned", "weed", "baked", "bloodshot", "drugs"]},
      {"text": "Eye doctor dilation", "points": 5, "synonyms": ["eye doctor", "dilated", "optometrist", "blind", "prescription", "light sensitive"]},
      {"text": "Hiding from someone", "points": 3, "synonyms": ["hiding", "incognito", "disguise", "avoiding someone", "undercover"]}
    ]
  },
  {
    "question": "Name a profession where people are known to sleep around.",
    "category": "Adult",
    "answers": [
      {"text": "Musician/Rockstar", "points": 35, "synonyms": ["musician", "rockstar", "singer", "rapper", "dj", "band"]},
      {"text": "Actor/Celebrity", "points": 25, "synonyms": ["actor", "actress", "celebrity", "movie star", "hollywood", "model"]},
      {"text": "Doctor/Nurse", "points": 15, "synonyms": ["doctor", "nurse", "medical", "hospital", "surgeon", "emt"]},
      {"text": "Bartender", "points": 12, "synonyms": ["bartender", "waiter", "server", "restaurant", "club promoter", "stripper"]},
      {"text": "Flight Attendant", "points": 8, "synonyms": ["flight attendant", "pilot", "stewardess", "airline", "aviation"]},
      {"text": "Athlete", "points": 5, "synonyms": ["athlete", "sports", "football", "basketball", "player", "coach", "trainer"]}
    ]
  },
  {
    "question": "Name something a man might leave at a woman's house to mark his territory.",
    "category": "Adult",
    "answers": [
      {"text": "Hoodie/Jacket", "points": 40, "synonyms": ["hoodie", "sweatshirt", "jacket", "shirt", "t-shirt", "clothes"]},
      {"text": "Toothbrush", "points": 30, "synonyms": ["toothbrush", "toiletries", "razor", "deodorant"]},
      {"text": "Boxers/Underwear", "points": 15, "synonyms": ["boxers", "underwear", "briefs", "socks", "shoes"]},
      {"text": "Cologne", "points": 7, "synonyms": ["cologne", "body spray", "scent", "perfume"]},
      {"text": "Watch", "points": 5, "synonyms": ["watch", "hat", "cap", "glasses", "jewelry", "wallet"]},
      {"text": "Phone charger", "points": 3, "synonyms": ["charger", "cord", "cable", "playstation", "xbox", "controller"]}
    ]
  },
  {
    "question": "Name a topic you should avoid bringing up at Thanksgiving dinner.",
    "category": "Adult",
    "answers": [
      {"text": "Politics", "points": 55, "synonyms": ["politics", "president", "election", "government", "voting", "trump", "biden"]},
      {"text": "Religion", "points": 20, "synonyms": ["religion", "church", "god", "faith", "atheism"]},
      {"text": "Money/Debt", "points": 10, "synonyms": ["money", "salary", "debt", "finances", "will", "inheritance", "loans"]},
      {"text": "Exes/Divorce", "points": 8, "synonyms": ["ex", "divorce", "dating", "marriage", "single", "babies", "kids"]},
      {"text": "Family drama", "points": 5, "synonyms": ["drama", "secrets", "gossip", "past fights", "arrests", "jail"]},
      {"text": "Weight/Diet", "points": 2, "synonyms": ["weight", "fat", "diet", "looks", "appearance", "sex"]}
    ]
  },
  {
    "question": "Name something you might whisper during a movie.",
    "category": "Adult",
    "answers": [
      {"text": "What did they say?", "points": 35, "synonyms": ["what did they say", "huh", "what happened", "didnt hear", "repeat that"]},
      {"text": "I have to pee", "points": 25, "synonyms": ["pee", "bathroom", "restroom", "hold my seat", "brb"]},
      {"text": "Who is that?", "points": 20, "synonyms": ["who is that", "actor", "where do i know them from", "is that"]},
      {"text": "Pass the popcorn", "points": 10, "synonyms": ["popcorn", "candy", "snacks", "drink", "soda", "food"]},
      {"text": "This movie sucks", "points": 6, "synonyms": ["boring", "bad movie", "sucks", "lets leave", "long"]},
      {"text": "I love you", "points": 4, "synonyms": ["love you", "kiss me", "sweet nothings", "dirty talk", "horny"]}
    ]
  },
  {
    "question": "Name something you do in the shower besides washing.",
    "category": "Adult",
    "answers": [
      {"text": "Sing", "points": 35, "synonyms": ["sing", "singing", "concert", "music", "dance"]},
      {"text": "Pee", "points": 30, "synonyms": ["pee", "urinate", "go to the bathroom", "piss"]},
      {"text": "Shave", "points": 15, "synonyms": ["shave", "shaving", "trim", "brush teeth"]},
      {"text": "Cry", "points": 8, "synonyms": ["cry", "crying", "sob", "break down"]},
      {"text": "Think/Argue in your head", "points": 7, "synonyms": ["think", "daydream", "argue", "zone out", "relax", "stand there"]},
      {"text": "Masturbate", "points": 5, "synonyms": ["masturbate", "touch yourself", "jerk off", "sex", "pleasure"]}
    ]
  },
  {
    "question": "Name a piece of clothing you take off as soon as you get home.",
    "category": "Adult",
    "answers": [
      {"text": "Shoes", "points": 40, "synonyms": ["shoes", "heels", "boots", "sneakers", "footwear"]},
      {"text": "Bra", "points": 35, "synonyms": ["bra", "brassiere", "underwire"]},
      {"text": "Pants/Jeans", "points": 15, "synonyms": ["pants", "jeans", "trousers", "slacks", "belt", "skirt"]},
      {"text": "Tie", "points": 5, "synonyms": ["tie", "necktie", "suit", "dress shirt", "work clothes"]},
      {"text": "Socks", "points": 3, "synonyms": ["socks", "stockings", "tights"]},
      {"text": "Jacket", "points": 2, "synonyms": ["jacket", "coat", "sweater", "hoodie"]}
    ]
  },
  {
    "question": "Name something people hide when guests come over.",
    "category": "Adult",
    "answers": [
      {"text": "Mess/Clutter", "points": 40, "synonyms": ["mess", "clutter", "junk", "trash", "dishes", "mail", "stuff"]},
      {"text": "Dirty laundry", "points": 25, "synonyms": ["laundry", "dirty clothes", "underwear", "hamper", "clothes"]},
      {"text": "Valuables/Money", "points": 15, "synonyms": ["money", "cash", "jewelry", "valuables", "wallet", "expensive"]},
      {"text": "Sex toys", "points": 10, "synonyms": ["sex toys", "vibrator", "dildo", "lube", "condoms", "adult items"]},
      {"text": "Medications", "points": 6, "synonyms": ["pills", "medicine", "prescriptions", "rx", "drugs"]},
      {"text": "Bongs/Weed", "points": 4, "synonyms": ["weed", "bong", "marijuana", "pot", "pipe", "paraphernalia", "alcohol"]}
    ]
  },
  {
    "question": "Name a reason someone might block you on social media.",
    "category": "Adult",
    "answers": [
      {"text": "Bad breakup/Ex", "points": 45, "synonyms": ["ex", "breakup", "broke up", "dumped", "heartbreak", "cheated"]},
      {"text": "Too annoying/Spamming", "points": 20, "synonyms": ["annoying", "spam", "posting too much", "mlm", "selling", "drama"]},
      {"text": "Creepy messages", "points": 15, "synonyms": ["creepy", "stalking", "harassing", "weird dms", "dick pic", "unsolicited"]},
      {"text": "Owe them money", "points": 10, "synonyms": ["money", "scam", "debt", "owe"]},
      {"text": "Political arguments", "points": 6, "synonyms": ["politics", "arguing", "trolling", "rude comments", "fight", "disagreement"]},
      {"text": "They got a new partner", "points": 4, "synonyms": ["new girlfriend", "new boyfriend", "jealous partner", "married", "dating"]}
    ]
  },
  {
    "question": "Name a bad habit you wouldn't want to admit on a first date.",
    "category": "Adult",
    "answers": [
      {"text": "Picking nose", "points": 30, "synonyms": ["pick nose", "boogers", "nose picking"]},
      {"text": "Biting nails", "points": 25, "synonyms": ["bite nails", "nail biting", "chewing nails", "picking skin"]},
      {"text": "Smoking", "points": 15, "synonyms": ["smoke", "cigarettes", "vaping", "vape", "weed", "drugs"]},
      {"text": "Being messy", "points": 12, "synonyms": ["messy", "slob", "dirty", "hoarder", "never clean", "lazy"]},
      {"text": "Snoring", "points": 10, "synonyms": ["snore", "farting", "burping", "bad hygiene", "not showering"]},
      {"text": "Drinking too much", "points": 8, "synonyms": ["drinking", "alcohol", "gambling", "spending", "cheating", "gossiping"]}
    ]
  },
  {
    "question": "Name a place you might go to cry in private.",
    "category": "Adult",
    "answers": [
      {"text": "The shower", "points": 40, "synonyms": ["shower", "bathtub", "tub", "bathroom"]},
      {"text": "Your car", "points": 30, "synonyms": ["car", "truck", "parking lot", "driving"]},
      {"text": "Bedroom/Closet", "points": 15, "synonyms": ["bedroom", "bed", "closet", "under covers", "pillow", "room"]},
      {"text": "Work bathroom", "points": 10, "synonyms": ["work", "office bathroom", "stall", "restroom", "walk-in freezer"]},
      {"text": "The woods/Outdoors", "points": 3, "synonyms": ["woods", "park", "outside", "beach", "nature", "walk"]},
      {"text": "Stairwell", "points": 2, "synonyms": ["stairs", "stairwell", "basement", "garage", "attic"]}
    ]
  },
  {
    "question": "Name a warning sign that your relationship might be over.",
    "category": "Adult",
    "answers": [
      {"text": "Stop talking/communicating", "points": 35, "synonyms": ["no communication", "not talking", "silent treatment", "ignoring", "distant", "cold"]},
      {"text": "No sex/intimacy", "points": 25, "synonyms": ["no sex", "dead bedroom", "no intimacy", "no affection", "not kissing", "no touch"]},
      {"text": "Constant fighting", "points": 20, "synonyms": ["fighting", "arguing", "yelling", "bickering", "mad", "resentment"]},
      {"text": "Hiding their phone", "points": 10, "synonyms": ["hiding phone", "secretive", "passcode", "texting late", "suspicious"]},
      {"text": "Spending all time apart", "points": 6, "synonyms": ["never home", "avoiding", "no time together", "working late", "always out"]},
      {"text": "Cheating", "points": 4, "synonyms": ["cheating", "affair", "someone else", "lying", "unfaithful"]}
    ]
  },
  {
    "question": "Name something you might delete from your search history before letting someone use your phone.",
    "category": "Adult",
    "answers": [
      {"text": "Porn/Adult sites", "points": 45, "synonyms": ["porn", "pornhub", "xxx", "nsfw", "adult", "sex", "onlyfans", "videos"]},
      {"text": "Embarrassing medical symptoms", "points": 20, "synonyms": ["medical", "webmd", "symptoms", "rash", "std", "sti", "health", "doctor", "sick"]},
      {"text": "Ex's social media", "points": 15, "synonyms": ["ex", "stalking ex", "instagram", "facebook", "old flame", "ex girlfriend", "ex boyfriend"]},
      {"text": "Stupid/Basic questions", "points": 10, "synonyms": ["dumb questions", "stupid", "spelling", "how to", "embarrassing questions", "math"]},
      {"text": "Surprise gift ideas", "points": 6, "synonyms": ["gift", "present", "surprise", "ring", "birthday", "shopping"]},
      {"text": "Job hunting", "points": 4, "synonyms": ["new job", "jobs", "indeed", "linkedin", "resume", "quitting"]}
    ]
  },
  {
    "question": "Name a reason someone might walk out of a bedroom looking disappointed.",
    "category": "Adult",
    "answers": [
      {"text": "Bad sex", "points": 42, "synonyms": ["sex", "bad in bed", "finished too fast", "whiskey dick", "didnt finish", "no orgasm", "small"]},
      {"text": "Partner fell asleep", "points": 22, "synonyms": ["asleep", "sleeping", "passed out", "tired", "snoring", "rejected", "not in the mood"]},
      {"text": "Outfit doesn't fit", "points": 16, "synonyms": ["clothes", "outfit", "too tight", "gained weight", "jeans", "dress", "nothing to wear"]},
      {"text": "Couldn't find what they needed", "points": 12, "synonyms": ["lost", "missing", "cant find", "keys", "phone", "wallet", "charger"]},
      {"text": "Had an argument", "points": 8, "synonyms": ["fight", "arguing", "mad", "upset", "breakup", "crying"]}
    ]
  },
  {
    "question": "Name something you might find under a hotel bed that you wish you hadn't.",
    "category": "Adult",
    "answers": [
      {"text": "Used condom", "points": 38, "synonyms": ["condom", "rubber", "wrapper", "protection", "used"]},
      {"text": "Dirty underwear", "points": 24, "synonyms": ["underwear", "panties", "boxers", "bra", "thong", "socks", "clothes"]},
      {"text": "Old food/Trash", "points": 15, "synonyms": ["food", "trash", "garbage", "pizza", "mold", "wrappers", "bottles"]},
      {"text": "Sex toy", "points": 11, "synonyms": ["vibrator", "dildo", "lube", "handcuffs", "toy", "adult toy"]},
      {"text": "Drugs/Paraphernalia", "points": 7, "synonyms": ["drugs", "weed", "pills", "needle", "syringe", "pipe", "cocaine"]},
      {"text": "Dead bug/Mouse", "points": 5, "synonyms": ["bug", "roach", "cockroach", "mouse", "rat", "bed bugs", "spider", "dead animal"]}
    ]
  },
  {
    "question": "Name something you never want to hear right before hooking up.",
    "category": "Adult",
    "answers": [
      {"text": "The wrong name", "points": 35, "synonyms": ["wrong name", "ex name", "someone elses name", "different name"]},
      {"text": "I have an STI/rash", "points": 25, "synonyms": ["std", "sti", "herpes", "rash", "burning", "itching", "infection", "disease"]},
      {"text": "I forgot protection", "points": 15, "synonyms": ["no condom", "no protection", "forgot condoms", "pull out", "birth control"]},
      {"text": "Let me call my ex/mom", "points": 10, "synonyms": ["mom", "parents", "ex", "wife", "husband", "girlfriend", "boyfriend", "phone call"]},
      {"text": "Make it quick", "points": 9, "synonyms": ["hurry up", "fast", "quick", "tired", "i have to leave", "dont take long"]},
      {"text": "Are we filming this?", "points": 6, "synonyms": ["camera", "video", "record", "filming", "onlyfans", "watch"]}
    ]
  },
  {
    "question": "Name something people lie about to their doctor.",
    "category": "Adult",
    "answers": [
      {"text": "How much they drink", "points": 35, "synonyms": ["drinking", "alcohol", "beer", "wine", "liquor", "booze"]},
      {"text": "Their weight", "points": 20, "synonyms": ["weight", "pounds", "heavy", "scale"]},
      {"text": "Exercise habits", "points": 15, "synonyms": ["exercise", "working out", "gym", "running", "active", "fitness"]},
      {"text": "Smoking/Drug use", "points": 12, "synonyms": ["smoking", "vaping", "weed", "drugs", "cigarettes", "marijuana"]},
      {"text": "Their diet", "points": 10, "synonyms": ["diet", "eating", "food", "junk food", "fast food", "vegetables", "sugar"]},
      {"text": "Number of sexual partners", "points": 8, "synonyms": ["sex", "partners", "body count", "unprotected", "flossing", "taking meds"]}
    ]
  },
  {
    "question": "Name a place where you would be mortified to run into your ex.",
    "category": "Adult",
    "answers": [
      {"text": "On a date with someone new", "points": 32, "synonyms": ["date", "restaurant", "dinner", "new partner", "new girlfriend", "new boyfriend"]},
      {"text": "Grocery store in pajamas", "points": 24, "synonyms": ["grocery store", "walmart", "target", "supermarket", "pajamas", "sweatpants", "looking rough"]},
      {"text": "The gym looking sweaty", "points": 18, "synonyms": ["gym", "working out", "sweaty", "fitness", "yoga"]},
      {"text": "Doctor's office/Clinic", "points": 12, "synonyms": ["doctor", "clinic", "hospital", "planned parenthood", "std clinic", "pharmacy", "therapy"]},
      {"text": "A hotel lobby", "points": 8, "synonyms": ["hotel", "motel", "vacation", "airport", "bar", "club"]},
      {"text": "A strip club", "points": 6, "synonyms": ["strip club", "sex shop", "adult store", "wedding", "funeral"]}
    ]
  },
  {
    "question": "Name something people do in the car when they think no one can see them.",
    "category": "Adult",
    "answers": [
      {"text": "Pick their nose", "points": 40, "synonyms": ["pick nose", "boogers", "nose"]},
      {"text": "Sing at the top of their lungs", "points": 25, "synonyms": ["sing", "singing", "jamming", "dancing", "concert", "rap"]},
      {"text": "Curse/Yell at drivers", "points": 14, "synonyms": ["curse", "swear", "yell", "road rage", "middle finger", "flip off", "scream"]},
      {"text": "Change clothes/Adjust bra", "points": 10, "synonyms": ["change", "undress", "adjust bra", "fix underwear", "scratch", "makeup"]},
      {"text": "Talk to themselves", "points": 6, "synonyms": ["talk to self", "cry", "argue", "rehearse", "practice"]},
      {"text": "Eat messy food", "points": 5, "synonyms": ["eat", "eating", "fast food", "burger", "tacos", "fart", "smoke"]}
    ]
  },
  {
    "question": "Name an item you would be embarrassed for airport security to pull out of your bag.",
    "category": "Adult",
    "answers": [
      {"text": "Sex toy/Vibrator", "points": 46, "synonyms": ["vibrator", "dildo", "sex toy", "adult toy", "toy", "butt plug"]},
      {"text": "Dirty underwear", "points": 20, "synonyms": ["underwear", "panties", "boxers", "lingerie", "thong", "dirty clothes", "laundry"]},
      {"text": "Condoms/Lube", "points": 14, "synonyms": ["condoms", "lube", "lubricant", "protection", "massage oil"]},
      {"text": "Weed/Drugs", "points": 10, "synonyms": ["weed", "edibles", "drugs", "vape", "bong", "pipe", "marijuana"]},
      {"text": "Embarrassing medication", "points": 6, "synonyms": ["viagra", "pills", "cream", "laxatives", "medication", "tampons", "diapers"]},
      {"text": "Handcuffs", "points": 4, "synonyms": ["handcuffs", "whip", "bdsm", "rope", "fur", "porn", "magazine"]}
    ]
  },
  {
    "question": "Name a reason you might ghost someone after a first date.",
    "category": "Adult",
    "answers": [
      {"text": "No chemistry/Boring", "points": 30, "synonyms": ["boring", "no spark", "no vibe", "no connection", "awkward", "not interested", "dull"]},
      {"text": "Creepy/Major red flags", "points": 24, "synonyms": ["creepy", "weird", "crazy", "red flags", "clingy", "pushy", "handsy", "scary"]},
      {"text": "Bad breath/Hygiene", "points": 16, "synonyms": ["smelled bad", "stinky", "bad breath", "bo", "gross", "dirty", "hygiene"]},
      {"text": "Talked about their ex", "points": 12, "synonyms": ["ex", "talked about ex", "not over ex", "talked about themselves", "bragged"]},
      {"text": "Rude to the server", "points": 10, "synonyms": ["rude", "mean", "bad tipper", "cheap", "didnt pay", "arrogant", "waiter"]},
      {"text": "Looked nothing like their photos", "points": 8, "synonyms": ["catfish", "ugly", "old photos", "lied", "different in person", "short"]}
    ]
  },
  {
    "question": "Name something people do at work when they're supposed to be working.",
    "category": "Adult",
    "answers": [
      {"text": "Scroll social media", "points": 35, "synonyms": ["phone", "social media", "tiktok", "instagram", "reddit", "texting", "youtube", "scroll"]},
      {"text": "Online shopping", "points": 24, "synonyms": ["shopping", "amazon", "buying stuff", "browsing", "ebay"]},
      {"text": "Hide in the bathroom", "points": 16, "synonyms": ["bathroom", "pooping", "restroom", "stall", "hiding"]},
      {"text": "Apply for other jobs", "points": 12, "synonyms": ["job search", "applying", "linkedin", "indeed", "resume", "interviews"]},
      {"text": "Gossip with coworkers", "points": 8, "synonyms": ["gossip", "chatting", "talking", "slack", "teams", "hanging out"]},
      {"text": "Take a nap", "points": 5, "synonyms": ["sleep", "nap", "doze off", "games", "play games", "eat"]}
    ]
  },
  {
    "question": "Name a sign that your neighbor is having a wild night.",
    "category": "Adult",
    "answers": [
      {"text": "Loud music", "points": 35, "synonyms": ["music", "bass", "party", "shouting", "yelling", "screaming", "noise"]},
      {"text": "Loud moaning/Bed banging", "points": 30, "synonyms": ["sex", "moaning", "bed banging", "headboard", "screaming", "creaking", "walls shaking"]},
      {"text": "Police showing up", "points": 15, "synonyms": ["cops", "police", "sirens", "ambulance", "flashing lights", "arrest"]},
      {"text": "Lots of cars parked outside", "points": 10, "synonyms": ["cars", "ubers", "people", "crowd", "guests", "parking"]},
      {"text": "Smell of weed", "points": 6, "synonyms": ["weed", "smoke", "pot", "marijuana", "smell", "vomit", "puke"]},
      {"text": "Breaking glass", "points": 4, "synonyms": ["glass", "bottles", "fighting", "arguing", "throwing things", "trash"]}
    ]
  },
  {
    "question": "Name something you definitely shouldn't say to a cop who just pulled you over.",
    "category": "Adult",
    "answers": [
      {"text": "Do you know who I am?", "points": 30, "synonyms": ["who i am", "famous", "important", "my dad", "lawyer"]},
      {"text": "I'm not even drunk", "points": 26, "synonyms": ["drunk", "had a few", "two beers", "drinking", "high", "weed", "sober"]},
      {"text": "Don't you have real criminals to catch?", "points": 18, "synonyms": ["real criminals", "nothing better to do", "donuts", "quota", "waste of time"]},
      {"text": "I pay your salary", "points": 12, "synonyms": ["taxes", "pay your salary", "my taxes", "work for me"]},
      {"text": "What seems to be the officer, problem?", "points": 8, "synonyms": ["officer problem", "pig", "curse", "fuck", "shut up", "rude"]},
      {"text": "Don't check the trunk", "points": 6, "synonyms": ["trunk", "drugs", "gun", "weapon", "warrant", "stolen", "speeding"]}
    ]
  },
  {
    "question": "Name a reason a couple might get into a fight on vacation.",
    "category": "Adult",
    "answers": [
      {"text": "Spending too much money", "points": 30, "synonyms": ["money", "budget", "expensive", "spending", "cost", "bills"]},
      {"text": "Getting lost/Directions", "points": 24, "synonyms": ["lost", "directions", "gps", "driving", "map", "navigation", "traffic"]},
      {"text": "Running late/Missing a flight", "points": 18, "synonyms": ["late", "flight", "airport", "packing", "forgot passport", "schedule", "rushing"]},
      {"text": "Drinking too much", "points": 12, "synonyms": ["drunk", "drinking", "alcohol", "hangover", "partying"]},
      {"text": "Deciding where to eat", "points": 10, "synonyms": ["food", "hungry", "hangry", "restaurant", "dinner", "itinerary", "plans"]},
      {"text": "Checking out someone else", "points": 6, "synonyms": ["flirting", "looking", "jealousy", "cheating", "taking photos", "phone"]}
    ]
  },
  {
    "question": "Name something someone might pack 'just in case' they spend the night with a date.",
    "category": "Adult",
    "answers": [
      {"text": "Toothbrush", "points": 30, "synonyms": ["toothbrush", "toothpaste", "mouthwash", "mints"]},
      {"text": "Extra underwear", "points": 25, "synonyms": ["underwear", "panties", "boxers", "lingerie", "clean underwear"]},
      {"text": "Deodorant/Makeup", "points": 18, "synonyms": ["deodorant", "makeup", "perfume", "cologne", "face wash", "skincare", "toiletries"]},
      {"text": "Condoms", "points": 14, "synonyms": ["condoms", "protection", "lube", "birth control", "plan b"]},
      {"text": "Phone charger", "points": 8, "synonyms": ["charger", "cord", "battery pack", "cable"]},
      {"text": "Change of clothes", "points": 5, "synonyms": ["clothes", "shirt", "pajamas", "leggings", "hairbrush", "contacts", "meds"]}
    ]
  },
  {
    "question": "Name a guilty pleasure people are embarrassed to admit they enjoy.",
    "category": "Adult",
    "answers": [
      {"text": "Trashy reality TV", "points": 35, "synonyms": ["reality tv", "bachelor", "kardashians", "love island", "housewives", "trash tv", "drama"]},
      {"text": "Fast food/Junk food", "points": 24, "synonyms": ["fast food", "mcdonalds", "taco bell", "junk food", "ice cream", "candy", "chocolate", "eating"]},
      {"text": "Cheesy pop music", "points": 15, "synonyms": ["pop music", "boy bands", "taylor swift", "nickelback", "cheesy music", "singing"]},
      {"text": "Stalking people online", "points": 12, "synonyms": ["stalking", "gossip", "snooping", "social media", "lurking", "tiktok"]},
      {"text": "Popping pimples", "points": 8, "synonyms": ["pimples", "zits", "popping", "picking", "dr pimple popper"]},
      {"text": "Spicy romance novels", "points": 6, "synonyms": ["romance", "smut", "erotica", "fanfiction", "porn", "rom coms"]}
    ]
  },
  {
    "question": "Name something you would panic about accidentally sending to the wrong person.",
    "category": "Adult",
    "answers": [
      {"text": "Nude photo", "points": 42, "synonyms": ["nude", "nudes", "naked", "dick pic", "sexy photo", "boobs", "explicit", "picture"]},
      {"text": "Talking trash about them", "points": 30, "synonyms": ["gossip", "trash talk", "screenshot", "talking bad", "complaining", "insult", "mean text"]},
      {"text": "A drunk text", "points": 14, "synonyms": ["drunk text", "flirty text", "sexting", "dirty text", "booty call"]},
      {"text": "I love you", "points": 8, "synonyms": ["i love you", "love you", "crush", "confession", "secret"]},
      {"text": "Bank/Password info", "points": 6, "synonyms": ["money", "venmo", "zelle", "password", "ssn", "credit card", "bank"]}
    ]
  },
  {
    "question": "Name a reason someone might sneak out of a house at 5 AM.",
    "category": "Adult",
    "answers": [
      {"text": "Regrettable one-night stand", "points": 45, "synonyms": ["one night stand", "hookup", "walk of shame", "regret", "bad sex", "ugly", "tinder"]},
      {"text": "Having an affair", "points": 25, "synonyms": ["cheating", "affair", "married", "spouse coming home", "side piece", "secret"]},
      {"text": "Going to work early", "points": 14, "synonyms": ["work", "job", "early shift", "flight", "gym", "running"]},
      {"text": "Avoiding roommates/parents", "points": 10, "synonyms": ["parents", "roommates", "kids", "awkward", "dont want to talk", "curfew"]},
      {"text": "They stole something", "points": 6, "synonyms": ["stole", "robbery", "burglar", "theft", "broke something"]}
    ]
  },
  {
    "question": "Name a sound you never want to hear coming from the bathroom stall next to you.",
    "category": "Adult",
    "answers": [
      {"text": "Explosive farting/Diarrhea", "points": 40, "synonyms": ["fart", "farting", "diarrhea", "poop", "plop", "splash", "explosion", "gas"]},
      {"text": "Vomiting", "points": 24, "synonyms": ["puking", "throwing up", "barfing", "gagging", "retching", "vomit"]},
      {"text": "Someone talking on the phone", "points": 14, "synonyms": ["phone", "talking", "facetime", "zoom", "speakerphone", "video", "camera"]},
      {"text": "Moaning/Sex sounds", "points": 10, "synonyms": ["moaning", "sex", "grunting", "groaning", "masturbating", "heavy breathing"]},
      {"text": "Crying", "points": 7, "synonyms": ["crying", "sobbing", "yelling", "praying", "screaming", "oh god"]},
      {"text": "Asking for toilet paper", "points": 5, "synonyms": ["toilet paper", "tp", "no paper", "spare a square", "help"]}
    ]
  },
  {
    "question": "Name something that instantly ruins the mood in the bedroom.",
    "category": "Adult",
    "answers": [
      {"text": "Phone ringing/Texting", "points": 28, "synonyms": ["phone", "ringing", "texting", "alarm", "notification", "call", "mom calling"]},
      {"text": "Kid or pet walking in", "points": 24, "synonyms": ["kids", "baby", "crying", "dog", "cat", "pet", "roommate", "parents", "knocking"]},
      {"text": "Farting", "points": 20, "synonyms": ["fart", "gas", "burp", "queef", "smell", "stink"]},
      {"text": "Bad breath/Body odor", "points": 12, "synonyms": ["bad breath", "bo", "stinky", "sweat", "hygiene", "smell"]},
      {"text": "Saying the wrong name", "points": 10, "synonyms": ["wrong name", "ex", "talking about work", "arguing", "weird comment"]},
      {"text": "Getting a leg cramp", "points": 6, "synonyms": ["cramp", "charley horse", "injury", "headache", "falling asleep", "too drunk"]}
    ]
  },
  {
    "question": "Name a reason someone might suddenly start working out and dressing way better.",
    "category": "Adult",
    "answers": [
      {"text": "Just got dumped/Single", "points": 40, "synonyms": ["breakup", "dumped", "single", "divorce", "revenge body", "dating again", "ex"]},
      {"text": "Cheating/New crush", "points": 25, "synonyms": ["cheating", "affair", "crush", "new partner", "impress someone", "coworker", "dating"]},
      {"text": "Upcoming wedding/Reunion", "points": 15, "synonyms": ["wedding", "reunion", "vacation", "beach", "summer", "trip", "event"]},
      {"text": "New Year's resolution", "points": 10, "synonyms": ["new year", "resolution", "health", "self improvement", "confidence"]},
      {"text": "Doctor's warning", "points": 6, "synonyms": ["doctor", "health scare", "gained weight", "clothes dont fit", "midlife crisis"]},
      {"text": "New job", "points": 4, "synonyms": ["job", "promotion", "interview", "raise", "rich", "money"]}
    ]
  },
  {
    "question": "Name something people routinely steal from hotel rooms.",
    "category": "Adult",
    "answers": [
      {"text": "Towels/Bathrobe", "points": 35, "synonyms": ["towels", "robe", "bathrobe", "washcloth", "slippers"]},
      {"text": "Shampoo/Toiletries", "points": 30, "synonyms": ["shampoo", "conditioner", "soap", "lotion", "toiletries", "shower cap"]},
      {"text": "Pens/Notepads", "points": 14, "synonyms": ["pens", "paper", "notepad", "stationary", "bible", "key card"]},
      {"text": "Coffee/Tea packets", "points": 10, "synonyms": ["coffee", "tea", "sugar", "cups", "snacks", "water", "mini bar"]},
      {"text": "Pillows", "points": 6, "synonyms": ["pillows", "blanket", "sheets", "pillowcase"]},
      {"text": "Coat hangers", "points": 5, "synonyms": ["hangers", "batteries", "remote", "hair dryer", "toilet paper", "tissues"]}
    ]
  },
  {
    "question": "Name a classic lie people tell when calling in sick to work.",
    "category": "Adult",
    "answers": [
      {"text": "Food poisoning/Stomach bug", "points": 35, "synonyms": ["food poisoning", "stomach", "diarrhea", "throwing up", "puking", "nausea", "upset stomach"]},
      {"text": "Migraine/Headache", "points": 24, "synonyms": ["migraine", "headache", "dizzy", "hungover"]},
      {"text": "Family emergency", "points": 16, "synonyms": ["emergency", "family", "grandma died", "funeral", "sick kid", "pet"]},
      {"text": "Fever/Flu", "points": 12, "synonyms": ["fever", "flu", "covid", "cold", "cough", "sore throat", "contagious"]},
      {"text": "Car trouble", "points": 8, "synonyms": ["car", "flat tire", "battery", "accident", "traffic", "locked out"]},
      {"text": "Doctor's appointment", "points": 5, "synonyms": ["doctor", "dentist", "appointment", "plumber", "delivery"]}
    ]
  },
  {
    "question": "Name something on a dating app profile that is an instant red flag.",
    "category": "Adult",
    "answers": [
      {"text": "Holding a dead fish", "points": 28, "synonyms": ["fish", "fishing", "hunting", "dead animal", "deer"]},
      {"text": "Only group photos", "points": 20, "synonyms": ["group photos", "friends", "cant tell who", "sunglasses", "filters", "snapchat"]},
      {"text": "Shirtless bathroom selfies", "points": 18, "synonyms": ["shirtless", "mirror selfie", "gym selfie", "abs", "bathroom", "flexing"]},
      {"text": "Bashing their ex/No drama", "points": 15, "synonyms": ["no drama", "ex", "negative", "angry", "bitter", "fluent in sarcasm", "requirements"]},
      {"text": "Empty bio", "points": 10, "synonyms": ["no bio", "empty", "blank", "just ask", "instagram handle", "venmo", "cashapp"]},
      {"text": "Married/Looking for a third", "points": 9, "synonyms": ["married", "enm", "poly", "couple", "threesome", "open relationship", "kids", "height"]}
    ]
  },
  {
    "question": "Name something people do right after a bad breakup.",
    "category": "Adult",
    "answers": [
      {"text": "Drink/Go out partying", "points": 28, "synonyms": ["drink", "alcohol", "bar", "club", "party", "wine", "get drunk"]},
      {"text": "Eat ice cream/Junk food", "points": 22, "synonyms": ["eat", "ice cream", "pizza", "chocolate", "junk food", "comfort food", "binge"]},
      {"text": "Rebound hookup", "points": 18, "synonyms": ["rebound", "hookup", "sex", "tinder", "dating apps", "sleep around", "one night stand"]},
      {"text": "Change their hair/Look", "points": 12, "synonyms": ["haircut", "bangs", "dye hair", "new hair", "tattoo", "piercing", "shopping", "makeover"]},
      {"text": "Cry to sad music", "points": 10, "synonyms": ["cry", "sad music", "bed", "depressed", "vent", "call friends"]},
      {"text": "Hit the gym", "points": 6, "synonyms": ["gym", "work out", "exercise", "revenge body"]},
      {"text": "Stalk their ex online", "points": 4, "synonyms": ["stalk", "block", "delete photos", "drunk text", "burn stuff"]}
    ]
  },
  {
    "question": "Name a reason you might pretend your phone battery died.",
    "category": "Adult",
    "answers": [
      {"text": "Avoiding a clingy date/ex", "points": 35, "synonyms": ["ex", "date", "annoying person", "ignoring someone", "dont want to talk", "clingy", "ghosting"]},
      {"text": "Ignoring your boss/work", "points": 25, "synonyms": ["boss", "work", "coworker", "weekend", "day off", "shift"]},
      {"text": "Late/Flaking on plans", "points": 18, "synonyms": ["late", "flaking", "bail", "cancel", "staying home", "lazy", "asleep"]},
      {"text": "Didn't want to talk to parents", "points": 12, "synonyms": ["mom", "dad", "parents", "family", "partner", "spouse"]},
      {"text": "Out somewhere you shouldn't be", "points": 10, "synonyms": ["cheating", "sneaking out", "bar", "partying", "hiding", "location", "trouble"]}
    ]
  },
  {
    "question": "Name something people always forget to pack for a trip.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Toothbrush/Toothpaste", "points": 32, "synonyms": ["toothbrush", "toothpaste", "dental", "floss"]},
      {"text": "Phone charger", "points": 26, "synonyms": ["charger", "cord", "cable", "power bank", "plug"]},
      {"text": "Underwear/Socks", "points": 16, "synonyms": ["underwear", "socks", "panties", "boxers", "undies"]},
      {"text": "Deodorant/Toiletries", "points": 12, "synonyms": ["deodorant", "shampoo", "razor", "lotion", "soap", "toiletries"]},
      {"text": "Medications", "points": 8, "synonyms": ["meds", "pills", "prescriptions", "vitamins", "medicine"]},
      {"text": "Sunglasses/Sunscreen", "points": 6, "synonyms": ["sunglasses", "sunscreen", "hat", "glasses", "swimsuit"]}
    ]
  },
  {
    "question": "Name a food that tastes just as good—or better—as leftovers.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Pizza", "points": 38, "synonyms": ["pizza", "cold pizza", "slice"]},
      {"text": "Pasta/Lasagna", "points": 24, "synonyms": ["pasta", "lasagna", "spaghetti", "mac and cheese", "noodles", "ziti"]},
      {"text": "Chili/Soup", "points": 16, "synonyms": ["chili", "soup", "stew", "gumbo", "curry"]},
      {"text": "Chinese takeout", "points": 10, "synonyms": ["chinese", "takeout", "fried rice", "lo mein", "asian food"]},
      {"text": "Thanksgiving turkey/Ham", "points": 7, "synonyms": ["turkey", "ham", "thanksgiving", "stuffing", "roast"]},
      {"text": "Meatloaf/Casserole", "points": 5, "synonyms": ["meatloaf", "casserole", "pot roast", "bbq", "pulled pork"]}
    ]
  },
  {
    "question": "Name a chore people put off for as long as possible.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Folding/Putting away laundry", "points": 35, "synonyms": ["laundry", "folding clothes", "washing clothes", "ironing"]},
      {"text": "Washing dishes", "points": 25, "synonyms": ["dishes", "dishwasher", "pots and pans", "kitchen"]},
      {"text": "Cleaning the bathroom", "points": 18, "synonyms": ["bathroom", "toilet", "shower", "tub", "scrubbing"]},
      {"text": "Vacuuming/Mopping", "points": 10, "synonyms": ["vacuum", "mop", "sweep", "floors", "dusting"]},
      {"text": "Taking out the trash", "points": 7, "synonyms": ["trash", "garbage", "recycling", "bins"]},
      {"text": "Mowing the lawn", "points": 5, "synonyms": ["lawn", "grass", "yard work", "weeding", "raking"]}
    ]
  },
  {
    "question": "Name something you might lose in your house every single week.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Keys", "points": 36, "synonyms": ["keys", "car keys", "house keys", "keychain"]},
      {"text": "Phone", "points": 26, "synonyms": ["phone", "cell phone", "iphone", "smartphone"]},
      {"text": "TV remote", "points": 18, "synonyms": ["remote", "clicker", "controller", "tv remote"]},
      {"text": "Glasses/Sunglasses", "points": 10, "synonyms": ["glasses", "reading glasses", "sunglasses", "specs"]},
      {"text": "Wallet/Purse", "points": 6, "synonyms": ["wallet", "purse", "bag", "credit card", "id"]},
      {"text": "Lip balm/Chapstick", "points": 4, "synonyms": ["chapstick", "lip balm", "airpods", "headphones", "hair tie"]}
    ]
  },
  {
    "question": "Name a reason someone might be late for work.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Heavy traffic", "points": 38, "synonyms": ["traffic", "accident", "jam", "construction", "commute"]},
      {"text": "Overslept/Alarm didn't go off", "points": 28, "synonyms": ["overslept", "alarm", "slept in", "snooze", "woke up late"]},
      {"text": "Car trouble", "points": 14, "synonyms": ["car", "flat tire", "battery", "gas", "breakdown"]},
      {"text": "Getting kids ready", "points": 9, "synonyms": ["kids", "school", "daycare", "drop off", "children"]},
      {"text": "Bad weather", "points": 6, "synonyms": ["weather", "snow", "rain", "ice", "storm"]},
      {"text": "Stopped for coffee/breakfast", "points": 5, "synonyms": ["coffee", "starbucks", "dunkin", "breakfast", "drive thru"]}
    ]
  },
  {
    "question": "Name something people do in an elevator to avoid making eye contact.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Look at their phone", "points": 46, "synonyms": ["phone", "text", "scroll", "check phone", "email"]},
      {"text": "Stare at the floor numbers", "points": 28, "synonyms": ["numbers", "buttons", "light", "ceiling", "watch numbers"]},
      {"text": "Look at the floor/Shoes", "points": 12, "synonyms": ["floor", "shoes", "down", "feet", "ground"]},
      {"text": "Face the doors silently", "points": 8, "synonyms": ["stare at door", "look straight", "doors", "wall"]},
      {"text": "Check their watch", "points": 4, "synonyms": ["watch", "time", "wrist"]},
      {"text": "Look in the mirror", "points": 2, "synonyms": ["mirror", "fix hair", "check reflection"]}
    ]
  },
  {
    "question": "Name a classic pizza topping.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Pepperoni", "points": 45, "synonyms": ["pepperoni", "pep"]},
      {"text": "Extra cheese", "points": 20, "synonyms": ["cheese", "mozzarella", "parmesan"]},
      {"text": "Sausage", "points": 14, "synonyms": ["sausage", "italian sausage", "meat"]},
      {"text": "Mushrooms", "points": 10, "synonyms": ["mushrooms", "shrooms"]},
      {"text": "Onions/Peppers", "points": 6, "synonyms": ["onions", "peppers", "green peppers", "veggies", "bell peppers"]},
      {"text": "Bacon/Ham", "points": 5, "synonyms": ["bacon", "ham", "pineapple", "olives", "basil"]}
    ]
  },
  {
    "question": "Name something you buy at the grocery store that almost always goes bad before you finish it.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Salad/Spinach", "points": 34, "synonyms": ["salad", "lettuce", "spinach", "greens", "bagged salad", "spring mix"]},
      {"text": "Bananas", "points": 22, "synonyms": ["bananas", "banana"]},
      {"text": "Bread", "points": 16, "synonyms": ["bread", "bagels", "buns", "rolls", "loaf"]},
      {"text": "Milk", "points": 12, "synonyms": ["milk", "dairy", "cream", "yogurt"]},
      {"text": "Berries/Fruit", "points": 10, "synonyms": ["strawberries", "berries", "blueberries", "raspberries", "fruit", "avocados"]},
      {"text": "Fresh herbs/Cilantro", "points": 6, "synonyms": ["cilantro", "herbs", "parsley", "basil", "produce", "veggies"]}
    ]
  },
  {
    "question": "Name a place where you have to be completely quiet.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Library", "points": 42, "synonyms": ["library", "study room"]},
      {"text": "Movie theater", "points": 24, "synonyms": ["movie", "theater", "cinema", "movies"]},
      {"text": "Church/Place of worship", "points": 16, "synonyms": ["church", "mosque", "temple", "synagogue", "funeral"]},
      {"text": "Hospital/Doctor's office", "points": 9, "synonyms": ["hospital", "clinic", "waiting room", "icu"]},
      {"text": "Museum/Art gallery", "points": 5, "synonyms": ["museum", "gallery", "courtroom", "court"]},
      {"text": "Golf course", "points": 4, "synonyms": ["golf", "tennis", "spa", "classroom", "exam"]}
    ]
  },
  {
    "question": "Name something people do when they can't fall asleep at night.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Scroll on their phone", "points": 38, "synonyms": ["phone", "social media", "tiktok", "instagram", "read phone", "youtube"]},
      {"text": "Watch TV", "points": 22, "synonyms": ["tv", "netflix", "movie", "show", "television"]},
      {"text": "Toss and turn", "points": 15, "synonyms": ["toss and turn", "flip pillow", "overthink", "stare at ceiling", "count sheep"]},
      {"text": "Read a book", "points": 10, "synonyms": ["read", "book", "kindle", "magazine"]},
      {"text": "Get a snack/Drink", "points": 8, "synonyms": ["eat", "snack", "water", "tea", "warm milk", "kitchen"]},
      {"text": "Take melatonin/Sleep aid", "points": 7, "synonyms": ["melatonin", "medicine", "nyquil", "zzzquil", "pills", "music", "podcast"]}
    ]
  },
  {
    "question": "Name a type of weather that makes people want to stay inside.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Heavy rain/Thunderstorm", "points": 38, "synonyms": ["rain", "storm", "thunderstorm", "pouring", "downpour", "lightning"]},
      {"text": "Snowstorm/Blizzard", "points": 30, "synonyms": ["snow", "blizzard", "snowstorm", "freezing", "ice", "sleet"]},
      {"text": "Extreme heat/Humidity", "points": 14, "synonyms": ["hot", "heat", "heatwave", "humid", "humidity", "scorching"]},
      {"text": "Hurricane/Tornado", "points": 10, "synonyms": ["hurricane", "tornado", "cyclone", "typhoon", "high winds"]},
      {"text": "Freezing cold", "points": 5, "synonyms": ["cold", "freezing", "chilly", "wind chill", "frost"]},
      {"text": "Hail", "points": 3, "synonyms": ["hail", "fog", "wind", "windy"]}
    ]
  },
  {
    "question": "Name something you might find at the bottom of a purse or backpack.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Loose change/Coins", "points": 30, "synonyms": ["coins", "change", "pennies", "money", "quarters"]},
      {"text": "Old receipts", "points": 24, "synonyms": ["receipts", "paper", "trash", "wrappers", "tissues"]},
      {"text": "Gum/Mints", "points": 16, "synonyms": ["gum", "mints", "candy", "crumbs", "snacks"]},
      {"text": "Pens/Pencils", "points": 12, "synonyms": ["pen", "pencil", "marker", "chapstick", "lip gloss"]},
      {"text": "Hair ties/Bobby pins", "points": 10, "synonyms": ["hair tie", "scrunchie", "bobby pin", "comb", "brush"]},
      {"text": "Keys/Earbuds", "points": 8, "synonyms": ["keys", "airpods", "headphones", "charger", "sunglasses"]}
    ]
  },
  {
    "question": "Name a reason a dog might bark at nothing.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Delivery driver/Mailman", "points": 34, "synonyms": ["mailman", "amazon", "ups", "fedex", "delivery", "doorbell", "knock"]},
      {"text": "Squirrel/Animal outside", "points": 26, "synonyms": ["squirrel", "bird", "cat", "deer", "rabbit", "animal", "other dog"]},
      {"text": "Heard a noise/Car door", "points": 18, "synonyms": ["noise", "sound", "car", "neighbor", "wind", "thunder"]},
      {"text": "Ghosts/Spirits", "points": 10, "synonyms": ["ghost", "ghosts", "spirit", "haunted", "shadow"]},
      {"text": "Wants attention/Food", "points": 7, "synonyms": ["attention", "hungry", "food", "treat", "play", "bored"]},
      {"text": "Saw their own reflection", "points": 5, "synonyms": ["reflection", "mirror", "window", "leaf", "bug"]}
    ]
  },
  {
    "question": "Name something people do right after waking up in the morning.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Check their phone", "points": 36, "synonyms": ["phone", "texts", "social media", "alarm", "scroll", "check time"]},
      {"text": "Use the bathroom", "points": 26, "synonyms": ["pee", "bathroom", "toilet", "restroom"]},
      {"text": "Make/Drink coffee", "points": 16, "synonyms": ["coffee", "tea", "caffeine", "water", "drink"]},
      {"text": "Brush their teeth", "points": 10, "synonyms": ["brush teeth", "wash face", "shower"]},
      {"text": "Hit snooze", "points": 7, "synonyms": ["snooze", "go back to sleep", "stretch", "yawn"]},
      {"text": "Let the dog out/Feed pets", "points": 5, "synonyms": ["dog", "pet", "cat", "feed", "make bed"]}
    ]
  },
  {
    "question": "Name a movie snack besides popcorn.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Candy/M&Ms", "points": 40, "synonyms": ["candy", "mms", "skittles", "sour patch", "raisinets", "junior mints", "chocolate", "twizzlers"]},
      {"text": "Nachos", "points": 22, "synonyms": ["nachos", "chips and cheese"]},
      {"text": "Soft pretzel", "points": 14, "synonyms": ["pretzel", "pretzel bites"]},
      {"text": "Hot dog", "points": 10, "synonyms": ["hot dog", "corndog", "pizza"]},
      {"text": "Soda/ICEE", "points": 8, "synonyms": ["soda", "slushie", "icee", "drink", "coke"]},
      {"text": "Ice cream/Dippin' Dots", "points": 6, "synonyms": ["ice cream", "dippin dots", "chicken tenders", "fries"]}
    ]
  },
  {
    "question": "Name something that always seems to break right when you need it most.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Car", "points": 32, "synonyms": ["car", "vehicle", "truck", "battery", "tire"]},
      {"text": "Phone/Charger", "points": 24, "synonyms": ["phone", "charger", "screen", "laptop", "computer"]},
      {"text": "Printer", "points": 18, "synonyms": ["printer", "ink", "copier", "wifi", "internet"]},
      {"text": "Air conditioning/Heater", "points": 12, "synonyms": ["ac", "air conditioner", "heat", "furnace", "hvac"]},
      {"text": "Zipper/Shoelace", "points": 8, "synonyms": ["zipper", "shoelace", "button", "heel", "clothes"]},
      {"text": "Coffee maker/Appliance", "points": 6, "synonyms": ["coffee maker", "fridge", "washer", "dishwasher", "umbrella"]}
    ]
  },
  {
    "question": "Name a reason you might honk your car horn.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Green light/Not moving", "points": 42, "synonyms": ["green light", "texting", "not going", "stopped", "red light", "pay attention"]},
      {"text": "Someone cut you off", "points": 28, "synonyms": ["cut off", "merging", "swerving", "bad driver", "almost hit"]},
      {"text": "Saying hello/Goodbye", "points": 12, "synonyms": ["hi", "hello", "goodbye", "wave", "friend", "arrived", "outside"]},
      {"text": "Pedestrian/Animal in road", "points": 8, "synonyms": ["deer", "animal", "person", "pedestrian", "crossing"]},
      {"text": "Going too slow", "points": 6, "synonyms": ["slow", "speed up", "left lane", "blocking"]},
      {"text": "Accidentally hit it", "points": 4, "synonyms": ["accident", "mistake", "leaning", "celebrating"]}
    ]
  },
  {
    "question": "Name something people collect.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Coins/Currency", "points": 28, "synonyms": ["coins", "money", "quarters", "pennies", "bills"]},
      {"text": "Trading cards/Sports cards", "points": 24, "synonyms": ["cards", "baseball cards", "pokemon", "sports cards", "trading cards"]},
      {"text": "Shoes/Sneakers", "points": 18, "synonyms": ["shoes", "sneakers", "jordans", "kicks"]},
      {"text": "Stamps", "points": 12, "synonyms": ["stamps", "postage"]},
      {"text": "Vinyl records/Books", "points": 10, "synonyms": ["records", "vinyl", "books", "comics", "comic books"]},
      {"text": "Magnets/Souvenirs", "points": 8, "synonyms": ["magnets", "shot glasses", "souvenirs", "funko pops", "watches", "toys"]}
    ]
  },
  {
    "question": "Name a household item people borrow and never give back.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Tools", "points": 32, "synonyms": ["tools", "hammer", "drill", "screwdriver", "wrench", "ladder"]},
      {"text": "Tupperware/Food containers", "points": 26, "synonyms": ["tupperware", "containers", "bowls", "dishes", "pans"]},
      {"text": "Phone charger", "points": 16, "synonyms": ["charger", "cord", "cable"]},
      {"text": "Pens/Lighters", "points": 12, "synonyms": ["pen", "lighter", "scissors", "tape"]},
      {"text": "Clothes/Hoodies", "points": 8, "synonyms": ["clothes", "hoodie", "jacket", "shirt", "umbrella"]},
      {"text": "Books/Movies", "points": 6, "synonyms": ["book", "dvd", "video game", "sugar", "eggs"]}
    ]
  },
  {
    "question": "Name something you might do while waiting in a long line.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Look at your phone", "points": 50, "synonyms": ["phone", "text", "scroll", "games", "social media", "tiktok"]},
      {"text": "People watch", "points": 16, "synonyms": ["people watch", "look around", "stare", "eavesdrop"]},
      {"text": "Listen to music/Podcast", "points": 12, "synonyms": ["music", "podcast", "headphones", "airpods"]},
      {"text": "Sigh/Complain", "points": 10, "synonyms": ["complain", "sigh", "tap foot", "check watch", "annoyed"]},
      {"text": "Chat with someone", "points": 7, "synonyms": ["talk", "chat", "small talk", "call someone"]},
      {"text": "Read/Browse impulse items", "points": 5, "synonyms": ["read", "magazines", "shop", "candy", "stretch"]}
    ]
  },
  {
    "question": "Name a food people love to dip in ranch dressing.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Chicken wings/Tenders", "points": 36, "synonyms": ["wings", "chicken", "tenders", "nuggets", "buffalo wings"]},
      {"text": "Pizza", "points": 24, "synonyms": ["pizza", "crust"]},
      {"text": "Carrots/Celery", "points": 18, "synonyms": ["carrots", "celery", "veggies", "vegetables", "broccoli", "cucumbers"]},
      {"text": "French fries", "points": 12, "synonyms": ["fries", "french fries", "tater tots", "onion rings"]},
      {"text": "Mozzarella sticks", "points": 6, "synonyms": ["mozzarella sticks", "cheese sticks", "jalapeno poppers", "fried pickles"]},
      {"text": "Chips/Pretzels", "points": 4, "synonyms": ["chips", "pretzels", "breadsticks", "salad"]}
    ]
  },
  {
    "question": "Name something people check before leaving the house.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Keys/Wallet/Phone", "points": 38, "synonyms": ["keys", "wallet", "phone", "pockets", "purse"]},
      {"text": "Doors are locked", "points": 22, "synonyms": ["locks", "door", "locked", "garage", "windows"]},
      {"text": "Stove/Oven is off", "points": 16, "synonyms": ["stove", "oven", "appliances", "iron", "curling iron"]},
      {"text": "Lights are off", "points": 10, "synonyms": ["lights", "tv", "thermostat", "ac"]},
      {"text": "The weather", "points": 8, "synonyms": ["weather", "forecast", "rain", "temperature"]},
      {"text": "Their reflection/Outfit", "points": 6, "synonyms": ["mirror", "hair", "outfit", "teeth", "zipper", "pets"]}
    ]
  },
  {
    "question": "Name a classic board game that can start a family argument.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Monopoly", "points": 52, "synonyms": ["monopoly"]},
      {"text": "Uno", "points": 18, "synonyms": ["uno", "cards"]},
      {"text": "Scrabble", "points": 10, "synonyms": ["scrabble", "words"]},
      {"text": "Sorry!/Trouble", "points": 8, "synonyms": ["sorry", "trouble", "parcheesi"]},
      {"text": "Risk", "points": 7, "synonyms": ["risk", "catan", "settlers of catan"]},
      {"text": "Clue/Life", "points": 5, "synonyms": ["clue", "life", "pictionary", "taboo", "spades"]}
    ]
  },
  {
    "question": "Name something you might see at a backyard barbecue.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Grill/Smoker", "points": 34, "synonyms": ["grill", "bbq", "smoker", "charcoal", "propane"]},
      {"text": "Burgers/Hot dogs", "points": 26, "synonyms": ["burgers", "hot dogs", "ribs", "chicken", "steaks", "food"]},
      {"text": "Cooler of drinks/Beer", "points": 16, "synonyms": ["cooler", "beer", "drinks", "ice", "soda", "alcohol"]},
      {"text": "Lawn chairs/Picnic table", "points": 10, "synonyms": ["chairs", "table", "patio", "tent", "umbrella"]},
      {"text": "Cornhole/Lawn games", "points": 8, "synonyms": ["cornhole", "games", "horseshoes", "pool", "music", "speaker"]},
      {"text": "Bugs/Mosquitoes", "points": 6, "synonyms": ["bugs", "flies", "mosquitoes", "citronella", "smoke", "dogs"]}
    ]
  },
  {
    "question": "Name a reason someone might return an item to a store.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Wrong size/Doesn't fit", "points": 40, "synonyms": ["size", "doesnt fit", "too small", "too big", "tight", "loose"]},
      {"text": "Broken/Defective", "points": 26, "synonyms": ["broken", "damaged", "defective", "doesnt work", "ripped", "stained"]},
      {"text": "Changed their mind", "points": 14, "synonyms": ["changed mind", "didnt like it", "regret", "impulsive", "buyers remorse"]},
      {"text": "Unwanted gift/Duplicate", "points": 10, "synonyms": ["gift", "duplicate", "already have it", "ugly"]},
      {"text": "Found it cheaper elsewhere", "points": 6, "synonyms": ["cheaper", "price", "too expensive", "sale"]},
      {"text": "Missing parts", "points": 4, "synonyms": ["missing", "wrong color", "wrong item", "expired"]}
    ]
  },
  {
    "question": "Name something you might keep in the glove compartment of your car.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Registration/Insurance", "points": 40, "synonyms": ["registration", "insurance", "papers", "documents", "manual", "owners manual"]},
      {"text": "Napkins/Tissues", "points": 22, "synonyms": ["napkins", "tissues", "kleenex", "fast food napkins", "wipes"]},
      {"text": "Flashlight/Tools", "points": 14, "synonyms": ["flashlight", "tire gauge", "tools", "knife", "first aid"]},
      {"text": "Sunglasses", "points": 10, "synonyms": ["sunglasses", "glasses", "shades"]},
      {"text": "Pen/Notepad", "points": 8, "synonyms": ["pen", "pencil", "paper", "receipts"]},
      {"text": "Phone charger/Cords", "points": 6, "synonyms": ["charger", "cord", "cable", "gum", "mints", "change"]}
    ]
  },
  {
    "question": "Name a popular ice cream flavor.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Chocolate", "points": 32, "synonyms": ["chocolate", "fudge", "brownie"]},
      {"text": "Vanilla", "points": 28, "synonyms": ["vanilla", "french vanilla"]},
      {"text": "Strawberry", "points": 14, "synonyms": ["strawberry", "berry"]},
      {"text": "Mint chocolate chip", "points": 11, "synonyms": ["mint", "mint chip", "mint chocolate"]},
      {"text": "Cookies and cream", "points": 9, "synonyms": ["oreo", "cookies and cream", "cookie dough"]},
      {"text": "Butter pecan/Rocky road", "points": 6, "synonyms": ["butter pecan", "rocky road", "pistachio", "neapolitan", "coffee"]}
    ]
  },
  {
    "question": "Name something people do on a rainy Sunday afternoon.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Watch movies/Netflix", "points": 40, "synonyms": ["movies", "tv", "netflix", "binge watch", "couch", "shows"]},
      {"text": "Take a nap/Sleep", "points": 24, "synonyms": ["nap", "sleep", "stay in bed", "relax", "rest"]},
      {"text": "Read a book", "points": 12, "synonyms": ["read", "book", "magazine"]},
      {"text": "Play video games/Board games", "points": 10, "synonyms": ["video games", "gaming", "board games", "puzzles", "cards"]},
      {"text": "Cook/Bake", "points": 8, "synonyms": ["cook", "bake", "soup", "meal prep", "eat"]},
      {"text": "Clean/Do laundry", "points": 6, "synonyms": ["clean", "laundry", "chores", "organize"]}
    ]
  },
  {
    "question": "Name a famous superhero.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Superman", "points": 30, "synonyms": ["superman", "clark kent"]},
      {"text": "Batman", "points": 28, "synonyms": ["batman", "bruce wayne"]},
      {"text": "Spider-Man", "points": 20, "synonyms": ["spiderman", "spider-man", "peter parker"]},
      {"text": "Iron Man", "points": 10, "synonyms": ["iron man", "ironman", "tony stark"]},
      {"text": "Wonder Woman", "points": 7, "synonyms": ["wonder woman", "diana"]},
      {"text": "Captain America/Hulk", "points": 5, "synonyms": ["captain america", "hulk", "thor", "flash", "wolverine", "deadpool"]}
    ]
  },
  {
    "question": "Name something you might see in a dentist's waiting room.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Old magazines", "points": 38, "synonyms": ["magazines", "books", "newspapers", "reading"]},
      {"text": "TV", "points": 22, "synonyms": ["tv", "television", "screen"]},
      {"text": "Fish tank/Aquarium", "points": 16, "synonyms": ["fish tank", "aquarium", "fish"]},
      {"text": "Kids' toys/Play area", "points": 10, "synonyms": ["toys", "kids area", "blocks", "bead maze"]},
      {"text": "Posters of teeth", "points": 8, "synonyms": ["posters", "teeth", "diagrams", "brochures", "flyers"]},
      {"text": "Receptionist/Clipboards", "points": 6, "synonyms": ["receptionist", "front desk", "clipboard", "forms", "chairs", "hand sanitizer"]}
    ]
  },
  {
    "question": "Name a common New Year's resolution.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Lose weight/Exercise", "points": 44, "synonyms": ["lose weight", "gym", "work out", "exercise", "diet", "get in shape", "fitness"]},
      {"text": "Save money/Budget", "points": 22, "synonyms": ["save money", "money", "budget", "pay off debt", "finances"]},
      {"text": "Eat healthier", "points": 14, "synonyms": ["eat healthy", "healthy", "cook more", "cut sugar", "drink water"]},
      {"text": "Quit smoking/Drinking", "points": 10, "synonyms": ["quit smoking", "stop drinking", "dry january", "vaping", "less alcohol"]},
      {"text": "Travel more", "points": 5, "synonyms": ["travel", "vacation", "trips"]},
      {"text": "Read more/Learn a skill", "points": 5, "synonyms": ["read", "books", "learn", "hobby", "less screen time", "be organized"]}
    ]
  },
  {
    "question": "Name something people put on a hot dog.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Mustard", "points": 36, "synonyms": ["mustard", "yellow mustard", "spicy mustard"]},
      {"text": "Ketchup", "points": 30, "synonyms": ["ketchup", "catsup"]},
      {"text": "Relish", "points": 14, "synonyms": ["relish", "pickles"]},
      {"text": "Onions", "points": 9, "synonyms": ["onions", "chopped onions"]},
      {"text": "Chili/Cheese", "points": 7, "synonyms": ["chili", "cheese", "chili cheese"]},
      {"text": "Sauerkraut", "points": 4, "synonyms": ["sauerkraut", "kraut", "jalapenos", "bacon", "mayo"]}
    ]
  },
  {
    "question": "Name a sound that is guaranteed to wake you up from a deep sleep.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Alarm clock/Phone", "points": 36, "synonyms": ["alarm", "phone", "ringtone", "text", "call"]},
      {"text": "Dog barking/Pet throwing up", "points": 22, "synonyms": ["dog", "barking", "cat", "pet", "throwing up", "puking"]},
      {"text": "Smoke detector/Siren", "points": 16, "synonyms": ["smoke alarm", "fire alarm", "siren", "beep", "chirp"]},
      {"text": "Baby/Kid crying", "points": 12, "synonyms": ["baby", "crying", "kid", "child"]},
      {"text": "Thunder/Storm", "points": 8, "synonyms": ["thunder", "lightning", "storm", "rain"]},
      {"text": "Glass breaking/Loud bang", "points": 6, "synonyms": ["glass", "bang", "crash", "doorbell", "knocking", "snoring"]}
    ]
  },
  {
    "question": "Name something you might bring to the beach.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Towel", "points": 32, "synonyms": ["towel", "beach towel", "blanket"]},
      {"text": "Sunscreen", "points": 26, "synonyms": ["sunscreen", "sunblock", "lotion", "spf"]},
      {"text": "Umbrella/Tent", "points": 14, "synonyms": ["umbrella", "tent", "shade", "canopy"]},
      {"text": "Cooler/Drinks", "points": 12, "synonyms": ["cooler", "drinks", "water", "snacks", "food", "beer"]},
      {"text": "Beach chair", "points": 10, "synonyms": ["chair", "chairs", "lounge chair"]},
      {"text": "Sunglasses/Hat", "points": 6, "synonyms": ["sunglasses", "hat", "flip flops", "book", "speaker", "toys"]}
    ]
  },
  {
    "question": "Name a reason someone might get a speeding ticket.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Running late", "points": 42, "synonyms": ["late", "late for work", "rushing", "in a hurry", "overslept"]},
      {"text": "Not paying attention", "points": 20, "synonyms": ["not paying attention", "distracted", "missed sign", "speed trap", "music"]},
      {"text": "Bathroom emergency", "points": 16, "synonyms": ["bathroom", "pee", "poop", "stomach", "restroom"]},
      {"text": "Medical/Family emergency", "points": 12, "synonyms": ["emergency", "hospital", "baby", "labor", "sick"]},
      {"text": "Showing off/New car", "points": 6, "synonyms": ["showing off", "fast car", "racing", "sports car"]},
      {"text": "Going with the flow of traffic", "points": 4, "synonyms": ["traffic", "passing", "highway", "downhill"]}
    ]
  },
  {
    "question": "Name something people do at a wedding reception.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Dance", "points": 38, "synonyms": ["dance", "dancing", "cha cha slide", "first dance"]},
      {"text": "Drink/Hit the open bar", "points": 26, "synonyms": ["drink", "open bar", "alcohol", "champagne", "toast", "get drunk"]},
      {"text": "Eat dinner/Cake", "points": 18, "synonyms": ["eat", "food", "cake", "dinner", "buffet"]},
      {"text": "Take photos", "points": 8, "synonyms": ["photos", "pictures", "photo booth", "selfies"]},
      {"text": "Give speeches/Toasts", "points": 6, "synonyms": ["speech", "toast", "best man", "cry"]},
      {"text": "Catch the bouquet/Garter", "points": 4, "synonyms": ["bouquet", "garter", "mingle", "talk", "chat"]}
    ]
  },
  {
    "question": "Name a common phobia or fear.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Spiders/Bugs", "points": 32, "synonyms": ["spiders", "bugs", "insects", "arachnophobia", "roaches"]},
      {"text": "Heights", "points": 26, "synonyms": ["heights", "falling", "high places"]},
      {"text": "Snakes", "points": 16, "synonyms": ["snakes", "reptiles"]},
      {"text": "Public speaking", "points": 10, "synonyms": ["public speaking", "crowds", "stage fright", "speeches"]},
      {"text": "Tight spaces/Claustrophobia", "points": 9, "synonyms": ["claustrophobia", "tight spaces", "small spaces", "elevators"]},
      {"text": "Flying/Needles", "points": 7, "synonyms": ["flying", "airplanes", "needles", "shots", "clowns", "dark", "water", "sharks"]}
    ]
  },
  {
    "question": "Name something you might find in a junk drawer.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Batteries", "points": 30, "synonyms": ["batteries", "aa", "aaa"]},
      {"text": "Pens/Markers", "points": 22, "synonyms": ["pens", "pencils", "markers", "sharpie"]},
      {"text": "Tape/Rubber bands", "points": 18, "synonyms": ["tape", "rubber bands", "paperclips", "glue", "super glue"]},
      {"text": "Random keys", "points": 12, "synonyms": ["keys", "spare keys"]},
      {"text": "Scissors/Screwdriver", "points": 10, "synonyms": ["scissors", "tools", "screwdriver", "allen wrench", "measuring tape"]},
      {"text": "Takeout menus/Coupons", "points": 8, "synonyms": ["menus", "coupons", "receipts", "sauce packets", "cords", "chargers", "matches"]}
    ]
  },
  {
    "question": "Name a classic breakfast food.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Eggs", "points": 34, "synonyms": ["eggs", "scrambled", "omelet", "fried eggs"]},
      {"text": "Bacon/Sausage", "points": 28, "synonyms": ["bacon", "sausage", "ham"]},
      {"text": "Pancakes/Waffles", "points": 18, "synonyms": ["pancakes", "waffles", "french toast"]},
      {"text": "Toast/Bagel", "points": 9, "synonyms": ["toast", "bagel", "english muffin", "bread"]},
      {"text": "Cereal/Oatmeal", "points": 6, "synonyms": ["cereal", "oatmeal", "granola"]},
      {"text": "Hash browns/Home fries", "points": 5, "synonyms": ["hash browns", "potatoes", "home fries", "grits", "fruit"]}
    ]
  },
  {
    "question": "Name something people do when they get stuck in traffic.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Listen to music/Sing", "points": 34, "synonyms": ["music", "radio", "sing", "podcast", "audiobook"]},
      {"text": "Check their phone/Text", "points": 24, "synonyms": ["phone", "text", "scroll", "gps", "maps", "waze", "call"]},
      {"text": "Yell/Curse/Road rage", "points": 18, "synonyms": ["yell", "curse", "swear", "road rage", "honk", "complain"]},
      {"text": "Eat/Drink", "points": 10, "synonyms": ["eat", "snack", "coffee", "drink"]},
      {"text": "Look at other drivers", "points": 8, "synonyms": ["people watch", "stare", "look around", "change lanes"]},
      {"text": "Fix hair/Put on makeup", "points": 6, "synonyms": ["makeup", "hair", "mirror", "pick nose", "daydream"]}
    ]
  },
  {
    "question": "Name a popular fast-food restaurant.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "McDonald's", "points": 42, "synonyms": ["mcdonalds", "mickey ds"]},
      {"text": "Chick-fil-A", "points": 20, "synonyms": ["chickfila", "chick-fil-a", "chick fil a"]},
      {"text": "Wendy's", "points": 12, "synonyms": ["wendys"]},
      {"text": "Burger King", "points": 10, "synonyms": ["burger king", "bk"]},
      {"text": "Taco Bell", "points": 9, "synonyms": ["taco bell"]},
      {"text": "Subway/KFC", "points": 7, "synonyms": ["subway", "kfc", "popeyes", "chipotle", "in-n-out", "five guys", "sonic"]}
    ]
  },
  {
    "question": "Name something you might buy at a hardware store.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Tools/Hammer/Drill", "points": 32, "synonyms": ["tools", "hammer", "drill", "screwdriver", "wrench", "saw"]},
      {"text": "Paint/Brushes", "points": 24, "synonyms": ["paint", "brushes", "rollers", "primer", "stain"]},
      {"text": "Nails/Screws", "points": 18, "synonyms": ["nails", "screws", "bolts", "nuts", "hardware"]},
      {"text": "Lumber/Wood", "points": 12, "synonyms": ["wood", "lumber", "plywood", "2x4"]},
      {"text": "Lightbulbs/Batteries", "points": 8, "synonyms": ["lightbulbs", "bulbs", "batteries", "extension cord", "tape"]},
      {"text": "Plants/Garden supplies", "points": 6, "synonyms": ["plants", "soil", "mulch", "flowers", "lawnmower", "hose"]}
    ]
  },
  {
    "question": "Name a reason someone might cancel plans at the last minute.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Sick/Not feeling well", "points": 38, "synonyms": ["sick", "ill", "headache", "migraine", "stomach", "covid"]},
      {"text": "Too tired/Lazy", "points": 24, "synonyms": ["tired", "exhausted", "lazy", "dont feel like it", "want to stay home", "introvert"]},
      {"text": "Work/Stuck at the office", "points": 14, "synonyms": ["work", "boss", "overtime", "meeting", "deadline"]},
      {"text": "Family/Kid emergency", "points": 10, "synonyms": ["emergency", "family", "kids", "babysitter", "pet"]},
      {"text": "Bad weather", "points": 8, "synonyms": ["weather", "rain", "snow", "storm"]},
      {"text": "Car trouble/Broke", "points": 6, "synonyms": ["car", "flat tire", "no money", "broke", "traffic", "forgot"]}
    ]
  },
  {
    "question": "Name something you might hear at a sports stadium.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Cheering/Booing", "points": 38, "synonyms": ["cheering", "booing", "screaming", "yelling", "crowd", "roar"]},
      {"text": "Music/Organ/Chants", "points": 20, "synonyms": ["music", "organ", "chants", "defense", "national anthem", "songs"]},
      {"text": "Vendors yelling (Beer/Peanuts)", "points": 16, "synonyms": ["vendors", "beer", "hot dogs", "peanuts", "popcorn", "cold beer"]},
      {"text": "Ref's whistle/Buzzer", "points": 12, "synonyms": ["whistle", "buzzer", "horn", "referee"]},
      {"text": "Announcer/Commentator", "points": 8, "synonyms": ["announcer", "pa", "speaker", "play by play"]},
      {"text": "Cursing/Trash talk", "points": 6, "synonyms": ["cursing", "swearing", "trash talk", "heckling", "you suck"]}
    ]
  },
  {
    "question": "Name a fruit that is commonly put in a smoothie.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Banana", "points": 34, "synonyms": ["banana", "bananas"]},
      {"text": "Strawberry", "points": 30, "synonyms": ["strawberry", "strawberries"]},
      {"text": "Blueberry", "points": 14, "synonyms": ["blueberry", "blueberries", "berries"]},
      {"text": "Mango", "points": 10, "synonyms": ["mango", "mangoes"]},
      {"text": "Pineapple", "points": 7, "synonyms": ["pineapple"]},
      {"text": "Raspberry/Peach", "points": 5, "synonyms": ["raspberry", "peach", "avocado", "apple", "orange", "acai"]}
    ]
  },
  {
    "question": "Name something people do to cool down on a hot summer day.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Go swimming/Pool", "points": 38, "synonyms": ["swim", "swimming", "pool", "beach", "ocean", "lake", "sprinkler"]},
      {"text": "Turn on the AC/Fan", "points": 26, "synonyms": ["ac", "air conditioning", "fan", "stay inside"]},
      {"text": "Drink cold water/Beverage", "points": 16, "synonyms": ["water", "cold drink", "lemonade", "iced tea", "beer", "iced coffee"]},
      {"text": "Eat ice cream/Popsicle", "points": 10, "synonyms": ["ice cream", "popsicle", "italian ice", "slushie", "snow cone"]},
      {"text": "Take a cold shower", "points": 6, "synonyms": ["shower", "cold shower", "bath"]},
      {"text": "Sit in the shade", "points": 4, "synonyms": ["shade", "tree", "wet towel", "wear shorts"]}
    ]
  },
  {
    "question": "Name a classic cartoon character.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Mickey Mouse", "points": 32, "synonyms": ["mickey", "mickey mouse", "minnie"]},
      {"text": "Bugs Bunny", "points": 26, "synonyms": ["bugs", "bugs bunny", "looney tunes"]},
      {"text": "SpongeBob SquarePants", "points": 18, "synonyms": ["spongebob", "patrick"]},
      {"text": "Scooby-Doo", "points": 10, "synonyms": ["scooby", "scooby doo", "shaggy"]},
      {"text": "Tom and Jerry", "points": 8, "synonyms": ["tom", "jerry", "tom and jerry"]},
      {"text": "Homer Simpson/Donald Duck", "points": 6, "synonyms": ["homer", "bart", "simpsons", "donald duck", "daffy duck", "popeye", "flintstones"]}
    ]
  },
  {
    "question": "Name something you might find in a hotel room besides a bed.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "TV/Remote", "points": 32, "synonyms": ["tv", "television", "remote"]},
      {"text": "Coffee maker/Mini fridge", "points": 22, "synonyms": ["coffee maker", "fridge", "mini fridge", "microwave", "ice bucket"]},
      {"text": "Towels/Toiletries", "points": 18, "synonyms": ["towels", "shampoo", "soap", "hair dryer", "robe"]},
      {"text": "Desk/Lamp/Phone", "points": 12, "synonyms": ["desk", "chair", "lamp", "phone", "alarm clock"]},
      {"text": "Bible/Notepad", "points": 9, "synonyms": ["bible", "book", "notepad", "pen", "menu"]},
      {"text": "Iron/Ironing board", "points": 7, "synonyms": ["iron", "ironing board", "safe", "hangers", "closet", "mirror"]}
    ]
  },
  {
    "question": "Name a reason someone might stay up past midnight.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Watching TV/Bingeing a show", "points": 30, "synonyms": ["tv", "netflix", "movie", "show", "binge"]},
      {"text": "Partying/Out with friends", "points": 24, "synonyms": ["party", "bar", "club", "friends", "drinking", "new years"]},
      {"text": "Scrolling on their phone", "points": 18, "synonyms": ["phone", "tiktok", "social media", "youtube", "scrolling"]},
      {"text": "Playing video games", "points": 12, "synonyms": ["video games", "gaming", "xbox", "playstation", "pc"]},
      {"text": "Working/Studying", "points": 10, "synonyms": ["work", "studying", "homework", "cramming", "night shift"]},
      {"text": "Insomnia/Can't sleep", "points": 6, "synonyms": ["insomnia", "cant sleep", "overthinking", "stress", "baby", "crying"]}
    ]
  },
  {
    "question": "Name something people do right before taking a group photo.",
    "category": "Everyday Classics",
    "answers": [
      {"text": "Say 'Cheese!'", "points": 34, "synonyms": ["cheese", "say cheese", "smile"]},
      {"text": "Fix their hair/Clothes", "points": 24, "synonyms": ["hair", "fix hair", "clothes", "outfit", "makeup", "glasses"]},
      {"text": "Squeeze in/Squish together", "points": 18, "synonyms": ["squeeze", "move closer", "huddle", "put arms around", "tall in back"]},
      {"text": "Pose/Suck in their stomach", "points": 10, "synonyms": ["pose", "suck in", "peace sign", "duck face", "angle"]},
      {"text": "Put down their drinks", "points": 8, "synonyms": ["drinks", "hide drinks", "put down cups", "put away bags"]},
      {"text": "Ask who is taking it/Timer", "points": 6, "synonyms": ["timer", "countdown", "1 2 3", "ask stranger", "flash"]}
    ]
  },
  {
    "question": "Name the first thing people would buy if they won $10 million.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "A house/Mansion", "points": 38, "synonyms": ["house", "mansion", "home", "real estate", "property", "estate", "villa"]},
      {"text": "A new car/Sports car", "points": 24, "synonyms": ["car", "sports car", "lambo", "ferrari", "truck", "vehicle", "luxury car", "dream car"]},
      {"text": "Pay off debt/Bills", "points": 16, "synonyms": ["debt", "bills", "student loans", "mortgage", "loans", "credit cards", "pay off"]},
      {"text": "A vacation/Trip", "points": 10, "synonyms": ["vacation", "trip", "travel", "flight", "island", "cruise", "yacht", "jet"]},
      {"text": "Investments/Stocks", "points": 7, "synonyms": ["stocks", "invest", "investments", "savings", "crypto", "business", "gold"]},
      {"text": "Gifts for family", "points": 5, "synonyms": ["family", "mom", "parents", "gifts", "charity", "donate", "help family"]}
    ]
  },
  {
    "question": "Name something you'd grab first if a zombie apocalypse started right now.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Weapon/Gun/Bat", "points": 36, "synonyms": ["gun", "weapon", "knife", "bat", "baseball bat", "sword", "machete", "axe", "rifle"]},
      {"text": "Food/Water", "points": 24, "synonyms": ["food", "water", "snacks", "canned food", "supplies", "groceries"]},
      {"text": "Phone/Charger", "points": 16, "synonyms": ["phone", "cell phone", "charger", "power bank", "radio"]},
      {"text": "Car keys/Vehicle", "points": 12, "synonyms": ["keys", "car", "truck", "gas", "vehicle"]},
      {"text": "Family/Pets", "points": 7, "synonyms": ["family", "dog", "cat", "pet", "kids", "partner", "wife", "husband"]},
      {"text": "First aid kit/Meds", "points": 5, "synonyms": ["first aid", "meds", "medicine", "backpack", "flashlight", "clothes", "shoes"]}
    ]
  },
  {
    "question": "Name a superpower people would definitely abuse.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Invisibility", "points": 35, "synonyms": ["invisible", "invisibility", "turn invisible", "unseen"]},
      {"text": "Mind reading", "points": 25, "synonyms": ["read minds", "mind reading", "telepathy", "thoughts"]},
      {"text": "Stopping/Controlling time", "points": 18, "synonyms": ["stop time", "freeze time", "time travel", "control time", "pause time"]},
      {"text": "Teleportation", "points": 10, "synonyms": ["teleport", "teleportation", "blink", "instant travel"]},
      {"text": "Mind control", "points": 7, "synonyms": ["mind control", "hypnosis", "persuasion", "control people"]},
      {"text": "X-ray vision", "points": 5, "synonyms": ["x-ray", "xray", "see through walls", "see through clothes", "flying", "super strength"]}
    ]
  },
  {
    "question": "Name something you'd do if you were invisible for 24 hours.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Rob a bank/Steal money", "points": 34, "synonyms": ["rob a bank", "steal", "money", "cash", "bank", "free stuff", "shoplift"]},
      {"text": "Spy/Eavesdrop on people", "points": 24, "synonyms": ["spy", "eavesdrop", "listen", "follow", "stalk", "snoop", "secrets"]},
      {"text": "Sneak onto a plane/Event", "points": 16, "synonyms": ["plane", "travel", "concert", "movie", "vip", "backstage", "area 51", "white house"]},
      {"text": "Prank/Scare people", "points": 12, "synonyms": ["prank", "scare", "haunt", "ghost", "mess with people", "trip people"]},
      {"text": "Sneak into a celebrity's house", "points": 8, "synonyms": ["celebrity", "mansion", "famous", "crush", "ex"]},
      {"text": "Walk around naked", "points": 6, "synonyms": ["naked", "nude", "no clothes", "streak", "sleep", "skip work"]}
    ]
  },
  {
    "question": "Name a celebrity or historical figure people would want to have dinner with.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Barack Obama", "points": 28, "synonyms": ["obama", "barack obama", "michelle obama", "president"]},
      {"text": "Jesus/Religious figure", "points": 22, "synonyms": ["jesus", "god", "buddha", "moses"]},
      {"text": "Taylor Swift/Beyoncé", "points": 18, "synonyms": ["taylor swift", "beyonce", "rihanna", "drake", "michael jackson", "elvis"]},
      {"text": "Albert Einstein", "points": 14, "synonyms": ["einstein", "albert einstein", "tesla", "newton", "da vinci"]},
      {"text": "Michael Jordan/LeBron", "points": 10, "synonyms": ["michael jordan", "jordan", "lebron", "kobe", "tom brady", "muhammad ali"]},
      {"text": "Marilyn Monroe/MLK Jr.", "points": 8, "synonyms": ["marilyn monroe", "mlk", "martin luther king", "lincoln", "abraham lincoln", "oprah", "keanu reeves"]}
    ]
  },
  {
    "question": "Name something you'd bring if you were stranded on a deserted island.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Knife/Machete", "points": 32, "synonyms": ["knife", "pocket knife", "machete", "axe", "tools", "swiss army knife"]},
      {"text": "Lighter/Matches", "points": 24, "synonyms": ["lighter", "matches", "fire", "flint", "fire starter"]},
      {"text": "Water/Water filter", "points": 18, "synonyms": ["water", "filter", "lifestraw", "bottle", "food"]},
      {"text": "Phone/Satellite phone", "points": 12, "synonyms": ["phone", "satellite phone", "radio", "gps", "flare gun"]},
      {"text": "Boat/Raft", "points": 8, "synonyms": ["boat", "raft", "kayak", "yacht", "helicopter"]},
      {"text": "Tent/Blanket/Tarp", "points": 6, "synonyms": ["tent", "blanket", "tarp", "rope", "sunscreen", "book", "music", "alcohol"]}
    ]
  },
  {
    "question": "Name a rule you'd make if you were President for a day.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "4-day workweek/Extra holiday", "points": 34, "synonyms": ["4 day workweek", "four day", "holiday", "no work", "longer weekend", "day off", "fridays off"]},
      {"text": "No taxes/Lower taxes", "points": 24, "synonyms": ["no taxes", "taxes", "lower taxes", "free money", "stimulus"]},
      {"text": "Free healthcare/College", "points": 16, "synonyms": ["healthcare", "free college", "cancel student debt", "education", "free food"]},
      {"text": "Lower gas/Grocery prices", "points": 12, "synonyms": ["gas prices", "groceries", "inflation", "rent", "cheaper housing"]},
      {"text": "Free naps/Later start times", "points": 8, "synonyms": ["naps", "sleep", "no daylight saving", "start work later"]},
      {"text": "Harsher penalties for bad drivers", "points": 6, "synonyms": ["bad drivers", "traffic", "speed limits", "no speed limit", "legalize weed"]}
    ]
  },
  {
    "question": "Name something people would do if they knew the world was ending tomorrow.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Spend time with family", "points": 36, "synonyms": ["family", "loved ones", "friends", "call mom", "hug", "say goodbye", "i love you"]},
      {"text": "Eat/Drink everything", "points": 22, "synonyms": ["eat", "drink", "party", "get drunk", "feast", "junk food", "alcohol"]},
      {"text": "Have sex", "points": 16, "synonyms": ["sex", "hook up", "orgy", "make love", "sleep with crush"]},
      {"text": "Spend all their money", "points": 12, "synonyms": ["spend money", "max out cards", "shopping", "buy", "steal", "rob"]},
      {"text": "Pray/Confess secrets", "points": 8, "synonyms": ["pray", "church", "god", "confess", "secrets", "apologize"]},
      {"text": "Quit their job/Travel", "points": 6, "synonyms": ["quit job", "skip work", "travel", "bucket list", "skydiving", "cry"]}
    ]
  },
  {
    "question": "Name a place you'd go if you could teleport anywhere right now.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "A tropical beach/Hawaii", "points": 38, "synonyms": ["beach", "hawaii", "caribbean", "bahamas", "maldives", "jamaica", "bora bora", "island"]},
      {"text": "Italy/Europe", "points": 24, "synonyms": ["italy", "paris", "france", "europe", "greece", "rome", "london", "spain"]},
      {"text": "Japan/Tokyo", "points": 14, "synonyms": ["japan", "tokyo", "asia", "thailand", "bali"]},
      {"text": "Home/My bed", "points": 10, "synonyms": ["home", "bed", "couch", "house", "family"]},
      {"text": "Las Vegas/New York", "points": 8, "synonyms": ["vegas", "las vegas", "new york", "nyc", "miami", "disney"]},
      {"text": "Inside a bank vault", "points": 6, "synonyms": ["bank", "vault", "moon", "space", "mars", "area 51"]}
    ]
  },
  {
    "question": "Name something you'd tell your 18-year-old self if you had a time machine.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Buy Bitcoin/Invest early", "points": 36, "synonyms": ["bitcoin", "crypto", "invest", "apple", "amazon", "stocks", "lottery numbers", "save money"]},
      {"text": "Don't date that ex", "points": 24, "synonyms": ["ex", "dump them", "dont date", "stay single", "heartbreak", "red flags"]},
      {"text": "Stop caring what people think", "points": 16, "synonyms": ["dont care", "confidence", "be yourself", "relax", "enjoy life", "have fun"]},
      {"text": "Take care of your health/Back", "points": 10, "synonyms": ["health", "work out", "sunscreen", "floss", "sleep", "drink less", "back"]},
      {"text": "Pick a different major/Career", "points": 8, "synonyms": ["college", "major", "job", "career", "study", "work harder"]},
      {"text": "Spend more time with family", "points": 6, "synonyms": ["family", "parents", "grandparents", "travel", "take risks"]}
    ]
  },
  {
    "question": "Name an animal you'd least want to be locked in a room with.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Bear", "points": 30, "synonyms": ["bear", "grizzly", "polar bear"]},
      {"text": "Lion/Tiger", "points": 26, "synonyms": ["lion", "tiger", "panther", "big cat", "leopard"]},
      {"text": "Venomous snake", "points": 18, "synonyms": ["snake", "cobra", "rattlesnake", "python", "anaconda"]},
      {"text": "Skunk", "points": 12, "synonyms": ["skunk", "stinky"]},
      {"text": "Alligator/Crocodile", "points": 8, "synonyms": ["alligator", "gator", "crocodile", "croc", "hippo"]},
      {"text": "Spider/Swarm of bees", "points": 6, "synonyms": ["spider", "tarantula", "bees", "wasps", "hornet", "gorilla", "chimp", "shark"]}
    ]
  },
  {
    "question": "Name something people would do if they suddenly woke up as a billionaire.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Quit their job", "points": 40, "synonyms": ["quit", "quit job", "resign", "walk out", "retire", "call boss"]},
      {"text": "Buy a mansion/Island", "points": 22, "synonyms": ["mansion", "house", "island", "private jet", "yacht", "penthouse"]},
      {"text": "Travel the world", "points": 14, "synonyms": ["travel", "vacation", "first class", "fly", "trip"]},
      {"text": "Take care of family/Friends", "points": 12, "synonyms": ["family", "parents", "friends", "pay off", "give money", "charity"]},
      {"text": "Hire a chef/Staff", "points": 7, "synonyms": ["chef", "maid", "driver", "assistant", "security", "lawyer", "accountant"]},
      {"text": "Go back to sleep", "points": 5, "synonyms": ["sleep", "nap", "relax", "disappear", "change number"]}
    ]
  },
  {
    "question": "Name a skill you'd instantly download into your brain Matrix-style.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Speaking every language", "points": 36, "synonyms": ["languages", "spanish", "french", "fluent", "bilingual", "multilingual"]},
      {"text": "Martial arts/Kung Fu", "points": 22, "synonyms": ["kung fu", "karate", "martial arts", "fighting", "jiu jitsu", "boxing", "self defense"]},
      {"text": "Playing an instrument", "points": 16, "synonyms": ["piano", "guitar", "music", "instrument", "drums", "singing"]},
      {"text": "Coding/Hacking", "points": 12, "synonyms": ["coding", "programming", "hacking", "computers", "tech", "math", "finance"]},
      {"text": "Cooking like a master chef", "points": 8, "synonyms": ["cooking", "chef", "baking", "culinary"]},
      {"text": "Flying a plane/Helicopter", "points": 6, "synonyms": ["fly", "pilot", "plane", "helicopter", "driving", "dancing", "surgery"]}
    ]
  },
  {
    "question": "Name something you'd do if you found a briefcase full of cash on the street.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Take it/Run home", "points": 42, "synonyms": ["keep it", "take it", "grab it", "run", "hide it", "mine"]},
      {"text": "Look around for cameras", "points": 24, "synonyms": ["cameras", "prank", "look around", "trap", "check", "paranoia", "cartel"]},
      {"text": "Turn it in to the police", "points": 14, "synonyms": ["police", "cops", "turn it in", "return it", "lost and found"]},
      {"text": "Check for a tracker", "points": 10, "synonyms": ["tracker", "gps", "airtag", "dye pack", "fake money", "counterfeit"]},
      {"text": "Leave it alone/Walk away", "points": 6, "synonyms": ["leave it", "walk away", "ignore it", "nothing", "dont touch"]},
      {"text": "Count it/Spend it slowly", "points": 4, "synonyms": ["count it", "spend it", "buy groceries", "cash", "split it"]}
    ]
  },
  {
    "question": "Name a movie or TV universe people would love to live in.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Harry Potter", "points": 36, "synonyms": ["harry potter", "hogwarts", "wizarding world", "magic"]},
      {"text": "Star Wars", "points": 22, "synonyms": ["star wars", "jedi", "galaxy"]},
      {"text": "Marvel/Avengers", "points": 16, "synonyms": ["marvel", "mcu", "avengers", "superheroes", "dc"]},
      {"text": "Pokemon", "points": 12, "synonyms": ["pokemon", "anime", "naruto", "dragon ball"]},
      {"text": "Lord of the Rings", "points": 8, "synonyms": ["lord of the rings", "lotr", "middle earth", "shire", "hobbit"]},
      {"text": "Friends/Disney", "points": 6, "synonyms": ["friends", "disney", "pixar", "avatar", "pandora", "star trek", "bridgerton"]}
    ]
  },
  {
    "question": "Name something you'd ask a genie for with your first wish.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Unlimited money/Wealth", "points": 42, "synonyms": ["money", "rich", "billionaire", "wealth", "cash", "unlimited money"]},
      {"text": "More wishes", "points": 24, "synonyms": ["more wishes", "infinite wishes", "unlimited wishes", "extra wishes"]},
      {"text": "Perfect health/Long life", "points": 14, "synonyms": ["health", "immortality", "cure", "healthy", "never get sick", "live forever"]},
      {"text": "World peace", "points": 8, "synonyms": ["world peace", "peace", "end hunger", "no war"]},
      {"text": "True love/Happiness", "points": 7, "synonyms": ["love", "soulmate", "happiness", "happy", "family"]},
      {"text": "Superpowers/Good looks", "points": 5, "synonyms": ["superpowers", "fly", "attractive", "skinny", "fit", "youth"]}
    ]
  },
  {
    "question": "Name a reason you'd immediately walk out of a haunted house.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Someone touches/Grabs you", "points": 34, "synonyms": ["touched", "grabbed", "hands on me", "chased", "actor"]},
      {"text": "Chainsaw/Clown", "points": 24, "synonyms": ["chainsaw", "clown", "clowns", "mask", "killer"]},
      {"text": "Pitch black/Can't see", "points": 16, "synonyms": ["dark", "pitch black", "cant see", "strobe lights", "fog", "tight space"]},
      {"text": "Real ghost/Cold spot", "points": 12, "synonyms": ["real ghost", "ghost", "spirit", "door slams", "whisper", "haunted"]},
      {"text": "Too loud/Jump scares", "points": 8, "synonyms": ["jump scare", "loud", "screaming", "heart attack", "scared"]},
      {"text": "Peed my pants/Crying", "points": 6, "synonyms": ["peed", "pissed", "crying", "panic attack", "bugs", "spiders"]}
    ]
  },
  {
    "question": "Name something people would do if the internet permanently shut down tomorrow.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Panic/Freak out", "points": 32, "synonyms": ["panic", "freak out", "cry", "lose their minds", "riot", "chaos"]},
      {"text": "Go outside/Touch grass", "points": 24, "synonyms": ["go outside", "walk", "nature", "park", "touch grass", "exercise"]},
      {"text": "Read books/Board games", "points": 16, "synonyms": ["read", "books", "board games", "cards", "puzzles", "library"]},
      {"text": "Actually talk to people", "points": 14, "synonyms": ["talk", "socialize", "hang out", "visit friends", "call", "conversation"]},
      {"text": "Withdraw cash from the bank", "points": 8, "synonyms": ["bank", "cash", "atm", "money", "stock up", "groceries"]},
      {"text": "Restart the router anyway", "points": 6, "synonyms": ["restart router", "unplug", "check wifi", "watch dvds", "sleep"]}
    ]
  },
  {
    "question": "Name a job you'd never do, even for $1 million a year.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Sewer/Porta-potty cleaner", "points": 30, "synonyms": ["sewer", "porta potty", "poop", "plumber", "janitor", "trash", "garbage"]},
      {"text": "Skyscraper window washer/Tower climber", "points": 24, "synonyms": ["window washer", "heights", "tower climber", "construction", "roofer"]},
      {"text": "Deep-sea diver/Miner", "points": 16, "synonyms": ["diver", "underwater", "submarine", "miner", "coal miner", "oil rig"]},
      {"text": "Surgeon/Mortician", "points": 12, "synonyms": ["surgeon", "doctor", "mortician", "coroner", "embalmer", "crime scene"]},
      {"text": "Politician/President", "points": 10, "synonyms": ["politician", "president", "cop", "police", "prison guard", "soldier"]},
      {"text": "Exterminator/Snake handler", "points": 8, "synonyms": ["exterminator", "bugs", "spiders", "snake", "zoo", "alligator", "teacher"]}
    ]
  },
  {
    "question": "Name something you'd do if you accidentally broke an expensive item in a store.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Walk away/Run out", "points": 38, "synonyms": ["walk away", "run", "leave", "flee", "bolt", "act natural", "pretend it wasnt me"]},
      {"text": "Put it back on the shelf", "points": 24, "synonyms": ["put it back", "hide it", "shelf", "fix it", "cover it up"]},
      {"text": "Tell an employee/Apologize", "points": 18, "synonyms": ["tell someone", "employee", "manager", "apologize", "own up", "honest"]},
      {"text": "Offer to pay for it", "points": 10, "synonyms": ["pay", "buy it", "pay for it"]},
      {"text": "Blame someone else/Kid", "points": 6, "synonyms": ["blame", "kid", "friend", "was already broken"]},
      {"text": "Freeze in panic", "points": 4, "synonyms": ["freeze", "panic", "cry", "stare", "look around"]}
    ]
  },
  {
    "question": "Name a person you'd call first if you got arrested.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Mom/Parents", "points": 38, "synonyms": ["mom", "dad", "parents", "mother", "father"]},
      {"text": "Spouse/Partner", "points": 24, "synonyms": ["wife", "husband", "fiance", "fiancee", "girlfriend", "boyfriend", "partner"]},
      {"text": "Best friend", "points": 18, "synonyms": ["best friend", "friend", "bro", "homie", "buddy"]},
      {"text": "A lawyer", "points": 10, "synonyms": ["lawyer", "attorney", "saul"]},
      {"text": "Sibling (Brother/Sister)", "points": 6, "synonyms": ["brother", "sister", "sibling"]},
      {"text": "Bail bondsman/Boss", "points": 4, "synonyms": ["bail", "bondsman", "boss", "rich uncle", "nobody"]}
    ]
  },
  {
    "question": "Name something you'd do if you swapped bodies with your partner for a day.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Check out their body/Naked", "points": 38, "synonyms": ["naked", "mirror", "boobs", "penis", "body", "touch", "pee standing up", "sex"]},
      {"text": "Read their texts/Phone", "points": 22, "synonyms": ["phone", "texts", "messages", "dms", "search history", "snoop"]},
      {"text": "Go to their job", "points": 16, "synonyms": ["work", "job", "office", "coworkers", "boss"]},
      {"text": "Go shopping/Spend money", "points": 10, "synonyms": ["shop", "spend money", "buy stuff", "clothes", "try on clothes"]},
      {"text": "Eat whatever they want/Work out", "points": 8, "synonyms": ["eat", "gym", "work out", "lift weights", "sleep"]},
      {"text": "Talk to their friends/Family", "points": 6, "synonyms": ["friends", "family", "mom", "gossip", "prank"]}
    ]
  },
  {
    "question": "Name a place you'd hide if you were playing hide-and-seek for $100,000.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "In the woods/Forest", "points": 32, "synonyms": ["woods", "forest", "trees", "bushes", "mountains", "outside"]},
      {"text": "Attic/Crawlspace", "points": 24, "synonyms": ["attic", "crawlspace", "basement", "ceiling", "vents", "roof"]},
      {"text": "Closet/Under a bed", "points": 16, "synonyms": ["closet", "under bed", "laundry pile", "cabinet", "pantry"]},
      {"text": "Trunk of a car", "points": 12, "synonyms": ["car", "trunk", "garage", "shed", "dumpster"]},
      {"text": "A hotel/Another state", "points": 10, "synonyms": ["hotel", "airport", "another city", "another state", "friends house", "walmart"]},
      {"text": "In plain sight/Disguise", "points": 6, "synonyms": ["disguise", "plain sight", "crowd", "mall", "library"]}
    ]
  },
  {
    "question": "Name something you'd immediately quit doing if you never had to work again.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Setting an alarm clock", "points": 36, "synonyms": ["alarm", "waking up early", "alarm clock", "mornings", "6am"]},
      {"text": "Checking emails/Slack", "points": 22, "synonyms": ["email", "emails", "slack", "teams", "zoom", "meetings", "linkedin"]},
      {"text": "Commuting/Sitting in traffic", "points": 16, "synonyms": ["traffic", "commute", "driving", "rush hour", "train"]},
      {"text": "Cleaning/Chores", "points": 12, "synonyms": ["cleaning", "laundry", "dishes", "chores", "cooking", "grocery shopping"]},
      {"text": "Wearing business clothes", "points": 8, "synonyms": ["suits", "ties", "heels", "dress clothes", "uniform", "ironing", "pants"]},
      {"text": "Being nice to annoying people", "points": 6, "synonyms": ["fake nice", "small talk", "customers", "boss", "budgeting"]}
    ]
  },
  {
    "question": "Name a wild animal people wish they could keep as a pet.",
    "category": "Hypotheticals & Chaos",
    "answers": [
      {"text": "Lion/Tiger", "points": 32, "synonyms": ["lion", "tiger", "cheetah", "panther", "big cat", "cub"]},
      {"text": "Monkey/Chimpanzee", "points": 24, "synonyms": ["monkey", "chimp", "ape", "gorilla", "lemur"]},
      {"text": "Bear/Panda", "points": 18, "synonyms": ["bear", "panda", "red panda", "koala", "grizzly"]},
      {"text": "Wolf/Fox", "points": 12, "synonyms": ["wolf", "fox", "coyote"]},
      {"text": "Raccoon/Otter", "points": 8, "synonyms": ["raccoon", "otter", "squirrel", "capybara", "sloth", "penguin"]},
      {"text": "Elephant/Dolphin", "points": 6, "synonyms": ["elephant", "dolphin", "giraffe", "kangaroo", "deer", "owl"]}
    ]
  },
  {
    "question": "Name something people do on social media that makes you instantly unfollow them.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Constant political rants", "points": 34, "synonyms": ["politics", "political", "rants", "arguing", "opinions", "preaching"]},
      {"text": "Selling MLM/Scam products", "points": 22, "synonyms": ["mlm", "pyramid scheme", "selling", "spam", "promo", "crypto", "ads"]},
      {"text": "Posting way too much/Selfies", "points": 16, "synonyms": ["posting too much", "selfies", "spamming", "stories", "attention seeking", "bragging"]},
      {"text": "Vaguebooking/Fishing for sympathy", "points": 12, "synonyms": ["vague", "drama", "complaining", "crying", "attention", "dm me", "negativity"]},
      {"text": "Oversharing relationship/Kids", "points": 10, "synonyms": ["kids", "baby", "relationship", "pda", "couple", "tmi", "breakup"]},
      {"text": "Fake/Staged content", "points": 6, "synonyms": ["fake", "filters", "cringe", "pranks", "influencer", "gym selfies"]}
    ]
  },
  {
    "question": "Name a reason someone leaves a text message on 'Read.'",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Forgot to reply/Got distracted", "points": 36, "synonyms": ["forgot", "distracted", "replied in my head", "adhd", "later"]},
      {"text": "Busy/At work/Driving", "points": 24, "synonyms": ["busy", "work", "driving", "meeting", "no time"]},
      {"text": "Don't want to talk/Ignoring you", "points": 18, "synonyms": ["ignoring", "mad", "annoyed", "dont like you", "ghosting", "avoiding"]},
      {"text": "Didn't know how to respond", "points": 10, "synonyms": ["nothing to say", "awkward", "end of conversation", "dry text", "thumbs up"]},
      {"text": "Opened it by accident", "points": 7, "synonyms": ["accident", "pocket", "clicked it", "curious"]},
      {"text": "Too tired/Low social battery", "points": 5, "synonyms": ["tired", "lazy", "social battery", "asleep", "drained"]}
    ]
  },
  {
    "question": "Name something people do on a plane that drives everyone crazy.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Take off their shoes/Socks", "points": 30, "synonyms": ["barefoot", "shoes off", "socks", "stinky feet", "feet"]},
      {"text": "Recline their seat all the way", "points": 24, "synonyms": ["recline", "lean back", "seat back"]},
      {"text": "Kick the back of your seat", "points": 18, "synonyms": ["kick", "kicking seat", "kids", "crying baby", "bumping"]},
      {"text": "Play videos/Music without headphones", "points": 12, "synonyms": ["no headphones", "loud", "speaker", "talking loud", "videos", "phone"]},
      {"text": "Hog the armrest/Middle seat", "points": 10, "synonyms": ["armrest", "manspreading", "elbow", "space", "overhead bin"]},
      {"text": "Stand up immediately/Clap", "points": 6, "synonyms": ["stand up", "rush off", "clap", "clapping", "smelly food", "fart"]}
    ]
  },
  {
    "question": "Name a password people use way too often.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "123456", "points": 34, "synonyms": ["1234", "12345", "123456", "12345678", "numbers"]},
      {"text": "Password", "points": 28, "synonyms": ["password", "password1", "password123"]},
      {"text": "Their pet's name", "points": 14, "synonyms": ["pet", "dog", "cat", "dogs name"]},
      {"text": "Their birthday/Kids' names", "points": 12, "synonyms": ["birthday", "dob", "kids", "name", "anniversary", "year"]},
      {"text": "Qwerty", "points": 7, "synonyms": ["qwerty", "asdf", "abc123", "admin"]},
      {"text": "Iloveyou/Sports team", "points": 5, "synonyms": ["iloveyou", "love", "sports", "team", "welcome", "letmein"]}
    ]
  },
  {
    "question": "Name something people lie about in their group chat.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "'On my way!' (Still at home)", "points": 40, "synonyms": ["omw", "on my way", "leaving now", "almost there", "5 minutes", "running late"]},
      {"text": "Why they're canceling plans", "points": 24, "synonyms": ["canceling", "flaking", "sick", "busy", "excuse", "tired"]},
      {"text": "Not seeing the message", "points": 14, "synonyms": ["didnt see", "missed it", "just saw this", "phone died", "muted"]},
      {"text": "Laughing ('LOL' with a straight face)", "points": 10, "synonyms": ["lol", "lmao", "funny", "laughing", "dying"]},
      {"text": "Being 'totally fine' after a breakup", "points": 7, "synonyms": ["fine", "over my ex", "not texting ex", "not drunk", "going to bed"]},
      {"text": "Being down for a trip", "points": 5, "synonyms": ["trip", "vacation", "definitely going", "count me in", "money"]}
    ]
  },
  {
    "question": "Name a habit of a terrible roommate.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Never washing dishes/Messy", "points": 36, "synonyms": ["dishes", "sink", "messy", "dirty", "never cleans", "trash", "slob"]},
      {"text": "Eating your food", "points": 22, "synonyms": ["food", "stealing food", "fridge", "groceries", "eating my stuff"]},
      {"text": "Being loud late at night", "points": 16, "synonyms": ["loud", "noise", "music", "tv", "gaming", "parties", "yelling"]},
      {"text": "Paying rent/Bills late", "points": 12, "synonyms": ["rent", "bills", "money", "late", "broke", "utilities"]},
      {"text": "Always having guests/Partner over", "points": 8, "synonyms": ["guests", "boyfriend", "girlfriend", "partner", "people over", "sex"]},
      {"text": "Hogging the bathroom/No TP", "points": 6, "synonyms": ["bathroom", "toilet paper", "hair", "thermostat", "borrowing clothes"]}
    ]
  },
  {
    "question": "Name something that immediately gives you the 'ick' in public.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Being rude to servers/Staff", "points": 32, "synonyms": ["rude", "waiter", "server", "cashier", "karen", "yelling", "bad tipper"]},
      {"text": "Chewing loudly/Mouth open", "points": 22, "synonyms": ["chewing", "eating loud", "mouth open", "smacking", "slurping", "spitting"]},
      {"text": "Speakerphone/FaceTime in public", "points": 18, "synonyms": ["speakerphone", "facetime", "loud phone", "tiktok loud", "music"]},
      {"text": "Bad hygiene/Body odor", "points": 12, "synonyms": ["smell", "bo", "stinky", "dirty", "greasy", "bad breath", "picking nose"]},
      {"text": "Too much PDA", "points": 10, "synonyms": ["pda", "making out", "kissing", "groping"]},
      {"text": "Littering/Not returning cart", "points": 6, "synonyms": ["littering", "trash", "shopping cart", "cutting in line", "filming tiktok"]}
    ]
  },
  {
    "question": "Name a reason you might give a restaurant a 1-star review.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Terrible/Rude service", "points": 34, "synonyms": ["rude", "bad service", "waiter", "server", "slow", "ignored", "attitude"]},
      {"text": "Hair/Bug in the food", "points": 26, "synonyms": ["hair", "bug", "roach", "fly", "dirty", "gross", "unsanitary"]},
      {"text": "Cold/Raw/Bad food", "points": 18, "synonyms": ["cold food", "raw", "undercooked", "burnt", "bad food", "food poisoning", "gross"]},
      {"text": "Way too long of a wait", "points": 10, "synonyms": ["wait", "slow", "hour", "reservation", "wrong order"]},
      {"text": "Overpriced/Hidden fees", "points": 7, "synonyms": ["expensive", "overpriced", "fees", "rip off", "small portions", "bill"]},
      {"text": "Dirty bathroom/Tables", "points": 5, "synonyms": ["dirty", "bathroom", "sticky", "smell", "loud"]}
    ]
  },
  {
    "question": "Name something people do at the gym that is super annoying.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Not wiping down equipment", "points": 30, "synonyms": ["sweat", "not wiping", "dirty", "hygiene", "clean"]},
      {"text": "Sitting on a machine scrolling their phone", "points": 26, "synonyms": ["phone", "texting", "hogging", "camping", "sitting", "scrolling"]},
      {"text": "Not re-racking weights", "points": 18, "synonyms": ["weights", "re-rack", "putting away", "dumbbells", "plates", "leaving weights"]},
      {"text": "Filming themselves/Tripods", "points": 12, "synonyms": ["filming", "camera", "tripod", "tiktok", "influencer", "selfies"]},
      {"text": "Grunting/Dropping weights loudly", "points": 8, "synonyms": ["grunting", "yelling", "dropping weights", "slamming", "loud"]},
      {"text": "Staring/Giving unsolicited advice", "points": 6, "synonyms": ["staring", "creepy", "advice", "hitting on", "flirting", "smelling bad"]}
    ]
  },
  {
    "question": "Name a subscription people forget they are still paying for.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Streaming service (Netflix/Hulu)", "points": 38, "synonyms": ["netflix", "hulu", "disney", "hbo", "max", "paramount", "peacock", "streaming", "apple tv"]},
      {"text": "Gym membership", "points": 26, "synonyms": ["gym", "planet fitness", "fitness", "peloton"]},
      {"text": "Amazon Prime", "points": 14, "synonyms": ["amazon", "prime"]},
      {"text": "Music app (Spotify/Apple)", "points": 10, "synonyms": ["spotify", "apple music", "pandora", "siriusxm", "audible"]},
      {"text": "Free trial they forgot to cancel", "points": 7, "synonyms": ["free trial", "trial", "app", "icloud", "storage", "software"]},
      {"text": "Meal kit/Subscription box", "points": 5, "synonyms": ["hellofresh", "box", "magazine", "newspaper", "dating app", "onlyfans"]}
    ]
  },
  {
    "question": "Name something drivers do on the highway that causes instant road rage.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Not using a turn signal", "points": 32, "synonyms": ["turn signal", "blinker", "cutting off", "merging", "swerving"]},
      {"text": "Driving slow in the left lane", "points": 26, "synonyms": ["left lane", "slow", "fast lane", "passing lane", "hogging"]},
      {"text": "Tailgating", "points": 18, "synonyms": ["tailgating", "riding bumper", "too close", "high beams"]},
      {"text": "Texting/Looking at their phone", "points": 12, "synonyms": ["texting", "phone", "distracted", "swerving"]},
      {"text": "Speeding up when you try to pass", "points": 7, "synonyms": ["speeding up", "wont let you merge", "brake checking", "weaving"]},
      {"text": "Cutting in at the last second", "points": 5, "synonyms": ["exit", "last second", "cutting", "shoulder", "honking"]}
    ]
  },
  {
    "question": "Name an excuse people use on a Zoom or work video call.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "'Sorry, I was on mute'", "points": 34, "synonyms": ["mute", "muted", "mic", "audio", "cant hear"]},
      {"text": "'My Wi-Fi is acting up'", "points": 26, "synonyms": ["wifi", "internet", "lagging", "frozen", "connection", "glitching"]},
      {"text": "'My camera isn't working'", "points": 16, "synonyms": ["camera", "video", "off camera", "bandwidth"]},
      {"text": "'I have to jump to another call'", "points": 12, "synonyms": ["another call", "hard stop", "meeting", "gotta go", "drop off"]},
      {"text": "'Sorry, my dog/kid is loud'", "points": 7, "synonyms": ["dog", "barking", "kid", "baby", "delivery", "doorbell", "background"]},
      {"text": "'Can you repeat that?' (Wasn't listening)", "points": 5, "synonyms": ["repeat", "missed that", "cut out", "zoned out", "multitasking"]}
    ]
  },
  {
    "question": "Name something people do at a concert that ruins it for everyone else.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Hold their phone up recording", "points": 34, "synonyms": ["phone", "recording", "filming", "blocking view", "flash", "screen"]},
      {"text": "Talk loudly through the songs", "points": 22, "synonyms": ["talking", "chatting", "yelling", "screaming", "singing off key"]},
      {"text": "Get way too drunk/Spill drinks", "points": 18, "synonyms": ["drunk", "spilling", "beer", "throwing up", "sloppy", "bumping"]},
      {"text": "Push/Shove to the front", "points": 12, "synonyms": ["pushing", "shoving", "cutting", "crowding", "moshing"]},
      {"text": "Stand/Sit on someone's shoulders", "points": 8, "synonyms": ["shoulders", "tall", "standing", "signs", "posters", "hats"]},
      {"text": "Vaping/Smoking in your face", "points": 6, "synonyms": ["vaping", "smoking", "weed", "smoke", "bo", "smell"]}
    ]
  },
  {
    "question": "Name a reason someone might leave a bad tip—or no tip at all.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Rude/Terrible server", "points": 38, "synonyms": ["rude", "bad service", "attitude", "mean", "ignored", "slow"]},
      {"text": "They're just cheap/Broke", "points": 24, "synonyms": ["cheap", "broke", "stingy", "no money", "bad tipper"]},
      {"text": "Tip screen for self-service/Counter", "points": 16, "synonyms": ["ipad", "tablet", "counter", "takeout", "self service", "pickup", "tip fatigue"]},
      {"text": "Food was wrong/Cold", "points": 10, "synonyms": ["wrong order", "cold food", "bad food", "hair", "mess up"]},
      {"text": "Auto-gratuity already included", "points": 7, "synonyms": ["gratuity", "included", "service charge", "fee"]},
      {"text": "They're from another country", "points": 5, "synonyms": ["tourist", "foreign", "europe", "culture", "forgot"]}
    ]
  },
  {
    "question": "Name something people complain about every time they go to the airport.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Long TSA/Security lines", "points": 34, "synonyms": ["tsa", "security", "lines", "taking off shoes", "wait"]},
      {"text": "Flight delays/Cancellations", "points": 28, "synonyms": ["delays", "delayed", "canceled", "cancelled", "waiting", "late"]},
      {"text": "Overpriced food and water", "points": 16, "synonyms": ["expensive", "food", "water", "drinks", "prices", "overpriced"]},
      {"text": "Lost/Delayed luggage", "points": 10, "synonyms": ["luggage", "bags", "baggage", "lost bag", "bag fees"]},
      {"text": "Cramped seats/No legroom", "points": 7, "synonyms": ["seats", "legroom", "small", "uncomfortable", "crowded"]},
      {"text": "Other passengers/Parking", "points": 5, "synonyms": ["people", "rude", "parking", "traffic", "gate change", "walking"]}
    ]
  },
  {
    "question": "Name a notification on your phone that instantly stresses you out.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Bank/Low balance/Fraud alert", "points": 32, "synonyms": ["bank", "money", "overdraft", "fraud", "declined", "bill", "charge", "low balance"]},
      {"text": "'We need to talk' text", "points": 24, "synonyms": ["we need to talk", "partner", "ex", "long text", "call me"]},
      {"text": "Missed call from Mom/Family", "points": 16, "synonyms": ["mom", "dad", "parents", "missed call", "family", "multiple calls"]},
      {"text": "Work email/Slack after hours", "points": 14, "synonyms": ["boss", "work", "email", "slack", "teams", "meeting"]},
      {"text": "Low battery (10% or less)", "points": 8, "synonyms": ["battery", "low battery", "dying", "storage full"]},
      {"text": "Flight delayed/Package missing", "points": 6, "synonyms": ["flight", "delayed", "delivery", "ring camera", "amber alert", "weather"]}
    ]
  },
  {
    "question": "Name something people do at a self-checkout that slows down the whole line.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Bring a full shopping cart", "points": 34, "synonyms": ["full cart", "too many items", "big cart", "groceries"]},
      {"text": "Can't find the produce code/Barcode", "points": 24, "synonyms": ["produce", "barcode", "cant scan", "fruit", "veggies", "looking up"]},
      {"text": "Wait for an employee/Age check", "points": 16, "synonyms": ["employee", "help", "alcohol", "id", "unexpected item", "bagging area", "error"]},
      {"text": "Take forever to pay/Coupons", "points": 12, "synonyms": ["coupons", "cash", "coins", "digging", "wallet", "card declined"]},
      {"text": "Bag everything super slowly", "points": 8, "synonyms": ["bagging", "slow", "reusable bags", "rearranging"]},
      {"text": "Talk on their phone", "points": 6, "synonyms": ["phone", "texting", "distracted", "kids scanning", "chatting"]}
    ]
  },
  {
    "question": "Name a phrase in a work email that actually means 'I'm annoyed with you.'",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "'Per my last email'", "points": 42, "synonyms": ["per my last email", "as stated", "previous email", "already sent"]},
      {"text": "'Just circling back/Following up'", "points": 20, "synonyms": ["circling back", "following up", "gentle reminder", "friendly reminder", "bumping"]},
      {"text": "'Hope this helps!'", "points": 14, "synonyms": ["hope this helps", "let me know if you have questions", "clarify"]},
      {"text": "'Moving forward...'", "points": 10, "synonyms": ["moving forward", "going forward", "in the future", "please note"]},
      {"text": "'Regards' (instead of Best)", "points": 8, "synonyms": ["regards", "thanks", "best", "no exclamation", "sincerely"]},
      {"text": "'Just to confirm...'", "points": 6, "synonyms": ["confirm", "ccing", "boss", "looping in", "attached again", "not sure if you saw"]}
    ]
  },
  {
    "question": "Name something people do in a movie theater that should be illegal.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Talk/Have a full conversation", "points": 34, "synonyms": ["talk", "talking", "whispering", "commentary", "yelling"]},
      {"text": "Use their phone at full brightness", "points": 28, "synonyms": ["phone", "texting", "bright screen", "ringing", "scrolling", "calls"]},
      {"text": "Kick the back of your chair", "points": 16, "synonyms": ["kick", "kicking", "feet", "seat"]},
      {"text": "Bring a crying baby/Toddler", "points": 10, "synonyms": ["baby", "kids", "crying", "children"]},
      {"text": "Chew/Crinkle wrappers loudly", "points": 7, "synonyms": ["chewing", "popcorn", "wrappers", "eating loud", "slurping"]},
      {"text": "Take off their shoes/Sit in your seat", "points": 5, "synonyms": ["shoes off", "feet", "wrong seat", "vaping", "spoilers", "late"]}
    ]
  },
  {
    "question": "Name a reason someone might mute a group chat.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Nonstop notifications/Too active", "points": 38, "synonyms": ["too many texts", "blowing up", "nonstop", "notifications", "buzzing", "spam"]},
      {"text": "At work/In a meeting", "points": 22, "synonyms": ["work", "meeting", "busy", "class", "studying"]},
      {"text": "Annoying person/Drama", "points": 16, "synonyms": ["annoying", "drama", "arguing", "fighting", "toxic", "politics"]},
      {"text": "Trying to sleep", "points": 12, "synonyms": ["sleep", "bed", "night", "nap", "late"]},
      {"text": "Topic doesn't involve them", "points": 7, "synonyms": ["dont care", "irrelevant", "not going", "boring", "family"]},
      {"text": "Too many memes/Liked reactions", "points": 5, "synonyms": ["memes", "gifs", "reactions", "loved an image", "android", "green bubble"]}
    ]
  },
  {
    "question": "Name something people do at a grocery store that is a major pet peeve.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Block the entire aisle with their cart", "points": 38, "synonyms": ["block aisle", "cart", "standing in the way", "middle of aisle", "chatting"]},
      {"text": "Not return their shopping cart", "points": 22, "synonyms": ["shopping cart", "parking lot", "leave cart", "cart return"]},
      {"text": "Walk super slowly", "points": 14, "synonyms": ["slow", "walking slow", "stopping", "cutting off"]},
      {"text": "Leave cold items on random shelves", "points": 12, "synonyms": ["cold items", "meat", "milk", "putting back", "melting", "abandon"]},
      {"text": "Bring 50 items to the express lane", "points": 8, "synonyms": ["express lane", "10 items", "15 items", "too many items", "cutting"]},
      {"text": "Eat food/Touch all the produce", "points": 6, "synonyms": ["eating", "grapes", "squeezing", "touching", "coughing", "samples"]}
    ]
  },
  {
    "question": "Name an app people open without even thinking about it.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Instagram", "points": 32, "synonyms": ["instagram", "ig", "insta"]},
      {"text": "TikTok", "points": 26, "synonyms": ["tiktok", "tik tok"]},
      {"text": "YouTube", "points": 14, "synonyms": ["youtube", "yt"]},
      {"text": "Messages/WhatsApp", "points": 12, "synonyms": ["messages", "texts", "imessage", "whatsapp", "snapchat"]},
      {"text": "Facebook/X (Twitter)", "points": 10, "synonyms": ["facebook", "fb", "twitter", "x", "reddit"]},
      {"text": "Email/Weather", "points": 6, "synonyms": ["email", "gmail", "weather", "maps", "spotify", "games"]}
    ]
  },
  {
    "question": "Name something people get way too competitive about.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Board games/Card games", "points": 34, "synonyms": ["monopoly", "uno", "spades", "board games", "cards", "poker", "game night", "family feud"]},
      {"text": "Sports/Fantasy football", "points": 24, "synonyms": ["sports", "fantasy football", "football", "golf", "bowling", "pickleball", "cornhole"]},
      {"text": "Video games (Mario Kart/COD)", "points": 16, "synonyms": ["video games", "mario kart", "call of duty", "fifa", "madden", "gaming"]},
      {"text": "Driving/Merging in traffic", "points": 12, "synonyms": ["driving", "traffic", "merging", "racing", "parking"]},
      {"text": "Who is more tired/Busy", "points": 8, "synonyms": ["tired", "sleep", "busy", "work", "stress", "suffering"]},
      {"text": "Trivia/Wordle/Karaoke", "points": 6, "synonyms": ["trivia", "wordle", "bar trivia", "drinking games", "beer pong", "cooking"]}
    ]
  },
  {
    "question": "Name a reason someone might unfriend a family member on Facebook.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Political posts/Arguments", "points": 44, "synonyms": ["politics", "political", "trump", "biden", "arguing", "rants"]},
      {"text": "Conspiracy theories/Fake news", "points": 18, "synonyms": ["conspiracy", "fake news", "misinformation", "crazy", "memes"]},
      {"text": "Family drama/Feud", "points": 16, "synonyms": ["drama", "fight", "feud", "gossip", "toxic", "rude"]},
      {"text": "Embarrassing comments on your posts", "points": 10, "synonyms": ["comments", "embarrassing", "judging", "nosy", "tmi"]},
      {"text": "Selling MLM/Spamming", "points": 7, "synonyms": ["mlm", "selling", "spam", "game invites", "candy crush"]},
      {"text": "Don't actually talk to them", "points": 5, "synonyms": ["dont talk", "distant", "stranger", "religious", "preachy"]}
    ]
  },
  {
    "question": "Name something people say 'I'll do it tomorrow' about every single day.",
    "category": "Modern Life & Pet Peeves",
    "answers": [
      {"text": "Working out/Going to the gym", "points": 34, "synonyms": ["gym", "work out", "exercise", "diet", "run", "lose weight"]},
      {"text": "Laundry/Folding clothes", "points": 24, "synonyms": ["laundry", "folding", "clothes", "ironing"]},
      {"text": "Cleaning/Dishes", "points": 16, "synonyms": ["cleaning", "dishes", "vacuuming", "organizing", "chores", "car wash"]},
      {"text": "Going to bed early", "points": 10, "synonyms": ["sleep", "bed early", "nap"]},
      {"text": "Calling/Texting someone back", "points": 9, "synonyms": ["call back", "text back", "email", "doctor", "dentist", "appointment"]},
      {"text": "Taxes/Bills/Studying", "points": 7, "synonyms": ["taxes", "bills", "homework", "studying", "errands", "oil change", "returns"]}
    ]
  },
  {
    "question": "Name a classic Christmas movie everyone watches every year.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Home Alone", "points": 32, "synonyms": ["home alone", "kevin"]},
      {"text": "Elf", "points": 26, "synonyms": ["elf", "buddy", "will ferrell"]},
      {"text": "How the Grinch Stole Christmas", "points": 16, "synonyms": ["grinch", "the grinch"]},
      {"text": "A Christmas Story", "points": 12, "synonyms": ["christmas story", "ralphie", "bb gun"]},
      {"text": "National Lampoon's Christmas Vacation", "points": 8, "synonyms": ["christmas vacation", "national lampoons", "griswold", "chevy chase"]},
      {"text": "It's a Wonderful Life / Die Hard", "points": 6, "synonyms": ["wonderful life", "die hard", "polar express", "santa clause", "rudolph", "charlie brown"]}
    ]
  },
  {
    "question": "Name a gift people secretly hate receiving—and might regift.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Socks/Underwear", "points": 28, "synonyms": ["socks", "underwear", "clothes"]},
      {"text": "Scented candle", "points": 24, "synonyms": ["candle", "candles", "wax"]},
      {"text": "Fruitcake", "points": 18, "synonyms": ["fruitcake", "fruit cake", "bad food", "candy"]},
      {"text": "Cheap lotion/Bath set", "points": 12, "synonyms": ["lotion", "soap", "bath set", "body wash", "perfume", "cologne", "toiletries"]},
      {"text": "Coffee mug", "points": 10, "synonyms": ["mug", "coffee mug", "cup", "tumbler", "picture frame"]},
      {"text": "Ugly sweater/Tie", "points": 8, "synonyms": ["sweater", "ugly sweater", "tie", "scarf", "gloves", "towel", "re-gift"]}
    ]
  },
  {
    "question": "Name something people stress out about the most during the holidays.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Spending money/Budget", "points": 34, "synonyms": ["money", "budget", "bills", "credit card", "debt", "expensive", "afford"]},
      {"text": "Buying gifts/Shopping", "points": 24, "synonyms": ["shopping", "gifts", "presents", "crowds", "shipping", "wrapping"]},
      {"text": "Family drama/Relatives", "points": 18, "synonyms": ["family", "relatives", "in laws", "drama", "fighting", "arguing", "politics"]},
      {"text": "Cooking/Hosting dinner", "points": 10, "synonyms": ["cooking", "hosting", "cleaning", "food", "baking", "guests"]},
      {"text": "Holiday travel/Traffic", "points": 8, "synonyms": ["travel", "traffic", "airports", "flights", "driving", "weather"]},
      {"text": "Gaining weight", "points": 6, "synonyms": ["weight", "eating too much", "diet", "calories", "time", "schedule"]}
    ]
  },
  {
    "question": "Name a Christmas song that gets stuck in your head all December.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "All I Want for Christmas Is You", "points": 36, "synonyms": ["mariah carey", "all i want for christmas", "all i want"]},
      {"text": "Jingle Bells", "points": 22, "synonyms": ["jingle bells", "jingle bell rock"]},
      {"text": "Last Christmas", "points": 16, "synonyms": ["last christmas", "wham", "george michael"]},
      {"text": "Rudolph the Red-Nosed Reindeer", "points": 12, "synonyms": ["rudolph", "red nosed reindeer"]},
      {"text": "Frosty the Snowman", "points": 8, "synonyms": ["frosty", "snowman"]},
      {"text": "Rockin' Around the Christmas Tree", "points": 6, "synonyms": ["rockin around", "silent night", "feliz navidad", "santa baby", "deck the halls", "12 days"]}
    ]
  },
  {
    "question": "Name something you're almost guaranteed to find in a Christmas stocking.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Candy/Chocolate", "points": 34, "synonyms": ["candy", "chocolate", "candy cane", "hershey", "reeses", "sweets"]},
      {"text": "Socks", "points": 22, "synonyms": ["socks", "fuzzy socks", "underwear"]},
      {"text": "Gift cards/Cash", "points": 16, "synonyms": ["gift card", "gift cards", "money", "cash"]},
      {"text": "Scratch-off lottery tickets", "points": 12, "synonyms": ["lottery", "scratch offs", "lotto", "tickets"]},
      {"text": "Chapstick/Mini toiletries", "points": 10, "synonyms": ["chapstick", "lip balm", "lotion", "toothbrush", "deodorant", "makeup", "toiletries"]},
      {"text": "An orange/Small toys", "points": 6, "synonyms": ["orange", "tangerine", "fruit", "toys", "coal", "mini liquor", "nip", "keychain"]}
    ]
  },
  {
    "question": "Name something people do at an office holiday party that they regret the next day.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Drink way too much", "points": 40, "synonyms": ["drunk", "drink", "drinking", "open bar", "wasted", "throwing up", "puking", "hangover"]},
      {"text": "Flirt/Hook up with a coworker", "points": 22, "synonyms": ["flirt", "hook up", "kiss", "make out", "coworker", "sex", "hit on"]},
      {"text": "Say something stupid to the boss", "points": 16, "synonyms": ["boss", "overshare", "talk trash", "gossip", "curse", "insult", "complain", "quit"]},
      {"text": "Embarrassing dancing/Karaoke", "points": 10, "synonyms": ["dancing", "dance", "karaoke", "singing", "falling", "table"]},
      {"text": "Start drama/Argue", "points": 7, "synonyms": ["fight", "argue", "drama", "cry", "crying", "scene"]},
      {"text": "Call out sick the next morning", "points": 5, "synonyms": ["call out", "skip work", "late", "photos", "videos", "steal"]}
    ]
  },
  {
    "question": "Name a classic holiday drink.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Eggnog", "points": 36, "synonyms": ["eggnog", "egg nog", "nog"]},
      {"text": "Hot chocolate/Cocoa", "points": 26, "synonyms": ["hot chocolate", "hot cocoa", "cocoa"]},
      {"text": "Apple cider", "points": 14, "synonyms": ["cider", "apple cider", "hot cider"]},
      {"text": "Mulled/Spiced wine", "points": 10, "synonyms": ["wine", "mulled wine", "spiced wine", "red wine", "sangria"]},
      {"text": "Peppermint mocha/Latte", "points": 8, "synonyms": ["peppermint mocha", "coffee", "latte", "pumpkin spice", "starbucks"]},
      {"text": "Champagne/Coquito", "points": 6, "synonyms": ["champagne", "coquito", "hot toddy", "rum", "whiskey", "punch", "wassail"]}
    ]
  },
  {
    "question": "Name something that can go wrong when putting up Christmas decorations.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Lights are tangled/Burned out", "points": 36, "synonyms": ["lights", "tangled", "burned out", "broken lights", "bulbs", "wont turn on"]},
      {"text": "Tree falls over", "points": 22, "synonyms": ["tree falls", "tree tips", "christmas tree", "stand", "pine needles"]},
      {"text": "Falling off a ladder/Roof", "points": 16, "synonyms": ["fall", "ladder", "roof", "hurt", "injury", "electrocuted", "shock"]},
      {"text": "Breaking a favorite ornament", "points": 12, "synonyms": ["ornament", "broken", "glass", "shatter", "drop"]},
      {"text": "Pet destroys/Eats them", "points": 8, "synonyms": ["cat", "dog", "pet", "climbs tree", "chews", "knock over"]},
      {"text": "Blowing a fuse/Circuit", "points": 6, "synonyms": ["fuse", "breaker", "power out", "fire", "short circuit", "argument", "fight"]}
    ]
  },
  {
    "question": "Name a food or treat people only seem to eat around the holidays.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Gingerbread", "points": 30, "synonyms": ["gingerbread", "gingerbread cookies", "gingerbread house"]},
      {"text": "Candy canes", "points": 22, "synonyms": ["candy cane", "candy canes", "peppermint", "peppermint bark"]},
      {"text": "Fruitcake", "points": 18, "synonyms": ["fruitcake", "fruit cake", "panettone"]},
      {"text": "Honey-baked ham/Prime rib", "points": 12, "synonyms": ["ham", "prime rib", "roast", "turkey", "stuffing", "cranberry sauce"]},
      {"text": "Sugar cookies/Yule log", "points": 10, "synonyms": ["cookies", "christmas cookies", "sugar cookies", "yule log", "fudge"]},
      {"text": "Pecan/Pumpkin pie", "points": 8, "synonyms": ["pie", "pumpkin pie", "pecan pie", "chestnuts", "tamales", "latkes"]}
    ]
  },
  {
    "question": "Name a lie parents tell their kids about Santa Claus.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "He's always watching (Naughty list)", "points": 34, "synonyms": ["watching", "naughty list", "nice list", "elf on the shelf", "sees you", "be good"]},
      {"text": "You'll get coal if you're bad", "points": 24, "synonyms": ["coal", "lump of coal", "no presents", "bad"]},
      {"text": "He comes down the chimney", "points": 16, "synonyms": ["chimney", "fireplace", "magic key"]},
      {"text": "He eats the cookies/Reindeer eat carrots", "points": 12, "synonyms": ["cookies", "milk", "carrots", "reindeer", "eats"]},
      {"text": "He visits every house in one night", "points": 8, "synonyms": ["one night", "flying reindeer", "sleigh", "north pole", "elves", "fast"]},
      {"text": "Mall Santa is his 'helper'", "points": 6, "synonyms": ["mall santa", "helper", "real santa", "he made the toys", "go to sleep"]}
    ]
  },
  {
    "question": "Name something you see in almost every Hallmark Christmas movie.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Big-city girl moves to a small town", "points": 32, "synonyms": ["small town", "big city", "moves home", "hometown", "city girl"]},
      {"text": "Snowfall at the exact right moment", "points": 24, "synonyms": ["snow", "snowing", "fake snow", "blizzard", "white christmas"]},
      {"text": "Saving a local bakery/Tree farm", "points": 18, "synonyms": ["bakery", "tree farm", "inn", "small business", "saving the town", "festival"]},
      {"text": "A handsome single dad/Lumberjack", "points": 12, "synonyms": ["single dad", "widower", "lumberjack", "flannel", "prince", "childhood crush"]},
      {"text": "Hot cocoa/Tree decorating montage", "points": 8, "synonyms": ["hot cocoa", "hot chocolate", "decorating", "baking cookies", "ice skating"]},
      {"text": "A misunderstanding right before the kiss", "points": 6, "synonyms": ["kiss", "misunderstanding", "breakup", "mistletoe", "happy ending", "workaholic boyfriend"]}
    ]
  },
  {
    "question": "Name something people leave out for Santa on Christmas Eve.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Cookies", "points": 44, "synonyms": ["cookies", "chocolate chip", "sugar cookies"]},
      {"text": "Milk", "points": 32, "synonyms": ["milk", "glass of milk", "almond milk"]},
      {"text": "Carrots (for the reindeer)", "points": 12, "synonyms": ["carrots", "reindeer food", "apples", "celery", "oats"]},
      {"text": "Beer/Whiskey/Alcohol", "points": 6, "synonyms": ["beer", "whiskey", "bourbon", "brandy", "wine", "eggnog", "shot"]},
      {"text": "A thank-you note/Wish list", "points": 4, "synonyms": ["note", "letter", "card", "list", "drawing"]},
      {"text": "Mince pies/Candy", "points": 2, "synonyms": ["pie", "candy", "brownies", "cake", "water"]}
    ]
  },
  {
    "question": "Name a reason someone might stay up past midnight on Christmas Eve.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Wrapping last-minute presents", "points": 36, "synonyms": ["wrapping", "wrap gifts", "presents", "gifts", "tape"]},
      {"text": "Putting out Santa's gifts/Eating the cookies", "points": 24, "synonyms": ["santa", "playing santa", "stuffing stockings", "eating cookies", "elf on the shelf"]},
      {"text": "Assembling kids' toys", "points": 16, "synonyms": ["assembling", "building toys", "bike", "dollhouse", "instructions", "batteries"]},
      {"text": "Midnight Mass/Church service", "points": 10, "synonyms": ["church", "midnight mass", "mass", "service", "candlelight"]},
      {"text": "Too excited to sleep", "points": 8, "synonyms": ["excited", "cant sleep", "kids", "waiting for santa"]},
      {"text": "Drinking/Hanging out with family", "points": 6, "synonyms": ["drinking", "family", "movies", "games", "talking", "party"]}
    ]
  },
  {
    "question": "Name something people always say on New Year's Day.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "'Happy New Year!'", "points": 38, "synonyms": ["happy new year", "new year"]},
      {"text": "'I'm never drinking again'", "points": 24, "synonyms": ["never drinking again", "hungover", "hangover", "headache", "too much to drink"]},
      {"text": "'New year, new me'", "points": 16, "synonyms": ["new year new me", "new me", "fresh start", "resolutions", "gym"]},
      {"text": "'I haven't showered/seen you since last year'", "points": 10, "synonyms": ["since last year", "dad joke", "last year"]},
      {"text": "'I can't believe it's already [New Year]'", "points": 7, "synonyms": ["went by fast", "already", "time flies", "2027"]},
      {"text": "'What day is it?'", "points": 5, "synonyms": ["what day is it", "date", "confused", "sleepy", "tired"]}
    ]
  },
  {
    "question": "Name a classic White Elephant or Secret Santa gift everyone fights over.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Alcohol/Bottle of liquor or wine", "points": 34, "synonyms": ["alcohol", "wine", "liquor", "tequila", "whiskey", "booze", "beer"]},
      {"text": "Gift cards/Cash", "points": 24, "synonyms": ["gift card", "gift cards", "cash", "money", "amazon", "starbucks"]},
      {"text": "Cozy blanket/Heated throw", "points": 16, "synonyms": ["blanket", "throw", "heated blanket", "snuggie", "robe"]},
      {"text": "Tech gadget/Speaker/AirTag", "points": 12, "synonyms": ["speaker", "bluetooth", "airtag", "charger", "headphones", "tech", "gadget"]},
      {"text": "Coffee maker/Air fryer/Mug warmer", "points": 8, "synonyms": ["coffee", "air fryer", "mug warmer", "yeti", "stanley", "tumbler"]},
      {"text": "Lottery scratch-offs/Board game", "points": 6, "synonyms": ["lottery", "scratch offs", "board game", "card game", "candles", "funny gag gift"]}
    ]
  },
  {
    "question": "Name something people do on Black Friday.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Shop online from the couch", "points": 36, "synonyms": ["online shopping", "amazon", "cyber monday", "laptop", "phone", "couch"]},
      {"text": "Wake up early/Wait in long lines", "points": 24, "synonyms": ["wake up early", "lines", "camp out", "crowds", "mall", "walmart", "target", "best buy"]},
      {"text": "Fight over TVs/Deals", "points": 16, "synonyms": ["fight", "argue", "tv", "deals", "trample", "chaos", "brawl"]},
      {"text": "Eat Thanksgiving leftovers", "points": 12, "synonyms": ["leftovers", "eat", "turkey", "sandwich"]},
      {"text": "Sleep in/Stay home", "points": 7, "synonyms": ["sleep", "stay home", "avoid crowds", "relax"]},
      {"text": "Put up Christmas decorations", "points": 5, "synonyms": ["decorate", "christmas tree", "lights", "music"]}
    ]
  },
  {
    "question": "Name a popular New Year's Eve tradition.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Watching the ball drop", "points": 36, "synonyms": ["ball drop", "times square", "countdown", "tv", "ryan seacrest"]},
      {"text": "Kissing someone at midnight", "points": 24, "synonyms": ["kiss", "kissing", "midnight kiss", "smooch"]},
      {"text": "Drinking champagne/Toasting", "points": 18, "synonyms": ["champagne", "toast", "drinking", "popping bottles", "prosecco"]},
      {"text": "Setting off fireworks/Noisemakers", "points": 10, "synonyms": ["fireworks", "sparklers", "noisemakers", "confetti", "pots and pans"]},
      {"text": "Going to a party/Bar", "points": 7, "synonyms": ["party", "club", "bar", "dressing up", "sparkly outfit"]},
      {"text": "Eating lucky foods (Black-eyed peas/Grapes)", "points": 5, "synonyms": ["grapes", "black eyed peas", "cabbage", "pork", "12 grapes", "auld lang syne"]}
    ]
  },
  {
    "question": "Name a reason someone might still have their Christmas tree up in February.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Pure laziness/Procrastination", "points": 44, "synonyms": ["lazy", "laziness", "procrastinating", "too much work", "dont feel like it"]},
      {"text": "They love the cozy lights/Vibe", "points": 22, "synonyms": ["lights", "cozy", "pretty", "vibe", "mood lighting", "cheer"]},
      {"text": "Turned it into a Valentine's/Holiday tree", "points": 14, "synonyms": ["valentines", "mardi gras", "st patricks", "all year tree", "holiday tree"]},
      {"text": "Too busy/Traveling", "points": 10, "synonyms": ["busy", "no time", "traveling", "work", "forgot"]},
      {"text": "Nowhere to store it", "points": 6, "synonyms": ["storage", "no box", "basement", "attic", "heavy"]},
      {"text": "Waiting for someone else to do it", "points": 4, "synonyms": ["spouse", "husband", "wife", "roommate", "someone else"]}
    ]
  },
  {
    "question": "Name something that gets kids super hyped up during Christmas.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Opening presents/Toys", "points": 42, "synonyms": ["presents", "gifts", "toys", "opening gifts", "santa"]},
      {"text": "Candy/Cookies/Sugar", "points": 24, "synonyms": ["sugar", "candy", "cookies", "chocolate", "hot cocoa", "gingerbread"]},
      {"text": "Snow/Snow days", "points": 14, "synonyms": ["snow", "sledding", "snowman", "snowball fight", "snow day"]},
      {"text": "No school/Winter break", "points": 10, "synonyms": ["no school", "winter break", "vacation", "staying up late"]},
      {"text": "Elf on the Shelf", "points": 6, "synonyms": ["elf", "elf on the shelf", "advent calendar"]},
      {"text": "Christmas lights/Seeing Santa", "points": 4, "synonyms": ["lights", "mall santa", "cousins", "family", "music"]}
    ]
  },
  {
    "question": "Name a classic Thanksgiving side dish.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Mashed potatoes (and gravy)", "points": 36, "synonyms": ["mashed potatoes", "potatoes", "gravy"]},
      {"text": "Stuffing/Dressing", "points": 26, "synonyms": ["stuffing", "dressing"]},
      {"text": "Mac and cheese", "points": 14, "synonyms": ["mac and cheese", "macaroni", "baked mac"]},
      {"text": "Green bean casserole", "points": 10, "synonyms": ["green beans", "green bean casserole", "veggies"]},
      {"text": "Sweet potatoes/Yams", "points": 8, "synonyms": ["sweet potatoes", "yams", "marshmallows", "sweet potato casserole"]},
      {"text": "Cranberry sauce/Dinner rolls", "points": 6, "synonyms": ["cranberry", "cranberry sauce", "rolls", "biscuits", "corn", "cornbread"]}
    ]
  },
  {
    "question": "Name something you see in every neighborhood during December.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Christmas lights on houses", "points": 42, "synonyms": ["lights", "christmas lights", "icicle lights", "lit up houses"]},
      {"text": "Inflatable yard decorations", "points": 22, "synonyms": ["inflatables", "blow ups", "giant santa", "snowman", "reindeer"]},
      {"text": "Wreaths on front doors", "points": 14, "synonyms": ["wreath", "wreaths", "garland", "bows"]},
      {"text": "Amazon/Delivery trucks nonstop", "points": 10, "synonyms": ["amazon", "ups", "fedex", "delivery", "boxes", "packages"]},
      {"text": "Christmas trees in front windows", "points": 7, "synonyms": ["trees", "christmas tree", "window", "nativity"]},
      {"text": "Cars with reindeer antlers/Red noses", "points": 5, "synonyms": ["antlers", "car", "red nose", "snowmen", "carolers"]}
    ]
  },
  {
    "question": "Name a reason someone might cry during the holidays.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Missing a loved one who passed away", "points": 34, "synonyms": ["missing someone", "grief", "passed away", "deceased", "empty chair", "memories"]},
      {"text": "Family fight/Drama", "points": 24, "synonyms": ["fight", "family", "drama", "arguing", "in laws", "yelling"]},
      {"text": "Overwhelmed/Stressed out", "points": 18, "synonyms": ["stress", "overwhelmed", "tired", "cooking", "hosting", "burnout"]},
      {"text": "Touched by a thoughtful gift", "points": 10, "synonyms": ["happy tears", "thoughtful gift", "sweet gift", "surprise", "proposal"]},
      {"text": "Being lonely/Away from home", "points": 8, "synonyms": ["lonely", "alone", "homesick", "breakup", "single"]},
      {"text": "Looking at their bank account", "points": 6, "synonyms": ["broke", "money", "bank account", "credit card", "bills", "sad movie"]}
    ]
  },
  {
    "question": "Name something people wear on Christmas morning.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Matching family pajamas", "points": 44, "synonyms": ["pajamas", "pjs", "matching pajamas", "onesie", "flannel"]},
      {"text": "Slippers/Fuzzy socks", "points": 22, "synonyms": ["slippers", "socks", "fuzzy socks", "house shoes"]},
      {"text": "Bathrobe", "points": 14, "synonyms": ["robe", "bathrobe"]},
      {"text": "Ugly Christmas sweater", "points": 10, "synonyms": ["ugly sweater", "sweater", "christmas shirt"]},
      {"text": "Santa hat/Reindeer antlers", "points": 6, "synonyms": ["santa hat", "antlers", "headband", "hat"]},
      {"text": "Sweatpants/Hoodie", "points": 4, "synonyms": ["sweatpants", "sweats", "hoodie", "loungewear", "bedhead"]}
    ]
  },
  {
    "question": "Name an item people always run out of while wrapping Christmas gifts.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Scotch tape", "points": 44, "synonyms": ["tape", "scotch tape", "clear tape"]},
      {"text": "Wrapping paper", "points": 28, "synonyms": ["wrapping paper", "paper", "gift wrap"]},
      {"text": "Gift tags/Labels", "points": 12, "synonyms": ["tags", "labels", "to and from", "stickers", "cards"]},
      {"text": "Gift bags/Tissue paper", "points": 8, "synonyms": ["gift bags", "bags", "tissue paper", "boxes"]},
      {"text": "Bows/Ribbon", "points": 5, "synonyms": ["bows", "ribbon", "bow"]},
      {"text": "Patience/Scissors", "points": 3, "synonyms": ["patience", "scissors", "time", "pens"]}
    ]
  },
  {
    "question": "Name something adults secretly hope to get for Christmas.",
    "category": "Christmas & Holidays",
    "answers": [
      {"text": "Cash/Gift cards", "points": 38, "synonyms": ["cash", "money", "gift cards", "visa card", "check"]},
      {"text": "Paid bills/Rent/Debt relief", "points": 20, "synonyms": ["bills paid", "rent", "mortgage", "debt", "student loans", "car payment"]},
      {"text": "A vacation/Weekend getaway", "points": 14, "synonyms": ["vacation", "trip", "flight", "hotel", "cruise", "spa day"]},
      {"text": "Sleep/Peace and quiet", "points": 12, "synonyms": ["sleep", "nap", "peace and quiet", "time off", "alone time", "babysitter"]},
      {"text": "Nice tech/Electronics", "points": 9, "synonyms": ["tech", "tv", "headphones", "airpods", "ipad", "ps5", "switch"]},
      {"text": "Good alcohol/Coffee maker", "points": 7, "synonyms": ["alcohol", "wine", "whiskey", "espresso", "coffee", "socks", "kitchen gadget"]}
    ]
  }
]:
