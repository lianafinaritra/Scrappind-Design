import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

export const Header: React.FC = () => {
    return (
        <IonHeader>
        <IonToolbar>
          <IonTitle className="titre">JOB LIST</IonTitle>   
        </IonToolbar>
      </IonHeader>
    );
  };
  
  export default Header;
  