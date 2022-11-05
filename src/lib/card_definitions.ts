type ImageId = "image" | "lon_ask"

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
        name: "Secretary-General of the United Nations",
        text: "The world is at a turning point, after an elaborate selection process, we have chosen you as our most capable advisor. Lead the way!",
        image_id: "image",
        action_description: {
            left_swipe: "Oh no...",
            right_swipe: "Right on!"
        },
        effects: {
            "left_swipe": {},
            "right_swipe": {}
        },
        permanent_effects: {
            "left_swipe": {},
            "right_swipe": {}
        }
    },
    press_day: {
        name: "Press agent",
        text: "The leaders of major media companies have invited you to a dinner party to discuss their plans of merging.",
        image_id: "image",
        action_description: {
            left_swipe: "I have to prepare...",
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
            "left_swipe": {}, "right_swipe": {}
        }
    },
    coal: {
        name: "A coal emissary",
        text: "We are lacking energy resources to get through the winter. Coal-powered plants are our only hope.",
        image_id: "image",
        action_description: {
            left_swipe: "No, we'll find another way!",
            right_swipe: "Sounds reasonable"
        },
        effects: {
            left_swipe: {
                prosperity: -10
            },
            right_swipe: {
                climate: -10
            }
        },
        permanent_effects: {
            "left_swipe": {}, "right_swipe": {}
        }
    },
    lon_ask_1: {
        name: "Lon Ask",
        text: "Let's accelerate free speech with this new feathered app.",
        image_id: "lon_ask",
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
                freedom: -10,
                climate: -5
            }
        },
        permanent_effects: {
            "left_swipe": {}, "right_swipe": {}
        }
    }
}
