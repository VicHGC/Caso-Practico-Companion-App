import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme.js';

export default function RecordingView({ time, selectedKit, onStopSession }) {
  return (
    <View style={styles.container}>
      <View style={styles.recordingHeader}>
        <View style={styles.recordingIndicator}>
          <View style={styles.redDot} />
          <Text style={styles.recordingText}>RECORDING</Text>
        </View>
        <Text style={styles.selectedKitText}>{selectedKit}</Text>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerLabel}>SESSION DURATION</Text>
        <Text style={styles.timerValue}>{time}</Text>
        
        <View style={styles.audioWaves}>
          <View style={[styles.wave, { height: 12 }]} />
          <View style={[styles.wave, { height: 24 }]} />
          <View style={[styles.wave, { height: 16 }]} />
          <View style={[styles.wave, { height: 32 }]} />
          <View style={[styles.wave, { height: 16 }]} />
          <View style={[styles.wave, { height: 24 }]} />
          <View style={[styles.wave, { height: 12 }]} />
        </View>
      </View>

      <TouchableOpacity style={styles.stopButton} onPress={onStopSession}>
        <View style={styles.stopSquare} />
        <Text style={styles.stopButtonText}>STOP SESSION</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  recordingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 16,
  },
  recordingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.accentRed,
    marginRight: 8,
    shadowColor: COLORS.accentRed,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  recordingText: {
    color: COLORS.accentRed,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  selectedKitText: {
    color: COLORS.textSecondary,
    fontWeight: 'bold',
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerLabel: {
    color: COLORS.textSecondary,
    letterSpacing: 4,
    fontSize: 12,
    marginBottom: 16,
  },
  timerValue: {
    color: COLORS.textPrimary,
    fontSize: 72,
    fontWeight: 'bold',
  },
  audioWaves: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    gap: 4,
  },
  wave: {
    width: 6,
    backgroundColor: COLORS.accentGreen,
    borderRadius: 3,
  },
  stopButton: {
    backgroundColor: COLORS.accentRed,
    paddingVertical: 30,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  stopSquare: {
    width: 16,
    height: 16,
    backgroundColor: '#FFFFFF',
    marginRight: 12,
  },
  stopButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});