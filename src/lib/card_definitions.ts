type ImageId = "image"

interface Effect {
    prosperity?: number
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
}

export const cardDefinitions: Record<string, CardDefinition> = {
    initial_card: {
        name: "initial_card",
        text: "text",
        image_id: "image",
        action_description: {
            left_swipe: "left",
            right_swipe: "right"
        },
        effects: {
            "left_swipe": {
                prosperity: 10
            },
            "right_swipe": {
                prosperity: -10
            }
        }
    },
    special_event: {
        name: "special_event",
        text: "text",
        image_id: "image",
        action_description: {
            left_swipe: "left",
            right_swipe: "right"
        },
        effects: {
            left_swipe: {
                prosperity: 30
            },
            right_swipe: {
                prosperity: -30
            }
        }
    }
}
