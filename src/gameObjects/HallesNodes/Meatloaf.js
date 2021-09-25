import StoryNode from "../StoryNode";

export const meatloaf = new StoryNode(
  `You're asked if you've ever eaten meatloaf, and if so, when that was.`,
  undefined,
  `Be asked about your meatloaf consumption`
);

export const noMeatloaf = new StoryNode(
  `You say you've never had meatloaf. Hell, you've never even heard of that (WTF?)`,
  undefined,
  `Say NO To Meatloaf.`
);

meatloaf.addDescendent(noMeatloaf);
