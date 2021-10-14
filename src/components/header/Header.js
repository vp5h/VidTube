import React, { useState } from 'react';
import '../header/_header.scss';

import { FaBars } from 'react-icons/fa';
import { MdNotifications, MdApps } from 'react-icons/md';

import { AiOutlineSearch } from 'react-icons/ai';
const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/475/727/non_2x/young-man-profile-avatar-character-flat-style-icon-free-vector.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
