const config = {
  "modalQuestions": [
    {
      "id": "family_day_activity",
      "questionText": "When planning a day out with your family, which activity excites you the most?",
      "options": [
        { "value": "exploring_neighborhoods", "text": "Exploring new neighborhoods" },
        { "value": "amusement_parks", "text": "Visiting amusement parks" },
        { "value": "picnic_park", "text": "Having a picnic in the park" },
        { "value": "stay_home_movie", "text": "Staying at home with a movie" }
      ]
    },
    {
      "id": "family_change_excited",
      "questionText": "Which upcoming change are you most excited about in your family's life?",
      "options": [
        { "value": "adding_members", "text": "Adding new family members" },
        { "value": "upgrading_home", "text": "Upgrading our home" },
        { "value": "big_vacation", "text": "Planning a big family vacation" },
        { "value": "new_hobbies", "text": "Focusing on new hobbies" }
      ]
    },
    {
      "id": "community_events_frequency",
      "questionText": "How often do you attend local community events or family-oriented activities?",
      "options": [
        { "value": "every_week", "text": "Every week" },
        { "value": "few_times_month", "text": "A few times a month" },
        { "value": "rarely", "text": "Rarely" },
        { "value": "never", "text": "Never" }
      ]
    },
    {
      "id": "home_improvement_priorities",
      "questionText": "In terms of home improvements, what are your family’s current priorities?",
      "options": [
        { "value": "expand_space_kids", "text": "Expanding space for kids" },
        { "value": "home_office", "text": "Creating a home office" },
        { "value": "enhance_outdoor_living", "text": "Enhancing outdoor living space" },
        { "value": "no_plans", "text": "No plans currently" }
      ]
    }
  ],
  "giveaway": {
    "name": "Canada's Wonderland Family Adventure",
    "heroHeadline": "Unleash the Fun at Canada’s Wonderland!",
    "heroSubheadline": "Win a Family Day Out Worth $400 and Create Memories That Last a Lifetime!",
    "promotionDates": "Promotion runs from June 23, 2025 until July 17, 2025.",
    "endDate": "2025-07-17T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/66xbyw2md9rma0cqfz2vbhxjp4.jpg",
    "heroCtaText": "Enter Now for a Chance to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Canada's Wonderland Family Adventure Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email after the draw date. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Canada's Wonderland Family Passes and Parking Pass",
    "value": "$400+ Value",
    "description": "Enjoy a magical family day at Canada’s Wonderland with passes for the whole family plus a convenient parking pass included. Experience thrilling rides, tasty treats, and unforgettable family bonding time.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/66xbyw2md9rma0cqfz2vbhxjp4.jpg",
        "alt": "Canada's Wonderland Family Day"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/66xbyw2md9rma0cqfz2vbhxjp4.jpg",
        "alt": "Thrilling rides at Canada's Wonderland"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/66xbyw2md9rma0cqfz2vbhxjp4.jpg",
        "alt": "Family enjoying amusement park"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/66xbyw2md9rma0cqfz2vbhxjp4.jpg",
        "alt": "Exciting family day out"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Family passes to all rides and attractions" },
      { "icon": "fas fa-parking", "text": "Parking pass included for stress-free arrival" },
      { "icon": "fas fa-users", "text": "Ideal for families and young couples seeking adventure" },
      { "icon": "fas fa-clock", "text": "Valid for a limited time only" },
      { "icon": "fas fa-thumbs-up", "text": "Easy and fun entry process" }
    ],
    "limitedTimeOfferText": "🎡 Limited Time Family Adventure Giveaway!",
    "ctaButtonText": "I WANT TO WIN THIS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-keyboard",
        "title": "Fill the Form",
        "description": "Simply enter your name and email address in the form below. It takes less than 30 seconds!"
      },
      {
        "icon": "fas fa-share-alt",
        "title": "Share (Optional)",
        "description": "Spread the word on social media using the links after you enter. (Sharing is caring, but not required for entry!)"
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Check Your Email",
        "description": "We'll contact the winner via email. Make sure you enter a valid email address and check your spam folder too!"
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-gift", "text": "Amazing $400+ Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win this amazing family adventure!",
    "entryCountText": "Join 1000+ families already entered! Don't miss out!",
    "socialSharePrompt": "Tell your friends about this great giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win a Family Day at Canada's Wonderland! Enter now!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "The winner will be randomly selected with unbiased fairness, ensuring everyone has equal chances. The draw is conducted with certified random number generator."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The winner will be contacted by email at the provided address. Please monitor your inbox and spam/junk folders after July 17, 2025."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "This giveaway is open to families and potential homebuyers residing in the local area who are 18 years or older."
      },
      {
        "q": "When does the giveaway run?",
        "a": "Entries are accepted from June 23, 2025 through the end of July 17, 2025."
      },
      {
        "q": "How will the winner be selected?",
        "a": "A single winner will be chosen at random from all eligible entries after the promotion ends."
      },
      {
        "q": "How and when will the winner be notified?",
        "a": "The winner will be notified by email on or around July 17, 2025 and must respond promptly to claim the prize."
      },
      {
        "q": "How many times can I enter?",
        "a": "One entry per person/email is allowed during the promotion period; duplicates will be disqualified."
      },
      {
        "q": "Is my information secure?",
        "a": "Your privacy is respected. Information is used only for giveaway purposes in accordance with our Privacy Policy. No data is sold."
      }
    ],
    "tips": [
      "Double-check your email before submitting.",
      "Add our contact email to your address book to prevent missing notifications.",
      "Follow Myles Schwartz on Instagram and Facebook for updates and winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Myles Schwartz",
    "organizerLogoUrl": "",
    "email": "contact@mylesschwartz.com",
    "phone": "647-999-5594",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "brokerageName": "Property.Ca",
    "secondaryLogoUrl": "",
    "secondaryLogoAlt": "",
    "social": {
      "facebook": "https://www.facebook.com/profile.php?id=61567387292681",
      "instagram": "https://www.instagram.com/mylesschwartz.to"
    },
    "agentContact": {
      "name": "Myles Schwartz",
      "title": "Real Estate Agent",
      "phone": "647-999-5594",
      "email": "contact@mylesschwartz.com"
    },
    "copyrightOwner": "Property.Ca",
    "footerDisclaimer": "Terms and conditions apply. Contest open to potential homebuyers and growing families only."
  },
  "meta": {
    "pageTitle": "Canada's Wonderland Family Adventure Giveaway!",
    "navBrandLogoText": "Myles Schwartz Realty",
    "privacyPolicyLink": "https://property.ca/privacy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "primaryColorOverride": "",
    "confettiColors": ["#FF7A00", "#FFC107", "#4CAF50", "#FFFFFF", "#000000"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-611",
    "repoUrl": "https://github.com/arslvn93/Giveaway-611",
    "tag": "Canada's Wonderland Family Adventure",
    "netlifyUrl": "http://Giveaway-611.netlify.app",
    "netlifyId": "1003934640"
  }
};