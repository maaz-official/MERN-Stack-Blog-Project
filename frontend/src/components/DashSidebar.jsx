import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleProfileClick = () => {
    window.location.href = '/dashboard?tab=profile';
  };

  return (
    <Sidebar className="w-full md:w-56 bg-gray-900 text-white">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div onClick={handleProfileClick} className="cursor-pointer">
            <Sidebar.Item 
              active={tab === "profile"} 
              icon={HiUser} 
              label={"Profile"} 
              labelColor="dark"
              className="hover:bg-gray-400"
            >
              Profile
            </Sidebar.Item>
          </div>
          <Sidebar.Item 
            icon={HiArrowSmRight} 
            labelColor="light"
            className="hover:bg-gray-400 cursor-pointer"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
