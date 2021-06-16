import { useHistory } from "react-router-dom";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "carbon-components-react/lib/components/UIShell";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedin, setIsLoggedin] = useState(
    window.sessionStorage.getItem("auth.credentials")
  );
  console.log(window.location.pathname.length);
  const history = useHistory();
  useEffect(() => {
    isLoggedin === null && history.push("/");
  }, []);

  return (
    <div>
      {window.location.pathname.length > 1 && (
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search" onClick={() => {history.push('/searchpatient')}}>
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Patient Registration" onClick={() => {history.push('/addpatient')}}>
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    </div>
  );
};

export default Navbar;
