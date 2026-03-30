import mitt from 'mitt'

type Events = {
  'timer-action': any
}

export const EventBus = mitt<Events>()