import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import theme from '../styles/theme';
import { Doctor } from '../types';

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Atuador redondo, de dupla ação DSNU',
    produto: 'Atuador',
    image: require('../../assets/atuador_festo.png'), // local
  },
  {
    id: '2',
    name: 'Atuador normalizado DSBC',
    produto: 'Atuador',
    image: require('../../assets/Atuador normalizado DSBC.png'), // local
  },
  {
    id: '3',
    name: 'Atuador linear DFPC',
    produto: 'Atuador',
    image: require('../../assets/Atuador linear DFPC.png'), // local
  },
];

type DoctorListProps = {
  onSelect: (doctorId: string) => void;
};

const DoctorList: React.FC<DoctorListProps> = ({ onSelect }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  return (
    <Container>
      <Title>Selecione o componente</Title>
      <DoctorScroll>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            selected={selectedDoctor === doctor.id}
            onPress={() => {
              setSelectedDoctor(doctor.id);
              onSelect(doctor.id);
            }}
          >
            <DoctorImage
              source={
                typeof doctor.image === 'string'
                  ? { uri: doctor.image }
                  : doctor.image
              }
              resizeMode="cover"
            />
            <DoctorInfo>
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
            </DoctorInfo>
          </DoctorCard>
        ))}
      </DoctorScroll>
    </Container>
  );
};

const Container = styled.View`
  padding: ${theme.spacing.medium}px;
`;

const Title = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium}px;
`;

const DoctorScroll = styled.ScrollView`
  margin-bottom: ${theme.spacing.large}px;
`;

const DoctorCard = styled(TouchableOpacity)<{ selected: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: ${theme.spacing.medium}px;
  background-color: ${(props) =>
    props.selected ? theme.colors.primary : theme.colors.white};
  border-radius: 8px;
  margin-bottom: ${theme.spacing.medium}px;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

const DoctorImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: ${theme.spacing.medium}px;
`;

const DoctorInfo = styled.View`
  flex: 1;
`;

const DoctorName = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.text};
`;

const DoctorSpecialty = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.8;
`;

export default DoctorList;
