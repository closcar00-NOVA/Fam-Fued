// Complete 100-question bank (1-50 Adult-themed + 51-100 Everyday Classics)
const questionBank = [
  {
    "question": "Name a reason someone might secretly check their partner's phone.",
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
    "answers": [
      {"text": "Say 'Cheese!'", "points": 34, "synonyms": ["cheese", "say cheese", "smile"]},
      {"text": "Fix their hair/Clothes", "points": 24, "synonyms": ["hair", "fix hair", "clothes", "outfit", "makeup", "glasses"]},
      {"text": "Squeeze in/Squish together", "points": 18, "synonyms": ["squeeze", "move closer", "huddle", "put arms around", "tall in back"]},
      {"text": "Pose/Suck in their stomach", "points": 10, "synonyms": ["pose", "suck in", "peace sign", "duck face", "angle"]},
      {"text": "Put down their drinks", "points": 8, "synonyms": ["drinks", "hide drinks", "put down cups", "put away bags"]},
      {"text": "Ask who is taking it/Timer", "points": 6, "synonyms": ["timer", "countdown", "1 2 3", "ask stranger", "flash"]}
    ]
  }
];
