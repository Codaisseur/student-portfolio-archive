const { Router } = require("express");
const Story = require("../models").story;
const Paragraph = require("../models/").paragraph;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll({
      include: [User],
      order: [["id", "ASC"]],
    });

    res.status(200).json(allStories);
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/story/:storyId", async (req, res) => {
  try {
    const oneStory = await Story.findOne({
      where: { id: req.params.storyId },
      include: [User],
    });

    res.status(200).json(oneStory);
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/paragraph/:storyId/:paragraphNumber", async (req, res) => {
  try {
    const paragraph = await Paragraph.findOne({
      where: {
        storyId: req.params.storyId,
        paragraphNumber: req.params.paragraphNumber,
      },
    });

    res.status(200).json(paragraph);
  } catch (e) {
    console.log("error: ", e);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/update/paragraph/read", async (req, res, next) => {
  try {
    const { storyId, paragraphNumber, timesRead } = req.body;
    await Paragraph.update(
      {
        timesRead,
      },
      {
        where: {
          storyId,
          paragraphNumber,
        },
      }
    );

    res.status(200).json("paragraph updated!");
  } catch (e) {
    console.log("error: ", e);
    next(e);
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const storyByUser = await Story.findAll({
      where: { userId: req.params.userId },
      order: [["id", "ASC"]],
    });

    res.status(200).json(storyByUser);
  } catch (e) {
    console.log(e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/user/story/:userId/:storyId", async (req, res) => {
  try {
    const storyInfo = await Story.findOne({
      where: {
        id: req.params.storyId,
        userId: req.params.userId,
      },
      include: [Paragraph],
      order: [[{ model: Paragraph, as: "paragraphs" }, "id", "ASC"]],
    });

    res.status(200).json(storyInfo);
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/clicktitle", async (req, res, next) => {
  try {
    const { id } = req.body;
    const story = await Story.findByPk(id);
    story.update({ titleClicked: story.titleClicked + 1 });
    res.json("updated title!");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
