export default class StoryNode {
  constructor(text, image, choice) {
    this.text = text;
    this.image = image;
    this.choice = choice;
    this.descendents = [];
  }

  addDescendent(descendent) {
    this.descendents.push(descendent);
  }
}
