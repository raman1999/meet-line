import { Routes, Route } from "react-router-dom";
import { UserGrid } from "../Components";
import {
  Authentication,
  Bookmark,
  Explore,
  Home,
  NotFound,
  Notification,
  OtherUserProfile,
  UserProfile,
} from "../Pages";

import { RequiresAuth } from "./RequiresAuth";

export function RoutingPath() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route
        path="/user"
        element={
          <RequiresAuth>
            <UserGrid />
          </RequiresAuth>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="bookmarks" element={<Bookmark />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path=":userID" element={<OtherUserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
