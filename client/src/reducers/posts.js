export default (posts = [], action) => {
  switch (action.type) {
    case "Fetch_all":
      return action.payload;
    case "like":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "create":
      return [...posts, action.payload];
    case "update":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "delete":
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
