import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";


export const fetchPostsAndUsers=()=> async (dispatch, getState) =>{
    // console.log('About to fetch posts.')
    
    await dispatch(fetchPosts());
     
   const userId= _.uniq(_.map(getState().posts, 'userId'));
   userId.forEach(id=> dispatch(fetchUser(id)));
   //console.log(userId);

    //  console.log(getState().posts)


}

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (id) =>  (dispatch) => {
//   // const response = await jsonPlaceholder.get(`/users/${id}`);
//   // dispatch({ type: "FETCH_USER", payload: response.data });

//   _fetchUser(id , dispatch);
// };

// const _fetchUser = _.memoize(async(id, dispatch)=> {

//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// export const fetchUser = function(id) {
//  return _.memoize(async function(dispatch)  {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
// };
