import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function jsonDbPlugin(): Plugin {
  return {
    name: 'json-db-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rootDbPath = path.resolve(__dirname, '../db.json');
        const publicDbPath = path.resolve(__dirname, 'public/db.json');

        if (req.url === '/api/enquiries' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              const newEnquiry = JSON.parse(body);
              let dbData: { enquiries: any[] } = { enquiries: [] };
              if (fs.existsSync(rootDbPath)) {
                try {
                  dbData = JSON.parse(fs.readFileSync(rootDbPath, 'utf-8'));
                  if (!Array.isArray(dbData.enquiries)) dbData.enquiries = [];
                } catch {
                  dbData = { enquiries: [] };
                }
              }

              // Append new enquiry to top of list
              dbData.enquiries.unshift(newEnquiry);

              // Write to both root db.json and client/public/db.json
              fs.writeFileSync(rootDbPath, JSON.stringify(dbData, null, 2), 'utf-8');
              try {
                fs.writeFileSync(publicDbPath, JSON.stringify(dbData, null, 2), 'utf-8');
              } catch {
                // Ignore if public directory not writable
              }

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 201;
              res.end(JSON.stringify({ success: true, message: 'Enquiry saved to db.json successfully', data: newEnquiry }));
            } catch (err: any) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        if (req.url === '/api/enquiries' && req.method === 'GET') {
          try {
            let dbData = { enquiries: [] };
            if (fs.existsSync(rootDbPath)) {
              dbData = JSON.parse(fs.readFileSync(rootDbPath, 'utf-8'));
            }
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(dbData.enquiries || []));
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), jsonDbPlugin()],
  server: {
    port: 5173,
    host: true,
  },
});

