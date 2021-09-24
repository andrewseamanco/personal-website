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
  What do you mean the world is ending?  Come on we need to go to school
  and listen to Rebecca Black's it's Friday.
  `,
  'galaxy',
  'Wake up it is 2005'
)

export const checkTheRoom = new StoryNode(
  `
  You take off your shoes and socks and take a deep breath as you prepare for lift off.
  Even though you are frequently visiting clients, you still get a little nervous since you have
  a small fear of heights.  Once you are up and moving though you are fine (usually).  The captian's voice
  comes over the room speaker.

  "Hey folks.  Should be a smooth flight to earth.  The current flight time is a day and six hours.
  You should be on the ground in Los Angeles soon.  Crew please prepare the cabin for takeoff."
  `,
  'dog',
  'Check out your room',
)

export const braceYourself = new StoryNode(
  `
  The train begins to rattle as the engines lift it off of the ground.  Mars has a strange
  beauty to it.  Even though you always miss the green and blues of earth, the red and sleek black
  buildings are difficult to
  `,
  'dog',
  'Chill'
)

export const insaneLick = new StoryNode(
  `
  James hit the most devious lick I have ever seen
  `,
  'dog',
  'Lick'
)

storyRoot.addDescendent(checkTheRoom);
storyRoot.addDescendent(braceYourself);
storyRoot.addDescendent(insaneLick)
braceYourself.addDescendent(storyRoot)

export default StoryNode
