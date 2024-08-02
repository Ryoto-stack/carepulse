import * as sdk from 'node-appwrite'

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env



const client = new sdk.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ac8494000afaa564da')
    .setKey('09e1e2a94cd60502266ae117d55764af95098ed1c4b45151368a190cf3080b337585b26a5deaa52cba8e7432ca1a7e6db567b5ddba510453a5d8eef0cc16ba68a7c856df0616fb5a957b7fa85117ad0b915378aabed946adbd8e887467ed046fe3075179bd5824641e4f0ab2eca6ba46f137396c90516c4d43c70b71879d0417');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);