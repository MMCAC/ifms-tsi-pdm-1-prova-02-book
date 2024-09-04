import { View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from "./style"

export default function TopLogo(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="book-outline" size="60" color="white"
            />
        </View>
    );
};