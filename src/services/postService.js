const { BlogPost, PostCategory } = require('../models'); 

const createPost = async ({ title, content, categoryIds, userId }) => {
  try {
    const newPost = await BlogPost.create({ 
      title, content, userId, updated: new Date(), published: new Date() });

    const promises = categoryIds.map((category) => PostCategory
      .create({ postId: newPost.id, categoryId: category }));
      
    await Promise.all(promises);
    
    return newPost;
  } catch (e) {
    console.log(e); 
  }
};

module.exports = {
  createPost,
};