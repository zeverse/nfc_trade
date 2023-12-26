import { View } from "react-native";
import { NFCTrade } from "./src";
import { Button } from "react-native-paper";
import NfcManager, { Ndef, NfcTech } from "react-native-nfc-manager";

const writeNFC = async () => {
    let result = false;

    try {
        await NfcManager.requestTechnology(NfcTech.Ndef);

        const bytes = Ndef.encodeMessage([Ndef.uriRecord("https://blog.logrocket.com/")]);

        if (bytes) {
            await NfcManager.ndefHandler
                .writeNdefMessage(bytes);
            result = true;
        }
    } catch (ex) {
        console.warn(ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }

    return result;
};
export default function App() {

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            {/*<NFCTrade />*/}
            <Button onPress={writeNFC}>Lol</Button>
        </View>
    );
}