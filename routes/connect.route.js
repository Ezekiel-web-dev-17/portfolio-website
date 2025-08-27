import { Router } from "express";
import Comment from "../model/comment.model.js";

const commentRoute = Router();

commentRoute.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find({});

    if (!comments)
      return res
        .status(200)
        .json({ success: true, message: "No comment has being posted yet" });

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    next(error);
  }
});

commentRoute.post("/", async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields the fields are required.",
      });
    }

    const comment = await Comment.create({ name, email, subject, message });

    res.status(201).json({ success: true, message: "Comment Posted", comment });
  } catch (error) {
    next(error);
  }
});

export default commentRoute;
