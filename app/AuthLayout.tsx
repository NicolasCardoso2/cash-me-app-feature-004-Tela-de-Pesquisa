import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, Slot } from 'expo-router';

export default function AuthLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      // const token = "await AsyncStorage.getItem('userToken')";
      const logado = true;
      if (logado) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated !== null && isMounted) {
      if (isAuthenticated) {
        router.replace('/default');
        SplashScreen.hideAsync();
      } else {
        router.replace('/LoginScreen');
      }
    }
  }, [isAuthenticated, isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isAuthenticated === null || !isMounted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
