type ImageId = "steve" | "elon" | "farmer" | "old" | "tech" | "business" | "mark"

interface Effect {
    prosperity?: number
    technology?: number
    freedom?: number
    climate?: number
}

interface CardDefinition {
    name: string;
    text: string;
    image_id: ImageId;
    action_description: {
        left_swipe: string;
        right_swipe: string;
    }
    effects: {
        left_swipe: Effect;
        right_swipe: Effect;
    }
    permanent_effects: {
        left_swipe: Effect;
        right_swipe: Effect;
    }
}

export const cardDefinitions: Record<string, CardDefinition> = {
    inauguration: {
        name: "Secretary-General of the UN",
        text: "The world is at a turning point. After an elaborate selection process, we have chosen you as our advisor. Lead the way!",
        image_id: "steve",
        action_description: {
            left_swipe: "Oh no...",
            right_swipe: "Right on!"
        },
        effects: {
            left_swipe: {},
            right_swipe: {}
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    press_day: {
        name: "Press agent",
        text: "The leaders of major media companies have invited you to a dinner party to discuss their plans of merging.",
        image_id: "steve",
        action_description: {
            left_swipe: "I have to be cautious...",
            right_swipe: "Yum, food!"
        },
        effects: {
            left_swipe: {
                freedom: 10
            },
            right_swipe: {
                freedom: -10
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    coal: {
        name: "A coal emissary",
        text: "We are lacking energy resources to get through the winter. Coal-powered plants are our only hope.",
        image_id: "steve",
        action_description: {
            left_swipe: "No, we'll find another way!",
            right_swipe: "Sounds reasonable"
        },
        effects: {
            left_swipe: {
                prosperity: -10
            },
            right_swipe: {
                climate: 2
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: { climate: 0.5 }
        }
    },
    lon_ask_1: {
        name: "Elon Ask",
        text: "Let's accelerate free speech with this new feathered app.",
        image_id: "elon",
        action_description: {
            left_swipe: "No, we'll continue to use the fax machine!",
            right_swipe: "Sounds great!"
        },
        effects: {
            left_swipe: {
                technology: -10,
                freedom: -5
            },
            right_swipe: {
                technology: 10,
                freedom: -2,
                climate: 5
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: { freedom: -0.5 }
        }
    },
    farmers: {
        name: "A group of local farmers",
        text: "We will all go bankrupt if we don't increase food prices.",
        image_id: "farmer",
        action_description: {
            left_swipe: "No way, the population won't like it.",
            right_swipe: "You're right, we have to do something."
        },
        effects: {
            left_swipe: {
                prosperity: -10
            },
            right_swipe: {
                prosperity: -5
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    scientists_success: {
        name: "Diligent scientists",
        text: "We have developed this amazing new technology which will clean our air.",
        image_id: "old",
        action_description: {
            left_swipe: "I am not sure this will work...",
            right_swipe: "Amazing, you'll be famous!"
        },
        effects: {
            left_swipe: {
                climate: 5
            },
            right_swipe: {
                prosperity: -5,
                climate: -5,
                technology: 5
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: { climate: -1 }
        }
    },
    scientists_fail: {
        name: "Disruptive scientists",
        text: "We have developed this amazing new technology which will clean our air.",
        image_id: "old",
        action_description: {
            left_swipe: "I am not sure this will work...",
            right_swipe: "Amazing, you'll be famous!"
        },
        effects: {
            left_swipe: {
                technology: -5,
            },
            right_swipe: {
                prosperity: -15
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    flooding: {
        name: "Farmer from devastated area",
        text: "Our harvest was ruined by the flood. You need to help us or we'll starve!",
        image_id: "farmer",
        action_description: {
            left_swipe: "Nah",
            right_swipe: "Of course!"
        },
        effects: {
            "left_swipe": {
                prosperity: -5
            },
            "right_swipe": {
                climate: 5,
                prosperity: -10
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    cars: {
        name: "Elon Ask",
        text: "You should invest in my electric car company. I'll change the world.",
        image_id: "elon",
        action_description: {
            left_swipe: "Yeah right...",
            right_swipe: "Wow, I'm in!"
        },
        effects: {
            left_swipe: {
                freedom: 5
            },
            right_swipe: {
                climate: -1,
                technology: 10
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    free_press: {
        name: "Investigative Journalist",
        text: "We uncovered a ploy involving several high ranking politicians to stop solar power. We have to publish this!",
        image_id: "steve",
        action_description: {
            left_swipe: "No! Far too destabilizing",
            right_swipe: "Yes, we need to know the truth"
        },
        effects: {
            left_swipe: {
                freedom: -10,
                climate: 10
            },
            right_swipe: {
                freedom: 10,
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    taxes: {
        name: "Economists",
        text: "Our models predict a recession if you don't adjust the tax system.",
        image_id: "business",
        action_description: {
            left_swipe: "Nah, don't think so",
            right_swipe: "Ah yes, quite sensible"
        },
        effects: {
            left_swipe: {
                prosperity: -5,
            },
            right_swipe: {
                prosperity: 10,
            }
        },
        permanent_effects: {
            left_swipe: { prosperity: -1 },
            right_swipe: {}
        }
    },
    crypto: {
        name: "Tech Bro",
        text: "You definitely have to invest in this crypto coin I just invented. Think of all the NFTs you could buy!",
        image_id: "tech",
        action_description: {
            left_swipe: "Byeeee",
            right_swipe: "I'm going all in!"
        },
        effects: {
            left_swipe: {
                technology: -10,
            },
            right_swipe: {
                prosperity: -20,
                freedom: 5
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    shady: {
        name: "Shady dude in an alley",
        text: "Yo, take this pill, it'll make you feel great.",
        image_id: "old",
        action_description: {
            left_swipe: "Maybe another time",
            right_swipe: "Let's goooo"
        },
        effects: {
            left_swipe: {
                technology: -5
            },
            right_swipe: {
                freedom: 10
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    ceo: {
        name: "CEO of that company",
        text: "I discussed with my board and we think you should lower regulations.",
        image_id: "business",
        action_description: {
            left_swipe: "No thanks",
            right_swipe: "I'll get right to it"
        },
        effects: {
            left_swipe: {
                prosperity: -5
            },
            right_swipe: {
                freedom: 5,
                prosperity: 5
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    advisors: {
        name: "Board of UN advisors",
        text: "We suggest adjusting our voting rules to make allowing new technologies easier.",
        image_id: "business",
        action_description: {
            left_swipe: "I'd rather not",
            right_swipe: "Okay"
        },
        effects: {
            left_swipe: {
                freedom: -5
            },
            right_swipe: {
                freedom: 5,
                technology: 5
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    lobbyists: {
        name: "Friendly lobbyist",
        text: "It would be in both of our interests for you to follow our suggested environment reforms.",
        image_id: "business",
        action_description: {
            left_swipe: "Nope",
            right_swipe: "Yes! Thanks for the watch."
        },
        effects: {
            left_swipe: {
                freedom: 5,
            },
            right_swipe: {
                climate: -15,
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    wm: {
        name: "FIQA manager",
        text: "Having the next world cup in this country will surely benefit your popularity.",
        image_id: "business",
        action_description: {
            left_swipe: "I prefer chess",
            right_swipe: "Ole ole ole!!!"
        },
        effects: {
            left_swipe: {
                technology: -5,
            },
            right_swipe: {
                prosperity: -10,
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {}
        }
    },
    meta: {
        name: "Mark Saltmountain",
        text: "The UN should consider moving their headquarters into the metaverse,",
        image_id: "mark",
        action_description: {
            left_swipe: "We're already in Second Life",
            right_swipe: "Beam me up"
        },
        effects: {
            left_swipe: {
                technology: -5,
            },
            right_swipe: {
                technology: 5,
                prosperity: -5,
                climate: 10
            }
        },
        permanent_effects: {
            left_swipe: {},
            right_swipe: {
                climate: 0.5
            }
        }
    },
}
