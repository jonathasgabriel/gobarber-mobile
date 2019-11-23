import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

import api from '~/services/api';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const formattedDate = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: enUS }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/5/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{formattedDate}</Time>
        <SubmitButton onPress={() => handleAddAppointment()}>
          Confirm appointment
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirm appointment',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
