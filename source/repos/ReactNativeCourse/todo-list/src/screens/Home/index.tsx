import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Home = () => {
    const router = useRouter();
    const [isTextInputFocused, setTextInputFocused] = useState(false)

    return (
        <SafeAreaView style={{flex: 1}}>            
            <View style={styles(false).containerSuperior}>
                <Image
                    source={require("../../../assets/images/Logo.png")}
                    style={styles(false).logo}
                />
            </View>
            <View style={styles(false).containerInferior}>       
                <View style={styles(false).containerInput}>
                    <TextInput 
                        style={styles(isTextInputFocused).textInput}                  
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#808080'}
                        cursorColor={'#F2F2F2'}
                        onFocus={() => setTextInputFocused(true)}
                        onSubmitEditing={() => setTextInputFocused(false)}
                        onEndEditing={() => setTextInputFocused(false)}
                    />
                    <TouchableOpacity 
                        style={styles(false).btnAdd}
                    >
                        <Image
                            source={require('../../../assets/images/Layer_2.png')}
                            resizeMode='contain' 
                        />
                    </TouchableOpacity>
                </View> 
                <View style={styles(false).containerTasks}>
                    <View style={styles(false).pending}>
                        <Text style={styles(false).textLeft}>Criadas</Text>
                        <Text style={styles(false).textLeft}>0</Text>
                    </View>     
                    <View style={styles(false).done}>
                        <Text style={styles(false).textLeft}>Concluídas</Text>
                        <Text>0</Text>
                    </View>               
                </View>                      
            </View>           
        </SafeAreaView>
    )
}

export default Home;