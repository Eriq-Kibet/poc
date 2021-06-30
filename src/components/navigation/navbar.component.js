import { useHistory } from "react-router-dom";
import Search20 from "@carbon/icons-react/lib/search/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "carbon-components-react/lib/components/UIShell";
import { useEffect, useState } from "react";
import { AddAlt32, Logout32 } from "@carbon/icons-react";
import RateProject from "./rating.component";

const Navbar = () => {
  const [isLoggedin] = useState(
    window.sessionStorage.getItem("auth.credentials")
  );
  const history = useHistory();
  useEffect(() => {
    isLoggedin === null && history.push("/");
  }, [isLoggedin, history]);

  return (
    <div>
      {window.location.pathname.length > 1 && (
        <Header aria-label="Point of Care Ampath">
          <HeaderName href="#" prefix="POC">
            [Point of Care, Ampath]
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Search"
              onClick={() => {
                history.push("/searchpatient");
              }}
            >
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Patient Registration"
              onClick={() => {
                history.push("/registerpatient");
              }}
            >
              <AddAlt32 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Logout"
              onClick={() => {
                <RateProject />;
                sessionStorage.clear();
                history.push("/");
              }}
            >
              <Logout32 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    </div>
  );
};

export default Navbar;
