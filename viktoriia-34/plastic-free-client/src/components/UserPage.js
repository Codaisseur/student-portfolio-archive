import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/user/actions";

const selectUser = (reduxState) => {
  return reduxState.session.user;
};

export default function UserPageContainer() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    user && dispatch(fetchUser(user.id));
  }, []);
  return (
    <div>
      <h2>Hello, {user.name}</h2>
      <h3>Saved Locations</h3>
      <ul>
        {user &&
          user.Location &&
          user.Location.length > 0 &&
          user.Location.map((location, i) => (
            <li key={i}>
              {location.name}, {location.address}
            </li>
          ))}
      </ul>
      {/* <h3>Saved Online Stores</h3>
      <ul>
        {user &&
          user.OnlineStore &&
          user.OnlineStore.length > 0 &&
          user.OnlineStore.map((store, i) => <li key={i}>{store.link}</li>)}
      </ul> */}
      {/* <p>email: {user.email}</p> */}
    </div>
  );
}
