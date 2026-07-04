import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function FeedbackModal({ visible, onSave }) {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const statusOptions = [
    { id: 'ALL OK', label: 'ALL OK', iconName: 'check-circle-outline' },
    { id: 'BATTERY LOW', label: 'BATTERY LOW', iconName: 'battery-alert-variant-outline' },
    { id: 'CAMERA FAILURE', label: 'CAMERA FAILURE', iconName: 'camera-off-outline' },
  ];

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          
          <Text style={styles.subtitle}>REPORT STATUS</Text>
          <Text style={styles.title}>SESSION STATUS</Text>
          <View style={styles.underline} />

          {statusOptions.map((option) => {
            const isSelected = selectedStatus === option.id;
            return (
              <TouchableOpacity
                key={option.id}
                style={[styles.statusButton, isSelected && styles.statusButtonSelected]}
                onPress={() => setSelectedStatus(option.id)}
              >
                <MaterialCommunityIcons 
                  name={option.iconName} 
                  size={24} 
                  color={isSelected ? COLORS.accentGreen : COLORS.textPrimary} 
                  style={styles.iconSpacing}
                />
                <Text style={[styles.statusText, isSelected && styles.statusTextSelected]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={[styles.saveButton, !selectedStatus && styles.saveButtonDisabled]}
            disabled={!selectedStatus}
            onPress={() => onSave(selectedStatus)} // se manda el estado elegido 
          >
            <Feather name="send" size={20} color="#000" style={styles.iconSpacing} />
            <Text style={styles.saveButtonText}> SAVE AND SEND</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)', 
    justifyContent: 'center',
    padding: 24,
  },
  modalBox: {
    backgroundColor: COLORS.cardBackground,
    borderWidth: 2,
    borderColor: COLORS.accentGreen,
    borderRadius: 24,
    padding: 30,
  },
  subtitle: { 
    color: COLORS.textSecondary, 
    fontSize: 12, 
    letterSpacing: 2, 
    marginBottom: 8 
  },
  title: { 
    color: COLORS.textPrimary, 
    fontSize: 24, 
    fontWeight: '900' 
  },
  underline: { 
    height: 4, 
    width: 40, 
    backgroundColor: COLORS.accentGreen, 
    marginTop: 8, 
    marginBottom: 30, 
    borderRadius: 2 
  },
  statusButton: {
    backgroundColor: '#111111',
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  statusButtonSelected: { 
    borderColor: COLORS.accentGreen 
  },
  statusText: { 
    color: COLORS.textPrimary, 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  statusTextSelected: { 
    color: COLORS.accentGreen 
  },
  saveButton: { 
    backgroundColor: COLORS.accentGreen, 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginTop: 10 
  },
  saveButtonDisabled: { 
    opacity: 0.5, 
    backgroundColor: COLORS.border 
  },
  saveButtonText: { 
    color: '#000', 
    fontWeight: 'bold', 
    fontSize: 16, 
    letterSpacing: 1 
  },
});