class StoryNode {
  constructor(text, image, choice) {
    this.text = text
    this.image = image
    this.choice = choice
    this.descendents = []
  }

  addDescendent(descendent) {
    this.descendents.push(descendent)
  }
}

export const storyRoot = new StoryNode(
  `
  You glance up at the clock again.  It is painfully far from 1:15, the end of
  your religion period.  Ugh, you glance over at your friend all the way on the
  other side of the room who is blissfully playing a game on his iPad and
  disregarding the teacher completely.  12:37:03, 12:37:04, 12:37:05.  You need to
  get do something soon before you die of boredom.
  `,
  'clock',
  'Second Period',
)

export const religousArgument = new StoryNode(
  `

  `,
  'clock',
  'Pick a fight',
)
