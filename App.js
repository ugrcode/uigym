import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Vibration } from 'react-native';
import workoutProgram from './workouts'; // Yukarıdaki veri dosyası
import * as Notifications from 'expo-notifications';

export default function App() {
  const [today, setToday] = useState(new Date().getDay()); // 0 (Pazar) - 6 (Cuma)
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [completedSets, setCompletedSets] = useState({}); // Set takibi için

  useEffect(() => {
    // Uygulama açılınca bugünün antrenmanını yükle
    setCurrentWorkout(workoutProgram[today]);
    scheduleDailyReminder();
  }, []);

  // Bildirim Ayarlama (Her sabah 08:00)
  const scheduleDailyReminder = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Antrenman Vakti! 💪",
        body: workoutProgram[today].title + " seni bekliyor.",
      },
      trigger: { hour: 8, minute: 0, repeats: true },
    });
  };

  const toggleSet = (exerciseId, setIndex) => {
    const key = `${exerciseId}-${setIndex}`;
    const isCompleted = completedSets[key];
    
    // Seti işaretle/kaldır
    setCompletedSets({...completedSets, [key]: !isCompleted});

    if (!isCompleted) {
      // Set bittiyse telefonu titret ve dinlenme sayacı başlat (Basit versiyon)
      Vibration.vibrate();
      alert("Set bitti! 90 saniye dinlen.");
    }
  };

  if (!currentWorkout) return <Text>Yükleniyor...</Text>;

  return (
    <View style={styles.container}>
      {/* Header Kısmı */}
      <View style={styles.header}>
        <Text style={styles.date}>{new Date().toLocaleDateString('tr-TR', { weekday: 'long' })}</Text>
        <Text style={styles.title}>{currentWorkout.title}</Text>
        {currentWorkout.focus && <Text style={styles.subtitle}>Hedef: {currentWorkout.focus}</Text>}
      </View>

      <ScrollView style={styles.content}>
        {/* Dinlenme veya Kardiyo Günü İse */}
        {(currentWorkout.isRest || currentWorkout.isCardio) ? (
          <View style={styles.restCard}>
            <Text style={styles.restText}>{currentWorkout.message}</Text>
            {/* Buraya bir Lottie animasyonu gelebilir */}
          </View>
        ) : (
          /* Antrenman Günü İse */
          <View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>🔥 Isınma: {currentWorkout.warmup}</Text>
            </View>

            {currentWorkout.exercises.map((exercise) => (
              <View key={exercise.id} style={styles.exerciseCard}>
                <View style={styles.exerciseHeader}>
                   {/* Buraya Animasyon GIF'i gelecek */}
                   {/* <Image source={{uri: 'github_link/...'}} style={styles.gif} /> */}
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                </View>
                <Text style={styles.exerciseNote}>{exercise.note}</Text>
                
                {/* Set Kutucukları */}
                <View style={styles.setsContainer}>
                  {[...Array(exercise.sets)].map((_, i) => (
                    <TouchableOpacity 
                      key={i} 
                      style={[styles.setButton, completedSets[`${exercise.id}-${i}`] && styles.setCompleted]}
                      onPress={() => toggleSet(exercise.id, i)}
                    >
                      <Text style={{color: completedSets[`${exercise.id}-${i}`] ? '#fff' : '#000'}}>
                        {i + 1}. Set
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Text style={styles.repsText}>{exercise.reps} Tekrar</Text>
              </View>
            ))}

            <View style={styles.infoBox}>
              <Text style={styles.infoText}>🚴‍♀️ Sonrası: {currentWorkout.cardio}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', paddingTop: 50 },
  header: { padding: 20, backgroundColor: '#fff', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, shadowColor: "#000", shadowOpacity: 0.1, elevation: 5 },
  date: { fontSize: 16, color: '#888', textTransform: 'uppercase', fontWeight: 'bold' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginTop: 5 },
  subtitle: { fontSize: 16, color: '#007AFF', marginTop: 5 },
  content: { padding: 20 },
  exerciseCard: { backgroundColor: '#fff', padding: 15, borderRadius: 15, marginBottom: 15, shadowColor: "#000", shadowOpacity: 0.05 },
  exerciseName: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  exerciseNote: { fontSize: 14, color: '#666', marginBottom: 10 },
  setsContainer: { flexDirection: 'row', gap: 10, marginTop: 10 },
  setButton: { padding: 10, borderRadius: 8, backgroundColor: '#e0e0e0', minWidth: 60, alignItems: 'center' },
  setCompleted: { backgroundColor: '#4CD964' },
  restCard: { padding: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 20 },
  restText: { fontSize: 18, textAlign: 'center', lineHeight: 28 },
  infoBox: { padding: 15, backgroundColor: '#E1F5FE', borderRadius: 10, marginBottom: 20 },
  infoText: { color: '#0277BD', fontWeight: 'bold' }
});