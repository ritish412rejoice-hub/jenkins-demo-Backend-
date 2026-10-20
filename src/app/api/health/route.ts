import { NextResponse } from 'next/server';

export async function GET() {
  const startTime = process.uptime();
  return NextResponse.json({
    status: 'healthy',
    service: 'Next.js Backend API',
    framework: 'Next.js 15+ (App Router)',
    uptimeSeconds: Math.floor(startTime),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    cors: 'enabled',
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
