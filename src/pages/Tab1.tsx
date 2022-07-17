import { 
  IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, 
  IonCardTitle, IonCardContent, IonButton, IonFooter, IonToolbar, 
  useIonAlert
        } from '@ionic/react';

import Header from '../components/Header';
import React, { useState, useRef } from 'react';
import axios from "axios";

export const Navbar: React.FC = () => {

  const [presentAlert] = useIonAlert();
  let [result, setResult] = useState<any>([]);
  let [page, setPage] = useState<number>(2);
  
  const promise = axios.get("https://raw.githubusercontent.com/lianafinaritra/sb-admin/main/src/scss/layout/" + page);
          promise
            .then((response) => {
              setResult(response.data);
            })
            .catch((error) => {
              presentAlert({
                header: 'ERREUR!',
                message: 'Veuillez vérifier votre connexion internet',
                buttons: ['OK'],
              });
  });
  
  return (
    <IonPage>
      <Header/>
      <IonContent>
          {    
            result.map((item: any) => (
              <IonCard className="Card">
              <IonCardHeader >
                <IonCardTitle className='cardtitle'>{item.company}</IonCardTitle>
                <IonCardSubtitle>{item.title}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>{item.description}</IonCardContent>
              </IonCard>
            ))    
          }

      </IonContent>
      <IonFooter>
        <IonToolbar className='footer'>
          <IonButton color='primary' className='precedent'onClick={(): void =>{
            if(page<2){setPage(2)}
            else{setPage( page - 1)}           
          }}>Precedent</IonButton>
          <IonButton color="primary" className='suivant'onClick={(): void =>{
            if(page>9){setPage(9)}
            else{setPage( page + 1)}   
          }}>Suivant</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Navbar;
