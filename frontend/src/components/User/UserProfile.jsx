function UserProfile({ username, avatar, toggleSidebar }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={
          avatar ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }
        alt={username}
        className="w-10 h-10 rounded-full border-2 border-gray-500 cursor-pointer"
        onClick={toggleSidebar}
      />
      <span className="text-2xl font-light leading-none">{username}</span>
    </div>
  );
}

export default UserProfile;
