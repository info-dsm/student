import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
  business, businessOutline, businessSharp, 
  cog, cogOutline, cogSharp,
  globe, globeOutline, globeSharp, 
  person, personOutline, personSharp, 
  statsChart, statsChartOutline, statsChartSharp 
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Load from './components/Loading/LoadComponent';
import useSWR from 'swr' 
import authFetcher from './utils/AuthFetcher';

setupIonicReact();

const App: React.FC = () => {
  const { data, error } = useSWR("url", authFetcher)

  if (error) {
    return (
      // error 페이지가 현재 준비되지 않아서 일단 이렇게 해놈
      <IonApp>{error}</IonApp>
    )
  }

  if (!data) {
    return (
      <IonApp>
        <Load />
      </IonApp>
    )
  } else {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/account/login">
                <Load />
              </Route>
              <Route exact path="/">
                {/* 페이지 연결 */}
              </Route>
              <Route exact path="/">
                <Redirect to="/account/login" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/list">
                <IonIcon ios={businessOutline} md={businessSharp} icon={business} />
                <IonLabel>회사목록</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/report">
                <IonIcon ios={globeOutline} md={globeSharp} icon={globe} />
                <IonLabel>모집공고</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/admin">
                <IonIcon ios={statsChartOutline} md={statsChartSharp} icon={statsChart} />
                <IonLabel>취업현황</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/admin">
                <IonIcon ios={personOutline} md={personSharp} icon={person} />
                <IonLabel>내정보</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab5" href="/admin">
                <IonIcon ios={cogOutline} md={cogSharp} icon={cog} />
                <IonLabel>문의</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
