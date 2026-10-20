import { NextResponse } from 'next/server';
import { getTasks, addTask, Task } from '@/lib/store';

export async function GET() {
  const tasks = getTasks();
  return NextResponse.json({
    success: true,
    total: tasks.length,
    data: tasks,
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, priority } = body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Task title is required.' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    const newTask = addTask({
      title: title.trim(),
      category: category as Task['category'],
      priority: priority as Task['priority'],
    });

    return NextResponse.json(
      { success: true, message: 'Task created successfully', data: newTask },
      { status: 201, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON request payload.' },
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
