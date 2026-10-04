/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { LAUNCH_TIMESTAMP } from '../config/launchConfig';

export interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  totalMilliseconds: number;
  isLaunched: boolean;
  launchTimestampIso: string;
}

export function useCountdown(): CountdownTime {
  const [targetTimestamp, setTargetTimestamp] = useState<string>(LAUNCH_TIMESTAMP);
  const [serverOffset, setServerOffset] = useState<number>(0);
  const [serverReleased, setServerReleased] = useState<boolean>(false);

  // Sync server time from /api/launch-status
  const syncWithServer = useCallback(async () => {
    try {
      const res = await fetch('/api/launch-status', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        const clientNow = Date.now();
        const serverNow = new Date(data.serverTime).getTime();

        // serverOffset = serverTime - clientTime
        setServerOffset(serverNow - clientNow);
        if (data.launchTimestamp) {
          setTargetTimestamp(data.launchTimestamp);
        }
        if (typeof data.released === 'boolean') {
          setServerReleased(data.released);
        }
      }
    } catch {
      // If network fails, keeps previous offset and target
    }
  }, []);

  // Compute countdown values based on estimated server time
  const calculateTime = useCallback((): CountdownTime => {
    if (serverReleased) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        totalMilliseconds: 0,
        isLaunched: true,
        launchTimestampIso: targetTimestamp,
      };
    }

    const clientNow = Date.now();
    // estimatedServerNow strictly anchored to server time
    const estimatedServerNow = clientNow + serverOffset;
    const targetMs = new Date(targetTimestamp).getTime();
    const difference = targetMs - estimatedServerNow;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        totalMilliseconds: 0,
        isLaunched: true,
        launchTimestampIso: targetTimestamp,
      };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
      totalMilliseconds: difference,
      isLaunched: false,
      launchTimestampIso: targetTimestamp,
    };
  }, [targetTimestamp, serverOffset, serverReleased]);

  const [time, setTime] = useState<CountdownTime>(calculateTime);

  // Sync on mount and every 10 seconds
  useEffect(() => {
    syncWithServer();
    const interval = setInterval(syncWithServer, 10000);

    const handleFocus = () => {
      if (document.visibilityState === 'visible') {
        syncWithServer();
      }
    };
    document.addEventListener('visibilitychange', handleFocus);
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleFocus);
      window.removeEventListener('focus', handleFocus);
    };
  }, [syncWithServer]);

  // Tick every second
  useEffect(() => {
    setTime(calculateTime());
    const tick = setInterval(() => {
      const updated = calculateTime();
      setTime(updated);
      if (updated.totalMilliseconds <= 0 && !serverReleased) {
        syncWithServer();
      }
    }, 1000);

    return () => clearInterval(tick);
  }, [calculateTime, serverReleased, syncWithServer]);

  return time;
}
