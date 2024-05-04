import User from "../models/userModel.js";
import Post from "../models/workoutModel.js";

const createPost = async (req, res) => {
  try {
    const { postedBy, workoutName, image } = req.body;
    if ((!postedBy && !workoutName) || !image) {
      return res.status(400).json({ error: "Fields are required" });
    }
    const user =await User.findById(postedBy)
    console.log("user: ", user);
    if(!user){
      return res.status(400).json({error:"User not Found"})
    }
    if(user._id.toString()!== req.user._id.toString()){
      return res.status(400).json({error:"Unauthorized to Create Post"})
    }
    const newPost = new Post({ postedBy, workoutName, image });
    await newPost.save();
    res.status(201).json({ message: "Post Created Successfully", newPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    // Check if there are any posts retrieved
    if (!posts.length) {
      return res
        .status(200)
        .json({ message: "There are currently no posts in the database." });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getFeedPosts, createPost };
// export { createPost, getFeedPosts, getPost };
