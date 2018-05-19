import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/Peminjaman.js";
import ProfileScreen from "./Kategori1.js";
import ProfileScreen2 from "./Kategori2.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Beranda: { screen: HomeScreen },
    Peminjaman: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen },
    ProfileScreen2: { screen: ProfileScreen2 }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
