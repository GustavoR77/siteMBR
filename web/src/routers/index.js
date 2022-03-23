import React from "react";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

// importing all the themes
import Theme1 from "../themes/theme1";
import Theme2 from "../themes/theme2";
import Theme3 from "../themes/theme3";
import Theme4 from "../themes/theme4";
import Theme5 from "../themes/theme5";
import Theme6 from "../themes/theme6";
import Login1 from "../themes/login1";
import Login2 from "../themes/login2";
import SignUp1 from "../themes/signup1";
import SignUp2 from "../themes/signup2";
import ResetPassword from "../themes/resetPassword";
import ChangePassword from "../themes/changePassword";
import Download from "../themes/download";
import Review from "../themes/review";
import Faq from "../themes/faq";
import NotFound from "../themes/404";
import ComingSoon from "../themes/comingSoon";
import ThankYou from "../themes/thankyou";
import Team from "../themes/team";
import SingleTeam from "../themes/singleTeam";
import Blog from "../themes/blog";
import BlogLeft from "../themes/blogLeft";
import BlogRight from "../themes/blogRight";
import Homepage from "../themes/homepage";
import MagicClub from "../themes/magic-club";
import Alt from "../themes/alt";
import Kubets from "../themes/kubets";
import MelhorViagem from "../themes/melhor-viagem";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Theme5} />
          <Route exact path="/magic-club" component={MagicClub} />
          <Route exact path="/alt" component={Alt} />
          <Route exact path="/kubets" component={Kubets} />
          <Route exact path="/melhor-viagem" component={MelhorViagem} />
          {/* <Route exact path="/theme1" component={Theme1} />
          <Route exact path="/theme2" component={Theme2} />
          <Route exact path="/theme3" component={Theme3} />
          <Route exact path="/theme4" component={Theme4} />
          <Route exact path="/theme5" component={Theme5} />
          <Route exact path="/theme6" component={Theme6} />
          <Route exact path="/login1" component={Login1} />
          <Route exact path="/login2" component={Login2} />
          <Route exact path="/signup1" component={SignUp1} />
          <Route exact path="/signup2" component={SignUp2} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/changePassword" component={ChangePassword} />
          <Route exact path="/download" component={Download} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/404" component={NotFound} />
          <Route path="*" exact={true} component={NotFound} />
          <Route exact path="/comingSoon" component={ComingSoon} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/singleTeam" component={SingleTeam} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blogLeft" component={BlogLeft} />
  <Route exact path="/blogRight" component={BlogRight} /> */}
        </Switch> 
      </Router>
    </>
  );
}
export default Routes;
