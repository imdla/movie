import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login/request");
    }
  }, [isLoggedIn]);

  return (
    <>
      <h2>My Favorite Movie Page</h2>
      <div>
        <ul>
          <li>
            <h3>title</h3>
            <p>content</p>
          </li>
        </ul>
      </div>
    </>
  );
}
