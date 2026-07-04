import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert, Platform } from 'react-native';
import { COLORS } from '../constants/theme.js';
import { MOCK_EQUIPMENTS } from '../mocks/equipments';
import RecordingView from '../components/RecordingView.js';
import { useTimer } from '../hooks/useTimer.js';
import { getDevices } from '../services/deviceService.js';
import FeedbackModal from '../components/FeedbackModal.js';
import { postSession } from '../services/sessionService.js';

export default function SessionScreen() {
  const [selectedKit, setSelectedKit] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);
        const data = await getDevices(); // llamada a GET /api/v1/devices
        setDevices(data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const handleStartSession = () => {
    setIsRecording(true);
    startTimer();
  };

  const handleStopSession = () => {
    stopTimer();
    setShowModal(true);
  };

  const handleSaveAndSend = async (finalStatus) => {
    const payload = {
        equipmentId: selectedKit,
        duration: time,
        status: finalStatus,
    };
    // se resetean los valores para una nueva sesion.
    const resetApplicationState = () => {
      setShowModal(false);
      setIsRecording(false);
      setSelectedKit(null);
      resetTimer();
    };

    try {
      await postSession(payload);

      // DETECCIÓN DE PLATAFORMA
      if (Platform.OS === 'web') {
        alert('Success: Session payload sent successfully, Check console for more details');
        resetApplicationState();
      } else {
        Alert.alert(
          'Success', 
          'Session payload sent successfully, Check console for more details',
          [
            {
              text: 'OK',
              onPress: resetApplicationState
            }
          ]
        );
      }

    } catch (error) {
      if (Platform.OS === 'web') {
        alert('Error: Failed to send payload');
      } else {
        Alert.alert('Error', 'Failed to send payload');
      }
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={COLORS.accentGreen} />
        <Text style={styles.loadingText}>FETCHING DEVICES...</Text>
      </View>
    );
  }

return (
    <View style={styles.container}>
      {isRecording ? (
        <RecordingView 
          time={time} 
          selectedKit={selectedKit} 
          onStopSession={handleStopSession} 
        />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>SELECT</Text>
            <Text style={styles.title}>EQUIPMENT</Text>
            <View style={styles.titleUnderline} />
          </View>

          <ScrollView 
            style={styles.listContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20, flexGrow: 1, justifyContent: 'center' }}
          >
            {devices.map((kit) => {
              const isSelected = selectedKit === kit.id;
              return (
                <TouchableOpacity
                  key={kit.id}
                  activeOpacity={0.8}
                  style={[styles.card, isSelected && styles.cardSelected]}
                  onPress={() => setSelectedKit(kit.id)}
                >
                  <View>
                    <Text style={styles.cardStatus}>o {kit.status}</Text>
                    <Text style={styles.cardTitle}>{kit.name}</Text>
                    <Text style={styles.cardDescription}>{kit.description}</Text>
                  </View>
                  <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={[styles.startButton, !selectedKit && styles.startButtonDisabled]}
            disabled={!selectedKit}
            onPress={handleStartSession}
          >
            <Text style={styles.startButtonText}>▶ START SESSION</Text>
          </TouchableOpacity>
        </>
      )}

      <FeedbackModal 
        visible={showModal} 
        onSave={handleSaveAndSend} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: COLORS.background,
  },
  header: {
    marginBottom: 40,
  },
  breadcrumb: {
    color: COLORS.textSecondary,
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 36,
    fontWeight: '900',
  },
  titleUnderline: {
    height: 4,
    width: 60,
    backgroundColor: COLORS.accentGreen,
    marginTop: 12,
    borderRadius: 2,
  },
  listContainer: {
    flex: 1, 
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 30,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  cardSelected: {
    borderColor: COLORS.accentGreen, 
  },
  cardStatus: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  cardTitle: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: COLORS.textSecondary,
    fontSize: 10,
    letterSpacing: 1,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  radioCircleSelected: {
    backgroundColor: COLORS.accentGreen,
    borderColor: COLORS.accentGreen,
  },
  startButton: {
    backgroundColor: COLORS.accentGreen,
    paddingVertical: 30,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 60, 
  },
  startButtonDisabled: {
    backgroundColor: COLORS.border, 
    opacity: 0.5,
  },
  startButtonText: {
    color: '#000000', 
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: COLORS.textSecondary,
    marginTop: 16,
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});