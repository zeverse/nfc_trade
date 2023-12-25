import { View } from "react-native";
import { BalanceStatistic } from "../components/balance.statistic";
import { useEffect, useState } from "react";
import { getDummyBalance } from "../api/balance.api";
import { Divider } from "react-native-paper";
import { ReadCardBtn } from "../components/read_card.btn";
import { TransactionChart } from "../components/transaction.chart";
import { TransactionData } from "../models/transaction.model";
import { getDummyTransactionData } from "../api/transaction.api";
import { Balance } from "../models/balance.model";

export const DashboardView = () => {
    const [balance, setBalance] = useState<Balance>();
    const [transactionHistory, setTransactionHistory] = useState<TransactionData>();

    useEffect(() => {
        getDummyBalance().then(
            (res) => setBalance(res)
        );

        getDummyTransactionData().then(
            (res) => setTransactionHistory(res)
        );
    }, []);

    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <View>
                <BalanceStatistic value={balance?.value} currency={balance?.currency} />
            </View>

            <Divider style={{ marginVertical: 10 }} />

            <View>
                <ReadCardBtn onPress={() => {
                    console.log("wtf");
                }} />
            </View>

            <View style={{ marginTop: 10 }}>
                <TransactionChart data={transactionHistory} />
            </View>
        </View>
    );
};