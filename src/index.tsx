import { NotSupportedView } from "./common/components/not_supported.view";
import { View } from "react-native";
import { DashboardView } from "./dashboard/views/dashboard.view";

export const NFCTrade = () => {
    return (
        <View style={{ flex: 1 }}>
            {/*<NotSupportedView />*/}
            <DashboardView />
        </View>
    );
};