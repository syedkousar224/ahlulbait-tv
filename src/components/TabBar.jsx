function TabBar() {
  const tabs = ['Notifications', 'Purchase', 'Groups', 'Settings', 'Profile'];

  return (
    <div className="tab-bar">
      {tabs.map((tab, index) => (
        <button className="tab-item" key={index}>
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabBar;