/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// HAL LAUNCH TIME OO KELIYA (Source of Truth)
// Developer-ku hal meel ayuu si toos ah uga beddeli karaa waqtigan.
const LAUNCH_TIMESTAMP = "2026-10-10T18:00:00+03:00";

// Server-side launch status API
// Browser-ku wuxuu ka helaa serverTime iyo launchTimestamp si aan countdown-ka loo khiyaamayn karin.
app.get('/api/launch-status', (_req: Request, res: Response) => {
  const now = Date.now();
  const targetTime = new Date(LAUNCH_TIMESTAMP).getTime();
  const released = now >= targetTime;

  res.json({
    launchTimestamp: LAUNCH_TIMESTAMP,
    serverTime: new Date(now).toISOString(),
    released,
  });
});

// Setup Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`NoXScreen Server running on port ${PORT}`);
    console.log(`Official Launch Timestamp: ${LAUNCH_TIMESTAMP}`);
  });
}

startServer();
