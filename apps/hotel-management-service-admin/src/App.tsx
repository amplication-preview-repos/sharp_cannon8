import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { MenuItemList } from "./menuItem/MenuItemList";
import { MenuItemCreate } from "./menuItem/MenuItemCreate";
import { MenuItemEdit } from "./menuItem/MenuItemEdit";
import { MenuItemShow } from "./menuItem/MenuItemShow";
import { NonGuestList } from "./nonGuest/NonGuestList";
import { NonGuestCreate } from "./nonGuest/NonGuestCreate";
import { NonGuestEdit } from "./nonGuest/NonGuestEdit";
import { NonGuestShow } from "./nonGuest/NonGuestShow";
import { CarWashList } from "./carWash/CarWashList";
import { CarWashCreate } from "./carWash/CarWashCreate";
import { CarWashEdit } from "./carWash/CarWashEdit";
import { CarWashShow } from "./carWash/CarWashShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HotelManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="MenuItem"
          list={MenuItemList}
          edit={MenuItemEdit}
          create={MenuItemCreate}
          show={MenuItemShow}
        />
        <Resource
          name="NonGuest"
          list={NonGuestList}
          edit={NonGuestEdit}
          create={NonGuestCreate}
          show={NonGuestShow}
        />
        <Resource
          name="CarWash"
          list={CarWashList}
          edit={CarWashEdit}
          create={CarWashCreate}
          show={CarWashShow}
        />
      </Admin>
    </div>
  );
};

export default App;
