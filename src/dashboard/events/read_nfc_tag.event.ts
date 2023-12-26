import NfcManager from "react-native-nfc-manager";

export const readNFCTag = async (): Promise<void> => {
    await NfcManager.registerTagEvent();
};
